import { IMaskInput } from "react-imask";
import { Controller } from "react-hook-form";

export function InputPhone({
  className,
  register,
  control,
}: {
  className: string;
  control: any;
  register: any;
}) {
  return (
    <Controller
      {...register("phone")}
      as={IMaskInput}
      mask="+55 (00) *0000-0000"
      name="phone"
      control={control}
      placeholder="Celular"
      className={className}
    />
  );
}
