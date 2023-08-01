import { Box, Button, Container, Select } from "@mantine/core";

import { useStylesCEClass } from "./styles";
import { InputDate } from "../InputDate";
import { useForm } from "react-hook-form";
import { useTeachersQuery } from "../../hooks/useTeachersQuery";

const defaultValues = {
  name: "",
  subject_id: "",
  start_date: new Date(),
  end_date: new Date(),
};
export const CEClass = () => {
  const { classes } = useStylesCEClass();
  const { register, handleSubmit } = useForm({ defaultValues });
  const { data: dataTeachers } = useTeachersQuery();


  const teachersFormattedData = dataTeachers?.map((teacher) => {
    return { value: teacher.id, label: teacher.name };
  });

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
      </Box>
      <Box className={classes.contentFlex}>
        <InputDate
          register={register}
          name="start_date"
          className={classes.inputFlex}
          label="Inicio"
          placeholder="Inicio"
        />
        <InputDate
          register={register}
          name="end_date"
          className={classes.inputFlex}
          label="Fim"
          placeholder="Fim"
        />
      </Box>
      <Box className={classes.contentFlex}>
        <Select
          className={classes.inputFlex}
          label="Selecione o Professor"
          placeholder="Selecione o Professor"
          data={teachersFormattedData}
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
      <Box className={classes.contentFlex}>
      <Button loading={false} onClick={() => handleSubmit(() => {
          console.log("teste")
        })}>
          Salvar
        </Button>
      </Box>
    </Container>
  );
};
