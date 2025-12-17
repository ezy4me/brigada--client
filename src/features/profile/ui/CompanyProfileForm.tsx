"use client";

import { useState, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Building } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAuth } from "@/features/auth/lib/use-auth";
import { profileApi } from "@/features/profile/api/profile-api";
import {
  CompanyProfileFormData,
  companyProfileSchema,
  safePreferedContact,
} from "@/features/profile/lib/validation-schemas";
import { CompanyProfile, UpdateCompanyProfileDto } from "@/shared/lib/types/profile.types";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Text } from "@/shared/ui/text/Text";

import { CompanyProfileFields } from "./company-profile-fields/CompanyProfileFields";
import * as styles from "./profileForm.css";

export interface CompanyProfileFormProps {
  className?: string;
}

export const CompanyProfileForm = ({ className }: CompanyProfileFormProps) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [profile, setProfile] = useState<CompanyProfile | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<CompanyProfileFormData>({
    resolver: zodResolver(companyProfileSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      shortName: "",
      phone: "",
      address: "",
      inn: "",
      ogrn: "",
      ogrnip: "",
      representativeFullName: "",
      representativePhone: "",
      preferedContact: "email",
    },
  });

  useEffect(() => {
    const loadProfile = async () => {
      if (!user || user.role !== "company") return;

      setIsLoading(true);
      try {
        const profileData = await profileApi.getCompanyProfile();
        setProfile(profileData);

        reset({
          name: profileData.name || "",
          shortName: profileData.shortName || "",
          phone: profileData.phone || "",
          address: profileData.address || "",
          inn: profileData.inn || "",
          ogrn: profileData.ogrn || "",
          ogrnip: profileData.ogrnip || "",
          representativeFullName: profileData.representativeFullName || "",
          representativePhone: profileData.representativePhone || "",
          preferedContact: safePreferedContact(profileData.preferedContact),
        });
      } catch (error: any) {
        console.error("Error loading company profile:", error);
        setFormError(error.message || "Ошибка загрузки профиля компании");
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [user, reset]);

  const onSubmit: SubmitHandler<CompanyProfileFormData> = async (data) => {
    if (!user || user.role !== "company" || !profile) return;

    setIsSaving(true);
    setFormError(null);

    try {
      const submitData: UpdateCompanyProfileDto = {
        name: data.name.trim(),
        phone: data.phone.trim(),
        address: data.address.trim(),
        inn: data.inn.trim(),
        representativeFullName: data.representativeFullName.trim(),
        representativePhone: data.representativePhone.trim(),
        preferedContact: data.preferedContact,
      };

      if (data.shortName?.trim()) {
        submitData.shortName = data.shortName.trim();
      }
      if (data.ogrn?.trim()) {
        submitData.ogrn = data.ogrn.trim();
      }
      if (data.ogrnip?.trim()) {
        submitData.ogrnip = data.ogrnip.trim();
      }

      await profileApi.updateCompanyProfile(submitData);
      setProfile((prev) => (prev ? { ...prev, ...data } : null));
      console.log("Company profile updated successfully");
    } catch (error: any) {
      console.error("Error updating company profile:", error);
      setFormError(error.message || "Ошибка сохранения профиля компании");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <Card className={cn(styles.formCard, className)}>
        <div className={styles.profileHeader}>
          <div className={styles.loadingAvatar}>
            <Building size={24} />
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>
              <Text>Загрузка профиля компании...</Text>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (!profile || !user || user.role !== "company") {
    return (
      <Card className={cn(styles.formCard, className)}>
        <Text>Профиль компании не найден</Text>
      </Card>
    );
  }

  return (
    <Card className={cn(styles.formCard, className)}>
      <div className={styles.profileHeader}>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatar}>
            <Building size={32} />
          </div>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.userName}>
            <Text>{profile.name || profile.shortName}</Text>
            <CheckCircle className={styles.verifiedIcon} size={16} />
          </div>
          <Text className={styles.userRole}>Компания</Text>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
        <CompanyProfileFields
          register={register}
          errors={errors}
          userEmail={user.email}
          isLoading={isLoading}
        />

        {formError && <div className={styles.errorText}>{formError}</div>}

        <div className={styles.buttonGroup}>
          <Button type="submit" variant="primary" size="md" disabled={isSaving || !isValid}>
            {isSaving ? "Сохранение..." : "Сохранить"}
          </Button>
        </div>
      </form>
    </Card>
  );
};
