import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginData } from "./validation-schemas";

export const useLoginForm = (
  onSubmit: (data: LoginData) => Promise<void>
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onFormSubmit = async (data: LoginData) => {
    setIsLoading(true);
    setServerError(null);

    try {
      await onSubmit(data);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Произошла ошибка при входе";
      setServerError(errorMessage);

      if (errorMessage.includes("email")) {
        setError("email", { message: errorMessage });
      } else if (errorMessage.includes("парол")) {
        setError("password", { message: errorMessage });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    serverError,
    errors,
    register,
    handleSubmit: handleSubmit(onFormSubmit),
  };
};
