import { Box, Button, Checkbox, Container, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { InputDate } from "../InputDate";
import { InputPassword } from "../InputPassword";
import { useStylesCreateUser } from "./styles";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../hooks/useCreateUser";

type PayloadReq = {
  name: string;
  document: string;
  email: string;
  street: string;
  number_home: number;
  complement: string;
  birth: Date;
  city: string;
  state: string;
  avatar: string;
  phone: string;
  password: string;
  password_confirmation: string;
  student?: boolean;
  teacher?: boolean;
};

export const CEUser = () => {
  const defaultValues: PayloadReq = {
    name: "",
    document: "",
    email: "",
    street: "",
    number_home: 0,
    complement: "",
    birth: new Date(),
    city: "",
    state: "",
    avatar: "",
    phone: "",
    password: "",
    password_confirmation: "",
    student: false,
    teacher: false,
  };
  const { classes } = useStylesCreateUser();

  const { handleCreateUser, isLoading } = useCreateUser();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PayloadReq>({
    defaultValues,
  });

  return (
    <Container className={classes.container}>
      <Box>
        <TextInput
          {...register("name", { required: true })}
          placeholder="Name"
          label="Nome completo"
          withAsterisk
          required
        />
      </Box>

      <Box className={classes.contentFlex}>
        <TextInput
          {...register("document", {
            required: { value: true, message: "Este campo é obrigatorio" },
          })}
          className={classes.inputFlex}
          placeholder="CPF"
          label="CPF"
          withAsterisk
          required
          error={errors.document ? errors.document.message : false}
        />

        <TextInput
          {...register("email", { required: true })}
          className={classes.inputFlex}
          label="E-mail"
          withAsterisk
          required
          placeholder="E-mail"
          icon={<IconAt size="0.8rem" />}
        />
      </Box>
      <Box className={classes.contentFlex}>
        <TextInput
          {...register("phone")}
          className={classes.inputFlex}
          placeholder="Celular"
          label="Celular"
          maw={400}
        />
        <InputDate
          name="birth"
          register={register}
          className={classes.inputFlex}
        />
      </Box>
      <Box className={classes.contentFlex}>
        <TextInput
          {...register("street")}
          className={classes.inputFlex}
          placeholder="Rua"
          label="Rua"
          maw={400}
        />
        <TextInput
          {...register("number_home")}
          className={classes.inputFlex}
          placeholder="Número"
          label="Número"
        />
        <TextInput
          {...register("complement")}
          className={classes.inputFlex}
          placeholder="Complemento"
          label="Complemento"
        />
      </Box>
      <Box className={classes.contentFlex}>
        <TextInput
          {...register("city")}
          className={classes.inputFlex}
          placeholder="Cidade"
          label="Cidade"
        />
        <TextInput
          {...register("state")}
          className={classes.inputFlex}
          placeholder="Estado"
          label="Estado"
        />
      </Box>
      <Box className={classes.contentFlex}>
        <Checkbox
          {...register("student", {
            onChange(event) {
              if (event.target.checked) {
                setValue("teacher", false);
              }
            },
          })}
          label="Aluno"
        />
        <Checkbox
          {...register("teacher", {
            onChange(event) {
              if (event.target.checked) {
                setValue("student", false);
              }
            },
          })}
          label="Professor"
        />
      </Box>
      <Box className={classes.contentFlex}>
        <InputPassword
          register={register}
          className={classes.inputFlex}
          isConfirmation={false}
        />
        <InputPassword
          register={register}
          className={classes.inputFlex}
          isConfirmation
        />
      </Box>
      <Box className={classes.contentFlex}>
        <Button loading={isLoading} onClick={handleSubmit(handleCreateUser)}>
          Salvar
        </Button>
      </Box>
    </Container>
  );
};
