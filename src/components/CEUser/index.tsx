import { Box, Button, Checkbox, Container, TextInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { InputDate } from "../InputDate";
import { InputPassword } from "../InputPassword";
import { InputPhone } from "../InputPhone";
import { useStylesCreateUser } from "./styles";
import { useForm } from "react-hook-form";
import { memberCreate } from "../../api/member/memberCreate";
import { supabase } from "../../config/supabaseClient";
import { hasUser } from "../../api/auth/hasUser";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
  const defaultValues = {
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
  const { register, handleSubmit } = useForm({ defaultValues });

 

  return (
    <Container className={classes.container}>
      <Box>
        <TextInput
          {...register("name")}
          placeholder="Name"
          label="Nome completo"
          withAsterisk
          required
        />
      </Box>

      <Box className={classes.contentFlex}>
        <TextInput
          {...register("document")}
          className={classes.inputFlex}
          placeholder="CPF"
          label="CPF"
          withAsterisk
          required
        />
        <TextInput
          {...register("email")}
          className={classes.inputFlex}
          label="E-mail"
          withAsterisk
          required
          placeholder="E-mail"
          icon={<IconAt size="0.8rem" />}
        />
      </Box>
      <Box className={classes.contentFlex}>
        <InputPhone register={register} className={classes.inputFlex} />
        <InputDate register={register} className={classes.inputFlex} />
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
        <Checkbox {...register("student")} label="Aluno" />
        <Checkbox {...register("teacher")} label="Professor" />
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
