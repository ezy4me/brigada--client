/**
 * Validation error interface
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

/**
 * Email validation
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Password validation
 */
export const validatePassword = (password: string): ValidationResult => {
  const errors: ValidationError[] = [];

  if (password.length < 8) {
    errors.push({ field: "password", message: "Пароль должен содержать минимум 8 символов" });
  }

  if (!/(?=.*[a-z])/.test(password)) {
    errors.push({
      field: "password",
      message: "Пароль должен содержать хотя бы одну строчную букву",
    });
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push({
      field: "password",
      message: "Пароль должен содержать хотя бы одну заглавную букву",
    });
  }

  if (!/(?=.*\d)/.test(password)) {
    errors.push({ field: "password", message: "Пароль должен содержать хотя бы одну цифру" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Phone number validation (Russian format)
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

/**
 * INN validation (Russian tax identification number)
 */
export const validateINN = (inn: string): boolean => {
  const innRegex = /^\d{10}$|^\d{12}$/;
  if (!innRegex.test(inn)) return false;

  // Basic checksum validation for 10-digit INN
  if (inn.length === 10) {
    const coefficients = [2, 4, 10, 3, 5, 9, 4, 6, 8];
    const sum = inn
      .split("")
      .slice(0, 9)
      .reduce((acc, digit, index) => {
        return acc + parseInt(digit) * coefficients[index];
      }, 0);
    const checksum = (sum % 11) % 10;
    return checksum === parseInt(inn[9]);
  }

  return true; // For 12-digit INN, basic format check is enough
};

/**
 * Required field validation
 */
export const validateRequired = (value: string | number | undefined | null): boolean => {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
};

/**
 * Min length validation
 */
export const validateMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

/**
 * Max length validation
 */
export const validateMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

/**
 * Price validation
 */
export const validatePrice = (price: number | string): boolean => {
  const numPrice = typeof price === "string" ? parseFloat(price) : price;
  return !isNaN(numPrice) && numPrice > 0;
};

/**
 * Form data validation for registration
 */
export const validateRegistrationData = (data: {
  email: string;
  password: string;
  confirmPassword: string;
  name?: string;
  companyName?: string;
  inn?: string;
}): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!validateRequired(data.email)) {
    errors.push({ field: "email", message: "Email обязателен" });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: "email", message: "Введите корректный email" });
  }

  const passwordValidation = validatePassword(data.password);
  if (!passwordValidation.isValid) {
    errors.push(...passwordValidation.errors);
  }

  if (data.password !== data.confirmPassword) {
    errors.push({ field: "confirmPassword", message: "Пароли не совпадают" });
  }

  if (data.name && !validateMinLength(data.name, 2)) {
    errors.push({ field: "name", message: "Имя должно содержать минимум 2 символа" });
  }

  if (data.companyName && !validateMinLength(data.companyName, 2)) {
    errors.push({
      field: "companyName",
      message: "Название компании должно содержать минимум 2 символа",
    });
  }

  if (data.inn && !validateINN(data.inn)) {
    errors.push({ field: "inn", message: "Введите корректный ИНН" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Order form validation
 */
export const validateOrderForm = (data: {
  title: string;
  description: string;
  price: string;
  region: string;
}): ValidationResult => {
  const errors: ValidationError[] = [];

  if (!validateRequired(data.title)) {
    errors.push({ field: "title", message: "Название заказа обязательно" });
  } else if (!validateMinLength(data.title, 5)) {
    errors.push({ field: "title", message: "Название должно содержать минимум 5 символов" });
  }

  if (!validateRequired(data.description)) {
    errors.push({ field: "description", message: "Описание обязательно" });
  } else if (!validateMinLength(data.description, 10)) {
    errors.push({ field: "description", message: "Описание должно содержать минимум 10 символов" });
  }

  if (!validateRequired(data.price)) {
    errors.push({ field: "price", message: "Цена обязательна" });
  } else if (!validatePrice(data.price)) {
    errors.push({ field: "price", message: "Введите корректную цену" });
  }

  if (!validateRequired(data.region)) {
    errors.push({ field: "region", message: "Регион обязателен" });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Export all validators
export default {
  validateEmail,
  validatePassword,
  validatePhone,
  validateINN,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validatePrice,
  validateRegistrationData,
  validateOrderForm,
};
