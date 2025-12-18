import { MessageCircle, Mail, Phone, MessageSquare } from "lucide-react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

import { cn } from "@/shared/lib/utils";
import { Select, SelectOption } from "@/shared/ui/select/Select";

import * as styles from "./contactMethodSelect.css";

export interface ContactMethod {
  value: "email" | "phone" | "t.me" | "whatsapp";
  label: string;
  icon: React.ReactNode;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    value: "email",
    label: "Email",
    icon: <Mail size={16} />,
  },
  {
    value: "phone",
    label: "Телефон",
    icon: <Phone size={16} />,
  },
  {
    value: "t.me",
    label: "Telegram",
    icon: <MessageCircle size={16} />,
  },
  {
    value: "whatsapp",
    label: "WhatsApp",
    icon: <MessageSquare size={16} />,
  },
];

export interface ContactMethodSelectProps {
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  helperText?: string;
  label?: string;
  disabled?: boolean;
}

export const ContactMethodSelect = ({
  value,
  onChange,
  error,
  helperText,
  label = "Предпочтительный способ связи",
  disabled,
}: ContactMethodSelectProps) => {
  const options: SelectOption[] = CONTACT_METHODS.map(method => ({
    value: method.value,
    label: method.label,
  }));

  const selectedMethod = CONTACT_METHODS.find(method => method.value === value);

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder="Выберите способ связи"
        error={error}
        helperText={helperText}
        disabled={disabled}
        size="md"
      />
      {selectedMethod && (
        <div className={styles.selectedMethod}>
          <div className={styles.selectedIcon}>{selectedMethod.icon}</div>
          <span className={styles.selectedLabel}>{selectedMethod.label}</span>
        </div>
      )}
    </div>
  );
};