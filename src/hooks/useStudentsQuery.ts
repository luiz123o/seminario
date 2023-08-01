import { useQuery } from "@tanstack/react-query"
import { queries } from "../services/query-key-factory"


export const useStudentsQuery = () => {
  const { data, ...rest } = useQuery(queries.students.list())

  return {
    data: data || [],
    ...rest
  }
}