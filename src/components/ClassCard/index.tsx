import { createStyles, Text, Group } from "@mantine/core";
import { useMemberByIdQuery } from "../../hooks/useMembersQuery";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface ClassCardProps {
  class_name: string;
  teacher_id: number;
  subject_id: number;
  start_date: Date;
  end_date: Date;
  members: {
    name: string;
  };
  subjects: {
    subject_name: string;
  };
}

export function ClassCard({
  class_name,
  subjects,
  start_date,
  end_date,
  members,
}: ClassCardProps) {
  const { classes } = useStyles();

  return (
    <Group
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#eaf5f1",
        marginLeft: "0rem",
        marginRight: "0rem",
      }}
    >
      <Group noWrap>
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Classe: {class_name}
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            {(subjects.subject_name).toLocaleUpperCase()}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <Text fz="xs" c="dimmed">
              {(members.name).toLocaleUpperCase()}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <Text fz="xs" c="dimmed">
              {`${new Date(start_date).toLocaleDateString("pt-BR")}`}
            </Text>
            <Text fz="xs" c="dimmed">
              {`${new Date(end_date).toLocaleDateString("pt-BR")}`}
            </Text>
          </Group>
        </div>
      </Group>
    </Group>
  );
}
