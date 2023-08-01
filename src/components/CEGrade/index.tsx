import { Box, Container, Select } from "@mantine/core";

import { useStylesCEGrade } from "./styles";

export const CEGrade = () => {
  const { classes } = useStylesCEGrade();
  
  return (
    <Container className={classes.container}>
      <Box>
        <Select
          label="Selecione a Matéria"
          placeholder="Selecione a Matéria"
          data={[
            { value: "1", label: "Sistematica" },
            { value: "2", label: "Cosmovisão" },
          ]}
        />

        <Select
          label="Selecione o Aluno"
          placeholder="Selecione o Aluno"
          data={[
            { value: "1", label: "Aluno 1" },
            { value: "2", label: "Aluno 2" },
          ]}
        />
      </Box>

      <Box className={classes.contentFlex}>
        <Select
          className={classes.inputFlex}
          label="Selecione o Professor"
          placeholder="Selecione o Professor"
          data={[
            { value: "1", label: "Roberto" },
            { value: "2", label: "Alves" },
          ]}
        />
        <Select
          className={classes.inputFlex}
          label="Selecione o dia da semana"
          placeholder="Selecione o dia da semana"
          data={[
            { value: "1", label: "Terça" },
            { value: "2", label: "Sábado" },
          ]}
        />
      </Box>
    </Container>
  );
};
