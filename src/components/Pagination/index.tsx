import React from "react";
import { Pagination as MantinePagination } from "@mantine/core";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  return (
    <MantinePagination
      value={currentPage}
      align="flex-end"
      defaultValue={1}
      onChange={handlePageChange}
      total={totalPages - 1}
    />
  );
};
