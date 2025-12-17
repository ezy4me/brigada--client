"use client";

import { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Camera, CheckCircle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "@/features/auth/lib/use-auth";
import { profileApi } from "@/features/profile/api/profile-api";
import {
  CustomerPerformerProfileFormData,
  customerPerformerProfileSchema,
  safePreferedContact,
} from "@/features/profile/lib/validation-schemas";
import { CustomerProfile, PerformerProfile } from "@/shared/lib/types/profile.types";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Text } from "@/shared/ui/text/Text";

import { ProfileFields } from "./profile-fields/ProfileFields";
import * as styles from "./profileForm.css";

export interface ProfileFormProps {
  className?: string;
}

export const ProfileForm = ({ className }: ProfileFormProps) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState<CustomerProfile | PerformerProfile | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<CustomerPerformerProfileFormData>({
    resolver: zodResolver(customerPerformerProfileSchema),
    mode: "onChange",
    defaultValues: {
      surname: "",
      name: "",
      patronymic: "",
      phone: "",
      preferedContact: "email",
      specializationId: "",
    },
  });

  useEffect(() => {
    const loadProfile = async () => {
      if (!user) return;

      setIsLoading(true);
      try {
        let profileData: CustomerProfile | PerformerProfile;
        if (user.role === "customer") {
          profileData = await profileApi.getCustomerProfile();
        } else if (user.role === "performer") {
          profileData = await profileApi.getPerformerProfile();
        } else {
          return;
        }

        setProfile(profileData);

        reset({
          surname: profileData.surname || "",
          name: profileData.name || "",
          patronymic: profileData.patronymic || "",
          phone: profileData.phone || "",
          preferedContact: safePreferedContact(profileData.preferedContact),
          specializationId: profileData.specializationId || "",
        });
      } catch (error: any) {
        console.error("Error loading profile:", error);
        setFormError(error.message || "Ошибка загрузки профиля");
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [user, reset]);

  const onSubmit: SubmitHandler<CustomerPerformerProfileFormData> = async (data) => {
    if (!user || !profile) return;

    setIsSaving(true);
    setFormError(null);

    try {
      const submitData = {
        surname: data.surname.trim(),
        name: data.name.trim(),
        phone: data.phone.trim(),
        preferedContact: data.preferedContact,
        patronymic: data.patronymic,
        specializationId: data.specializationId,
      };

      if (data.patronymic?.trim()) {
        submitData.patronymic = data.patronymic.trim();
      }
      if (data.specializationId?.trim()) {
        submitData.specializationId = data.specializationId.trim();
      }

      if (user.role === "customer") {
        await profileApi.updateCustomerProfile(submitData);
      } else if (user.role === "performer") {
        await profileApi.updatePerformerProfile(submitData);
      }

      setProfile((prev: CustomerProfile | PerformerProfile | null) =>
        prev ? { ...prev, ...data } : null
      );
      console.log("Profile updated successfully");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      setFormError(error.message || "Ошибка сохранения профиля");
    } finally {
      setIsSaving(false);
    }
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case "performer":
        return "Исполнитель";
      case "customer":
        return "Заказчик";
      case "company":
        return "Компания";
      default:
        return role;
    }
  };

  if (isLoading) {
    return (
      <Card className={cn(styles.formCard, className)}>
        <div className={styles.profileHeader}>
          <div className={styles.loadingAvatar} />
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              <Text>Загрузка...</Text>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (!profile || !user) {
    return (
      <Card className={cn(styles.formCard, className)}>
        <Text>Профиль не найден</Text>
      </Card>
    );
  }

  const fullName = `${profile.surname} ${profile.name} ${profile.patronymic}`.trim();

  return (
    <Card className={cn(styles.formCard, className)}>
      <div className={styles.profileHeader}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
            {profile.name?.charAt(0) || user.email?.charAt(0).toUpperCase()}
          </div>
          <button className={styles.uploadButton} type="button">
            <Camera size={16} />
          </button>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.userName}>
            <Text>{fullName || user.email.split("@")[0]}</Text>
            <CheckCircle className={styles.verifiedIcon} size={16} />
          </div>
          <Text className={styles.userRole}>{getRoleDisplayName(user.role)}</Text>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
        <ProfileFields
          register={register}
          errors={errors}
          userRole={user.role}
          userEmail={user.email}
          isLoading={isLoading}
        />

        {formError && <div className={styles.errorText}>{formError}</div>}

        <div className={styles.buttonGroup}>
          <Button type="button" variant="ghost" size="md">
            Сменить пароль
          </Button>
          <Button type="submit" variant="primary" size="md" disabled={isSaving || !isValid}>
            {isSaving ? "Сохранение..." : "Сохранить"}
          </Button>
        </div>
      </form>
    </Card>
  );
};
