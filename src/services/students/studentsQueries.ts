import { createQueryKeys } from "@lukemorales/query-key-factory";
import { studentList } from "../../api/students/studentsList";


export const studentsQueries = createQueryKeys('students', {
  list: () => ({
    queryKey: ['students', 'list'],
    queryFn: studentList
  })
})