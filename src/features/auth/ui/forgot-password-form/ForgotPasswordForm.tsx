import { useState } from "react";

import { Mail } from "lucide-react";

import { Button } from "@/shared/ui/button/Button";
import { Input } from "@/shared/ui/input/Input";

import * as styles from "./forgotPasswordForm.css";

interface FormData {
  email: string;
}

interface FormErrors {
  email?: string;
  general?: string;
}

export interface ForgotPasswordFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  loading?: boolean;
  error?: string;
}

export const ForgotPasswordForm = ({
  onSubmit,
  loading = false,
  error,
}: ForgotPasswordFormProps) => {
  const [formData, setFormData] = useState<FormData>({ email: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.email) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email некорректен";
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    try {
      await onSubmit(formData);
    } catch (err) {
      console.error("Reset request failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.inputWrapper}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email || !!error}
          helperText={errors.email || error}
          disabled={loading}
          leftIcon={<Mail size={16} />}
        />
      </div>

      <Button
        type="submit"
        className={styles.button}
        variant="primary"
        size="md"
        disabled={loading}
      >
        {loading ? "Отправляем..." : "Отправить ссылку"}
      </Button>
    </form>
  );
};
