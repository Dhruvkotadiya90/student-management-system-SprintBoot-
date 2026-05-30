import axios from "axios";

const API_URL = "/api/students";

// ✅ GET all students
export const getStudents = () => {
  return axios.get(API_URL);
};

// ✅ ADD student
export const addStudent = (student) => {
  return axios.post(API_URL, student);
};

// ✅ DELETE student
export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};