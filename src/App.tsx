import { AppShell, Box } from "@mantine/core";

import { Outlet } from "react-router";
import { Nav } from "./components/Nav";
import { useDisclosure } from "@mantine/hooks";

export default function App() {
  const [opened, { toggle, close }] = useDisclosure(false);
  console.log(opened, toggle)
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      navbar={<Nav onClose={close} />}
      header={<div>Header</div>}
      padding={0}
      
    >
      <Box>
        <Outlet />
      </Box>
    </AppShell>
  );
}
