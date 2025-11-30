import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { UseFormRegister } from "react-hook-form";

import { RegisterFormFields } from "@/features/auth/lib/use-register-form";
import { Input } from "@/shared/ui/input/Input";

import * as styles from "../registerForm.css";

interface BaseFieldsProps {
  register: UseFormRegister<RegisterFormFields>;
  errors: any;
  isLoading: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
  onTogglePassword: () => void;
  onToggleConfirmPassword: () => void;
}

export const BaseFields = ({
  register,
  errors,
  isLoading,
  showPassword,
  showConfirmPassword,
  onTogglePassword,
  onToggleConfirmPassword,
}: BaseFieldsProps) => {
  return (
    <>
      <div className={styles.inputWrapper}>
        <Input
          label="Email"
          type="email"
          disabled={isLoading}
          leftIcon={<Mail size={16} />}
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label="Пароль"
          type={showPassword ? "text" : "password"}
          disabled={isLoading}
          leftIcon={<Lock size={16} />}
          rightIcon={
            <button type="button" onClick={onTogglePassword} className={styles.passwordToggle}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label="Подтвердите пароль"
          type={showConfirmPassword ? "text" : "password"}
          disabled={isLoading}
          leftIcon={<Lock size={16} />}
          rightIcon={
            <button
              type="button"
              onClick={onToggleConfirmPassword}
              className={styles.passwordToggle}
            >
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
      </div>
    </>
  );
};
