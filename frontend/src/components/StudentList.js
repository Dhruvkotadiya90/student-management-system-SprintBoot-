import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/StudentService";

export default function StudentList({ onEdit }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    getStudents().then((res) => {
      setStudents(res.data);
    });
  };

  const handleDelete = (id) => {
    deleteStudent(id).then(() => {
      loadStudents(); // refresh list
    });
  };

  return (
    <div>
      <h2>Students</h2>

      {students.map((s) => (
        <div key={s.id}>
          {s.name} - {s.email}

          <button onClick={() => onEdit(s)}>Edit</button>

          <button onClick={() => handleDelete(s.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}