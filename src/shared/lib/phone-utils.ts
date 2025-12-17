export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, "");
};

export const formatPhoneForDisplay = (phone: string): string => {
  const cleaned = cleanPhoneNumber(phone);

  if (cleaned.startsWith("7") || cleaned.startsWith("8")) {
    const number = cleaned.startsWith("7") ? cleaned : `7${cleaned.substring(1)}`;
    let formatted = "+7";

    if (number.length > 1) formatted += ` (${number.substring(1, 4)}`;
    if (number.length > 4) formatted += `) ${number.substring(4, 7)}`;
    if (number.length > 7) formatted += `-${number.substring(7, 9)}`;
    if (number.length > 9) formatted += `-${number.substring(9, 11)}`;

    return formatted;
  }

  return phone;
};

export const formatPhoneForValidation = (phone: string): string => {
  const cleaned = cleanPhoneNumber(phone);

  if (cleaned.startsWith("7") || cleaned.startsWith("8")) {
    const number = cleaned.startsWith("7") ? cleaned : `7${cleaned.substring(1)}`;
    return `+${number.substring(0, 11)}`; 
  }

  return `+${cleaned}`;
};

export const isPhoneLimitReached = (phone: string): boolean => {
  const cleaned = cleanPhoneNumber(phone);
  return cleaned.length >= 11;
};

export const handlePhoneInput = (
  input: string,
  previousValue: string
): { displayValue: string; rawValue: string } => {
  if (input.length < 2) {
    return { displayValue: "+7", rawValue: "+7" };
  }

  const cleaned = cleanPhoneNumber(input);

  if (!cleaned.startsWith("7") && !cleaned.startsWith("8")) {
    return {
      displayValue: input,
      rawValue: `+${cleaned}`,
    };
  }

  const limited = cleaned.substring(0, 11);

  const displayValue = formatPhoneForDisplay(limited);

  const rawValue = formatPhoneForValidation(limited);

  return { displayValue, rawValue };
};
