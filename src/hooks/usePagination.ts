import { useState } from "react";

export interface PaginationConfig {
  itemsPerPage: number;
  initialPage?: number;
}

export interface PaginationResult<T> {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  currentData: T[];
}

export function usePagination<T>(
  data: T[],
  config: PaginationConfig
): PaginationResult<T> {
  const { itemsPerPage, initialPage = 0 } = config;
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return { currentPage, setCurrentPage, totalPages, currentData };
}
