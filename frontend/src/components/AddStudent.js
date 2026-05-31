import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../services/StudentService";

export default function AddStudent({ editStudent, clearEdit }) {
  const [student, setStudent] = useState({
    id: null,
    name: "",
    enroll:"",
    age:"",
    city:"",
    phone:"",
    email:""
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

    setStudent({ id: null, name: "", enroll:"", age:"" ,city:"", phone:"",email:"" });
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
        name="enroll"
        value={student.enroll}
        placeholder="Enrollment Number"
        onChange={handleChange}
      />

<input
        name="age"
        value={student.age}
        placeholder="Age"
        onChange={handleChange}
      />

<input
        name="city"
        value={student.city}
        placeholder="City"
        onChange={handleChange}
      />

<input
        name="phone"
        value={student.phone}
        placeholder="Phone"
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