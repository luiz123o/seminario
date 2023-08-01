import { useQuery } from "@tanstack/react-query"
import { queries } from "../services/query-key-factory"


export const useSubjectsQuery = () => {
  const { data, ...rest } = useQuery(queries.subjects.list())

  return {
    data: data || [],
    ...rest
  }
}