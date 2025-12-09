import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';

import { LoginData } from './validation-schemas';

export const useLoginForm = (onSubmit: SubmitHandler<LoginData>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<LoginData>();

  const handleFormSubmit: SubmitHandler<LoginData> = async (data) => {
    setIsLoading(true);
    setServerError(null);
    clearErrors();

    try {
      await onSubmit(data);
    } catch (error: any) {
      if (error.message.includes('email') || error.message.includes('Email')) {
        setError('email', {
          type: 'manual',
          message: error.message,
        });
      } else if (error.message.includes('password') || error.message.includes('пароль')) {
        setError('password', {
          type: 'manual',
          message: error.message,
        });
      } else {
        setServerError(error.message || 'Ошибка при входе');
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
    handleSubmit: handleSubmit(handleFormSubmit),
  };
};