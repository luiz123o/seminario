import {
  DsBox,
  DsGroup,
  DsSpace,
  DsText,
  DsNavbarProps,
  DsNavbar,
  createStyles,
  DsButtonUnstyled,
  DsScrollArea,
} from "@raisesistemas/ds";
import { IconSelector } from "@tabler/icons-react";

import { useNavigate } from "react-router-dom";

import { DsNavLink } from "../NavLink";

import { MenuUser } from "../MenuUser/MenuUser";
import { useDrawer } from "../../hooks/useDrawer";
import { NotificationDrawer } from "../Notifications/NotificationDrawer";

import { FiLock } from "react-icons/fi";
import { Ibt } from "../../assets/Ibt";

const useStyles = createStyles((theme) => ({
  navbar: {
    zIndex: 400,
    paddingTop: 0,
    paddingLeft: 16,
    paddingRight: 0,
    top: 0,
    minHeight: "100vh",
    border: "none",
    padding: "1rem",
  },
  channelsHeader: {
    padding: `8px ${theme.spacing.xs}`,
    marginBottom: 5,
  },

  channelsHeaderTitle: {
    color:
      theme.colorScheme === "light"
        ? theme.colors.gray[7]
        : theme.colors.gray[1],
  },
  menuDropdown: {
    borderWidth: 0,
    zIndex: 401,
    background:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.white,
  },
  logoButton: {
    width: "100%",
    padding: "0.5rem",
    borderRadius: "0.25rem",

    "&:hover": {
      background: theme.fn.variant({
        variant: "default",
        color: theme.primaryColor,
      }).background,
    },
  },
  scroll: {
    flex: 1,
  },
}));

type NavProps = {
  onClose: () => void;
} & Omit<DsNavbarProps, "children">;

export const Nav = (props: NavProps) => {
  const { onClose: handleClose } = props;
  const { classes } = useStyles();
  const { user } = {
    user: {
      data: {
        name: "User",
        avatar: "https://avatars.githubusercontent.com/u/44036562?v=4",
        email: "",
      },
    },
  };

  const navitate = useNavigate();

  const { getDrawerProps } = useDrawer();

  const handleChangeActive = (title = "", emoji = "") => {
    console.log(title, emoji);
    return
  };

  const handleNavigateToPosts = () => {
    navitate("/channels/posts");
    handleClose();
  };

  const linksItems = [
    {
      id: "1",
      to: "/dashboard",
      data: {
        title: "Home",
        emoji: "🏠",
        locked: false,
      },
    },

    {
      id: "2",
      to: "/students",
      data: {
        title: "Alunos",
        emoji: "👩‍🎓",
        locked: false,
      },
    },
    {
      id: "3",
      to: "/subjects",
      data: {
        title: "Matérias",
        emoji: "📚",
        locked: false,
      },
    },
    {
      id: "4",
      to: "/class",
      data: {
        title: "Classes",
        emoji: "🏛️",
        locked: false,
      },
    },
    {
      id: "5",
      to: "/users",
      data: {
        title: "Usuários",
        emoji: "👷‍♂️",
        locked: false,
      },
    },
    {
      id: "6",
      to: "/grade",
      data: {
        title: "Grade",
        emoji: "📝",
        locked: false,
      },
    },
  ];

  const linkItems = linksItems.map((links) => {
    const { data } = links;
    const locked = data.locked;
    return (
      <DsNavLink
        key={links.id}
        to={links.to}
        title={links.data.title}
        icon={links.data.emoji}
        onClick={handleClose}
        rightSection={locked && <FiLock size={14} />}
        onActiveChange={handleChangeActive}
      />
    );
  });

  return (
    <>
      <DsNavbar
        width={{ sm: 350 }}
        
        className={classes.navbar}
        hiddenBreakpoint="sm"
        {...props}
      >
        <DsBox
          sx={() => ({
            "@media only screen and (max-width: 600px)": {
              marginTop: "64px",
            },
          })}
        >
          <DsButtonUnstyled
            onClick={handleNavigateToPosts}
            className={classes.logoButton}
          >
            <DsGroup position="center" >
              <Ibt size={"150"} />
            </DsGroup>
          </DsButtonUnstyled>
        </DsBox>
        <DsSpace height={8} />
        {/* TODO: Remover está condição quando a feature estiver pronta */}

        <DsBox sx={{ marginTop: "1rem" }}>
          <DsGroup className={classes.channelsHeader} position="apart">
            <DsText
              variant="body-1"
              weight="semi-bold"
              className={classes.channelsHeaderTitle}
            >
              {'Seminario'}
            </DsText>
          </DsGroup>
        </DsBox>
        <DsScrollArea className={classes.scroll}>
          <DsBox>
            
            {linkItems}
          </DsBox>
        </DsScrollArea>

        <DsSpace height={8} />

        <DsBox>
          <MenuUser
            image={user?.data.avatar || ""}
            name={user?.data.name || ""}
            email={user?.data.email || ""}
            icon={<IconSelector size={14} stroke={1.5} />}
            onClick={handleClose}
          />
        </DsBox>
      </DsNavbar>

      <NotificationDrawer {...getDrawerProps()} />
    </>
  );
};
