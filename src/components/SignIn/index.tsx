import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signin } from "../../api/auth/signIn";
import { useNavigateTo } from "../../helpers/navigateTo";
import { Ibt } from "../../assets/Ibt";

export function SignIn() {
  const defaultValues = {
    email: "",
    password: "",
  };
  const { mutate } = useMutation(signin);
  const { register, handleSubmit } = useForm({ defaultValues });
  const navigateTo = useNavigateTo();
  const handleLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    mutate(
      { email, password },
      {
        onSuccess: () => {
          navigateTo("/dashboard");
        },
      }
    );
  };

  return (
    <Container  my={40}>
      <Box style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Ibt size="200"/>
      </Box>
      <Title
      size={"lg"}
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Entrar
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" w={"100%"}>
        <TextInput
          {...register("email")}
          label="Email"
          placeholder="you@mantine.dev"
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          {...register("password")}
          required
          mt="md"
        />
        <Group position="apart" mt="lg">
          <Anchor component="button" size="sm">
            Esqueceu sua Senha?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={handleSubmit(handleLogin)}>
          Entrar
        </Button>
      </Paper>
    </Container>
  );
}
