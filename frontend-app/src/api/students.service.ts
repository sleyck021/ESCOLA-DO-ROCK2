import { api } from "./httpClient";
import type { Student } from "../types/student";


export const getStudents = async (): Promise<Student[]> => {
  const { data } = await api.get("/students");
  return data;
};
