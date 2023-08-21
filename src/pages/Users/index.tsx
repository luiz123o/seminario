import { Box, Button } from "@mantine/core";
import { useMembersQuery } from "../../hooks/useMembersQuery";
import { PageLayout } from "../../layouts/PageLayout";
import { UserInfoIcons } from "../../components/UserCard";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";
import { DsDrawer } from "@raisesistemas/ds";
import { CEUser } from "../../components/CEUser";
import { usePagination } from "../../hooks/usePagination";

export const Users = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useMembersQuery();

  const { currentPage, setCurrentPage, totalPages, currentData } =
    usePagination(data, {
      itemsPerPage: 5,
    });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageLayout
        header={
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button type="button" onClick={() => setOpen(true)}>Novo usuario</Button>
          </Box>
        }
        children={
          <Box
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {currentData.map((item, index) => (
              <UserInfoIcons
                key={`${item.name} + ${index}`}
                avatar={
                  "data:image/png;base64,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"
                }
                name={item.name}
                title={""}
                phone={item.phone}
                email={item.email}
              />
            ))}
          </Box>
        }
        tittle={"Usuários"}
        footer={
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        }
      />

      <DsDrawer
        size="xl"
        title={"Adicione novo usuário"}
        opened={open}
        onClose={() => setOpen(false)}
      >
        <CEUser  />
      </DsDrawer>
    </>
  );
};
