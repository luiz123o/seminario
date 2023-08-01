import { Box, Button } from "@mantine/core";
import { PageLayout } from "../../layouts/PageLayout";
import { useState } from "react";
import { DsDrawer } from "@raisesistemas/ds";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../../components/Pagination";
import { CEClass } from "../../components/CEClass";
import { useClassQuery } from "../../hooks/useClassQuery";
import { ClassCard } from "../../components/ClassCard";

export const Class = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useClassQuery();
  console.log("class", data);
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
            <Button onClick={() => setOpen(true)}>Nova Classe</Button>
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
              <ClassCard {...item} key={index} />
            ))}
          </Box>
        }
        tittle={"Classes"}
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
        title={"Adicione nova classe"}
        opened={open}
        onClose={() => setOpen(false)}
      >
        <CEClass />
      </DsDrawer>
    </>
  );
};
