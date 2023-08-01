import { DsButtonUser, DsMenu } from "@raisesistemas/ds";
import {
  IconChevronRight,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { useNavigateTo } from "../../helpers/navigateTo";
import { signOut } from "../SignOut";

type MenuUserProps = {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export function MenuUser({ image, name, email, icon, onClick }: MenuUserProps) {
  const navigateTo = useNavigateTo();

  return (
    <>
      <DsMenu
        target={
          <DsButtonUser
            image={image}
            name={name}
            email={email}
            icon={icon || <IconChevronRight size={14} stroke={1.5} />}
          />
        }
        dropdownItens={[
          {
            name: "Configurações",
            icon: <IconSettings size={14} />,
            label: "Configurações",
            withDivider: true,
            onClick: () => {
              navigateTo("/settings");
              onClick && onClick();
            },
          },
          {
            name: "Sair",
            icon: <IconLogout size={14} />,
            withDivider: false,
            color: "red",
            onClick: signOut,
          },
        ]}
      />
    </>
  );
}
