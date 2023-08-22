import { RouterProvider } from "react-router";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { Fallback } from "../pages/Fallback";
import { router } from "../router";
import { AuthProvider } from "./AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../config/react-query";
import { DsProvider } from "@raisesistemas/ds";

export const GlobalProviders = ({ children }: React.PropsWithChildren) => {
  return (
    <DsProvider
      theme={{
        colors: {
          red: [
            "#FFE0D6",
            "#FFBAAE",
            "#FF8D85",
            "#FF676B",
            "#FF354D",
            "#DB264C",
            "#B71A4A",
            "#931044",
            "#7A0A40",
          ],
          green: [
            "#7ec2a9",
            "#69b89b",
            "#53ad8d",
            "#3ea37e",
            "#289970",
            "#248a65",
            "#207a5a",
            "#1c6b4e",
            "#185c43",
          ],
          brand: [
            "#EDD9FD",
            "#D9B4FC",
            "#C08DF8",
            "#C08DF8",
            "#A86FF1",
            "#8442E9",
            "#6630C8",
            "#4B21A7",
            "#341587",
            "#230C6F",
          ],
        },
        primaryColor: "green",
        globalStyles: () => ({
          body: {
            height: "100vh",
          },
          "#root": {
            height: "100vh",
          },
        }),
      }}
    >
      <ModalsProvider modalProps={{ zIndex: 10000 }}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} fallbackElement={<Fallback />} />
            {children}
          </AuthProvider>
        </QueryClientProvider>
        <Notifications position="top-right" zIndex={10001} />
      </ModalsProvider>
    </DsProvider>
  );
};
