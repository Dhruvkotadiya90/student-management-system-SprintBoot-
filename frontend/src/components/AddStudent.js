import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../services/StudentService";

export default function AddStudent({ editStudent, clearEdit }) {
  const [student, setStudent] = useState({
    id: null,
    name: "",
    email: ""
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (student.id) {
      updateStudent(student).then(() => {
        clearEdit();
      });
    } else {
      addStudent(student);
    }

    setStudent({ id: null, name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={student.name}
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        value={student.email}
        placeholder="Email"
        onChange={handleChange}
      />

      <button type="submit">
        {student.id ? "Update" : "Add"}
      </button>
    </form>
  );
}