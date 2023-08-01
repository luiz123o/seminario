import "dayjs/locale/pt-br";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";

export function InputDate({
  className,
  label,
  placeholder,
  register,
  name,
}: {
  className: string;
  label?: string;
  placeholder?: string;
  register: any;
  name?: string;
}) {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <DatePickerInput
      {...register(name)}
      label={label || "Data de Nascimento"}
      placeholder={placeholder || "Data de Nascimento"}
      value={value}
      onChange={setValue}
      className={className}
      locale="pt-br"
    />
  );
}
