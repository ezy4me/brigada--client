import { Building, FileText, CreditCard, Check } from "lucide-react";
import { UseFormRegister } from "react-hook-form";

import { RegisterFormFields } from "@/features/auth/lib/use-register-form";
import { Dropdown } from "@/shared/ui/dropdown/Dropdown";
import { Input } from "@/shared/ui/input/Input";

import * as styles from "../registerForm.css";

interface CompanyFieldsProps {
  register: UseFormRegister<RegisterFormFields>;
  errors: any;
  isLoading: boolean;
  selectedTariff: string;
  onTariffSelect: (value: string) => void;
}

const tariffs = [
  { value: "basic", label: "Базовый - бесплатно" },
  { value: "pro", label: "Про - 990₽/месяц" },
  { value: "business", label: "Бизнес - 2990₽/месяц" },
];

export const CompanyFields = ({
  register,
  errors,
  isLoading,
  selectedTariff,
  onTariffSelect,
}: CompanyFieldsProps) => {
  const getSelectedTariffLabel = () => {
    const selected = tariffs.find((t) => t.value === selectedTariff);
    return selected ? selected.label : "Выберите тариф";
  };

  const dropdownItems = tariffs.map((tariff) => ({
    label: tariff.label,
    value: tariff.value,
    onSelect: () => onTariffSelect(tariff.value),
    icon: selectedTariff === tariff.value ? <Check size={16} /> : undefined,
  }));

  return (
    <>
      <div className={styles.inputWrapper}>
        <Input
          label="Наименование компании"
          type="text"
          disabled={isLoading}
          leftIcon={<Building size={16} />}
          error={!!errors.companyName}
          helperText={errors.companyName?.message}
          {...register("companyName")}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label="ИНН"
          type="text"
          disabled={isLoading}
          leftIcon={<FileText size={16} />}
          maxLength={10}
          error={!!errors.inn}
          helperText={errors.inn?.message}
          {...register("inn")}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label className={styles.selectLabel}>Тариф</label>
        <Dropdown
          triggerVariant="outline"
          triggerSize="md"
          triggerLeftIcon={<CreditCard size={16} />}
          triggerText={getSelectedTariffLabel()}
          items={dropdownItems}
          align="start"
          className={styles.tariffDropdown}
        />
        {errors.tariff && <span className={styles.errorText}>{errors.tariff.message}</span>}
      </div>
    </>
  );
};
