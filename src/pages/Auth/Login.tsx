import { SignIn } from "../../components/SignIn";
import { Box, Container } from "@mantine/core";

export const Login = () => {
  return (
    <Container style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
      margin: "0 auto"
    }}>
      
      <Box style={{
        width: "100%",
        maxWidth: "40rem"
      }}>
        <SignIn />
      </Box>
    </Container>
  );
};
