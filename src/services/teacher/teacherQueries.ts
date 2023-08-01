import { createQueryKeys } from "@lukemorales/query-key-factory";
import { teacherList } from "../../api/teachers/teachersList";


export const teachersQueries = createQueryKeys('teachers', {
  list: () => ({
    queryKey: ['teachers', 'list'],
    queryFn: teacherList
  })
})