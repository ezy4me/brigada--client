// features/profile/ui/company-profile-fields/CompanyProfileFields.tsx
import { UseFormRegister, FieldErrors } from "react-hook-form";

import { CompanyProfileFormData } from "@/features/profile/lib/validation-schemas";
import { Input } from "@/shared/ui/input/Input";
import { Text } from "@/shared/ui/text/Text";

import * as styles from "./companyProfileFields.css";

interface CompanyProfileFieldsProps {
  register: UseFormRegister<CompanyProfileFormData>;
  errors: FieldErrors<CompanyProfileFormData>;
  userEmail: string;
  isLoading: boolean;
}

export const CompanyProfileFields = ({
  register,
  errors,
  userEmail,
  isLoading,
}: CompanyProfileFieldsProps) => {
  return (
    <div className={styles.fields}>
      <div className={styles.fieldGroup}>
        <Input
          label="Название компании"
          type="text"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          placeholder="Общество с ограниченной ответственностью 'СтройМастер'"
          disabled={isLoading}
          required
        />
        <Input
          label="Краткое название"
          type="text"
          {...register("shortName")}
          error={!!errors.shortName}
          helperText={errors.shortName?.message}
          placeholder="ООО 'СтройМастер'"
          disabled={isLoading}
        />
      </div>

      <div className={styles.fieldGroup}>
        <Input
          label="ИНН"
          type="text"
          {...register("inn")}
          error={!!errors.inn}
          helperText={errors.inn?.message}
          placeholder="1234567890"
          disabled={isLoading}
          required
        />
        <Input
          label="ОГРН"
          type="text"
          {...register("ogrn")}
          error={!!errors.ogrn}
          helperText={errors.ogrn?.message}
          placeholder="1234567890123"
          disabled={isLoading}
        />
      </div>

      <div className={styles.singleField}>
        <Input
          label="ОГРНИП"
          type="text"
          {...register("ogrnip")}
          error={!!errors.ogrnip}
          helperText={errors.ogrnip?.message}
          placeholder="123456789012345"
          disabled={isLoading}
        />
      </div>

      <div className={styles.singleField}>
        <Input
          label="Адрес"
          type="text"
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
          placeholder="г. Москва, ул. Строителей, д. 1"
          disabled={isLoading}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <Input
          label="Представитель"
          type="text"
          {...register("representativeFullName")}
          error={!!errors.representativeFullName}
          helperText={errors.representativeFullName?.message}
          placeholder="Иванов Иван Иванович"
          disabled={isLoading}
          required
        />
        <Input
          label="Телефон представителя"
          type="tel"
          {...register("representativePhone")}
          error={!!errors.representativePhone}
          helperText={errors.representativePhone?.message}
          placeholder="+79991234567"
          disabled={isLoading}
          required
        />
      </div>

      <div className={styles.fieldGroup}>
        <Input
          label="Email компании"
          type="email"
          value={userEmail}
          disabled
          placeholder="company@example.com"
        />
        <Input
          label="Телефон компании"
          type="tel"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          placeholder="+74951234567"
          disabled={isLoading}
          required
        />
      </div>

      <div className={styles.singleField}>
        <label className={styles.selectLabel}>
          <span>Предпочтительный способ связи</span>
          <select {...register("preferedContact")} className={styles.select} disabled={isLoading}>
            <option value="email">Email</option>
            <option value="phone">Телефон</option>
            <option value="t.me">Telegram</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </label>
        {errors.preferedContact && (
          <Text size="caption" color="error" className={styles.errorText}>
            Выберите предпочтительный способ связи
          </Text>
        )}
      </div>
    </div>
  );
};
