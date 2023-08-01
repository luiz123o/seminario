import { Box, Button } from "@mantine/core";
import { PageLayout } from "../../layouts/PageLayout";
import { useState } from "react";
import { DsDrawer } from "@raisesistemas/ds";
import { CEUser } from "../../components/CEUser";
import { Pagination } from "../../components/Pagination";
import { usePagination } from "../../hooks/usePagination";
import { CEGrade } from "../../components/CEGrade";

export const Grade = () => {
  const [open, setOpen] = useState<boolean>(false);
  const data = [{}];
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
            <Button onClick={() => setOpen(true)}>Novo usuario</Button>
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
          ></Box>
        }
        tittle={"Grade"}
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
        <CEGrade />
      </DsDrawer>
    </>
  );
};
