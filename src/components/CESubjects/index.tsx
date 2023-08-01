import { Box, Container, NumberInput, TextInput } from "@mantine/core";
import { useStylesCESubjects } from "./styles";

export const CESubjects = () => {
  const { classes } = useStylesCESubjects();
  return (
    <Container className={classes.container}>
      <Box className={classes.contentFlex}>
        <TextInput
          className={classes.inputFlex}
          placeholder="Nome da Matéria"
          label="Nome da Matéria"
          withAsterisk
          required
        />
        <NumberInput
          defaultValue={40}
          placeholder="Carga Horária"
          label="Carga Horária"
          withAsterisk
        />
      </Box>
    </Container>
  );
};
