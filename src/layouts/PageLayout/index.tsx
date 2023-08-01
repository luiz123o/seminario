import { Box, Container, Divider, Title } from "@mantine/core";

export type PageLayoutProps = {
  children: React.ReactNode;
  tittle: string;
  header: React.ReactNode;
  footer: React.ReactNode;
};

export const PageLayout = (props: PageLayoutProps) => {
  const { header, tittle, children, footer } = props;
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90vh",
        gap: "2rem",
        paddingTop: "5rem",
        maxWidth: "100%",
        width: "100%",
        marginLeft: "0rem",
      }}
    >
      <Box>
        <Title>{tittle}</Title>
        <Box>{header}</Box>
      </Box>
      <Divider />
      <Box
        style={{
          display: "flex",
          maxWidth: "100%",
          minHeight: "500px",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        {children}
      </Box>
      <Box
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        {footer}
      </Box>
    </Container>
  );
};
