import { Input } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { IMaskInput } from "react-imask";

export function InputPhone({ className, register }: { className: string, register: any }) {
  const id = useId();
  return (
    <Input.Wrapper id={id} label="Celular" required>
      <Input<any>
        {...register("phone")}
        component={IMaskInput}
        mask="+55 (00) *0000-0000"
        id={id}
        placeholder="Celular"
        className={className}
      />
    </Input.Wrapper>
  );
}
