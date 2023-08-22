import {
  createStyles,
  Avatar,
  Text,
  Group,
  UnstyledButton,
} from "@mantine/core";
import {
  IconPhoneCall,
  IconAt,
  IconEdit,
  IconTrash,
} from "@tabler/icons-react";
import { UpdateUser } from "../UpdateUser";
import { DsDrawer } from "@raisesistemas/ds";
import { useState } from "react";

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
type PayloadReq = {
  id: number;
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

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  data: PayloadReq;
}

export function UserInfoIcons({
  avatar,
  name,
  title,
  phone,
  email,
  data,
}: UserInfoIconsProps) {
  const { classes } = useStyles();
  const [open, setOpen] = useState<boolean>(false);
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
        maxHeight: "7rem",
      }}
    >
      <Group
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Group noWrap>
          <Avatar src={avatar} size={80} radius="md" />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              {title}
            </Text>

            <Text fz="lg" fw={500} className={classes.name}>
              {name}
            </Text>

            <Group noWrap spacing={10} mt={3}>
              <IconAt stroke={1.5} size="1rem" className={classes.icon} />
              <Text fz="xs" c="dimmed">
                {email}
              </Text>
            </Group>

            <Group noWrap spacing={10} mt={5}>
              <IconPhoneCall
                stroke={1.5}
                size="1rem"
                className={classes.icon}
              />
              <Text fz="xs" c="dimmed">
                {phone}
              </Text>
            </Group>
          </div>
        </Group>
        <Group>
          <UnstyledButton onClick={() => setOpen(true)}>
            <IconEdit stroke={2} size="1rem" />
          </UnstyledButton>
          <UnstyledButton
            onClick={() => {
              console.log("oi");
            }}
          >
            <IconTrash stroke={2} size="1rem" />
          </UnstyledButton>
        </Group>
      </Group>
      <DsDrawer
        size="xl"
        title={"Atualize o usuário"}
        opened={open}
        onClose={() => setOpen(false)}
      >
        <UpdateUser data={data} />
      </DsDrawer>
    </Group>
  );
}
