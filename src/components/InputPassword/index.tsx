import {
  Box,
  Center,
  Group,
  PasswordInput,
  Progress,
  Text,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";

function PasswordRequirement({
  meets,
  label,
}: {
  meets: boolean;
  label: string;
}) {
  return (
    <Text color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? (
          <IconCheck size="0.9rem" stroke={1.5} />
        ) : (
          <IconX size="0.9rem" stroke={1.5} />
        )}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Deve incluir pelo menos um numero" },
  { re: /[a-z]/, label: "Deve incluir letras minúsculas" },
  { re: /[A-Z]/, label: "Deve incluir letras maiúscula" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Deve incluir símbolos" },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

export function InputPassword({
  isConfirmation,
  className,
  register,
}: {
  isConfirmation: boolean;
  className: string;
  register: any;
}) {
  const [value, setValue] = useInputState("");
  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: "0ms" } }}
        value={
          value.length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / 4) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"}
        key={index}
        size={4}
      />
    ));

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <PasswordInput
        {...register("password")}
        value={value}
        className={className}
        onChange={setValue}
        placeholder={isConfirmation ? "Confirme sua Senha" : "Sua senha"}
        label={isConfirmation ? "Confirme sua Senha" : "Sua senha"}
        required
      />
      {!isConfirmation ? (
        <>
          <Group spacing={5} grow mt="xs" mb="md">
            {bars}
          </Group>

          {value ? (
            <PasswordRequirement
              label="Tem pelo menos 6 caracteres"
              meets={value.length > 5}
            />
          ) : null}
          {value ? checks : null}
        </>
      ) : null}
    </div>
  );
}
