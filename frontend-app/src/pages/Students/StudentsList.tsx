import { useEffect, useState } from "react";
import { getStudents } from "../../api/students.service";
import type { Student } from "../../types/student";


export default function StudentsList() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    getStudents().then(setStudents);
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {students.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}
