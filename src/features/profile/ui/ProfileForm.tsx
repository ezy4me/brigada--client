"use client";

import { useState } from "react";

import { Camera, CheckCircle } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button/Button";
import { Card } from "@/shared/ui/card/Card";
import { Input } from "@/shared/ui/input/Input";
import { Text } from "@/shared/ui/text/Text";


import * as styles from "./profileForm.css";


interface FormData {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phone: string;
}

export interface ProfileFormProps {
  initialData?: Partial<FormData>;
  className?: string;
}

export const ProfileForm = ({ initialData = {}, className }: ProfileFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    middleName: initialData.middleName || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Saved:", formData);

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <Card className={cn(styles.formCard, className)}>
      <div className={styles.profileHeader}>
        <div className={styles.avatarWrapper}>
          <img src="/user-avatar.jpg" alt="Аватар пользователя" className={styles.avatar} />
          <button className={styles.uploadButton}>
            <Camera size={16} />
          </button>
        </div>

        <div className={styles.userInfo}>
          <div className={styles.userName}>
            <Text>Иван Петров</Text>
            <CheckCircle className={styles.verifiedIcon} size={16} />
          </div>
          <Text className={styles.userRole}>Исполнитель</Text>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <Input
            label="Фамилия"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Петров"
          />
          <Input
            label="Имя"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Иван"
          />
        </div>

        <div className={styles.singleField}>
          <Input
            label="Отчество"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Иванович"
          />
        </div>

        <div className={styles.fieldGroup}>
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ivan@example.com"
          />
          <Input
            label="Телефон"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (999) 123-45-67"
          />
        </div>

        <div className={styles.buttonGroup}>
          <Button type="button" variant="ghost" size="md">
            Сменить пароль
          </Button>
          <Button type="submit" variant="primary" size="md">
            Сохранить
          </Button>
        </div>
      </form>
    </Card>
  );
};
