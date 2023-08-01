import { useQuery } from "@tanstack/react-query"
import { queries } from "../services/query-key-factory"


export const useTeachersQuery = () => {
  const { data, ...rest } = useQuery(queries.teachers.list())

  return {
    data: data || [],
    ...rest
  }
}