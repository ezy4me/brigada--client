import { Input } from "@/shared/ui/input/Input";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { UseFormRegister } from "react-hook-form";
import { LoginData } from "@/features/auth/lib/validation-schemas";
import * as styles from "../loginForm.css";

interface LoginFieldsProps {
  register: UseFormRegister<LoginData>;
  errors: any;
  isLoading: boolean;
  showPassword: boolean;
  onTogglePassword: () => void;
  onForgotPassword: () => void;
}

export const LoginFields = ({
  register,
  errors,
  isLoading,
  showPassword,
  onTogglePassword,
  onForgotPassword,
}: LoginFieldsProps) => {
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
            <button
              type="button"
              onClick={onTogglePassword}
              className={styles.passwordToggle}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
        />
      </div>

      <div className={styles.forgotPassword}>
        <button
          type="button"
          onClick={onForgotPassword}
          className={styles.forgotPasswordLink}
        >
          Забыли пароль?
        </button>
      </div>
    </>
  );
};
