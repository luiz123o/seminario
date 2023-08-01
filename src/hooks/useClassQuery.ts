import { useQuery } from "@tanstack/react-query"
import { queries } from "../services/query-key-factory"


export const useClassQuery = () => {
  const { data, ...rest } = useQuery(queries.class.list())

  return {
    data: data || [],
    ...rest
  }
}