import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { memberQueries } from "./member/memberQueries";
import { studentsQueries } from "./students/studentsQueries";
import { subjectsQueries } from "./subjects/subjectsQueries";
import { teachersQueries } from "./teacher/teacherQueries";
import { classQueries } from "./class/classQueries";




export const queries = mergeQueryKeys(
  memberQueries,
  studentsQueries,
  subjectsQueries,
  teachersQueries,
  classQueries
)