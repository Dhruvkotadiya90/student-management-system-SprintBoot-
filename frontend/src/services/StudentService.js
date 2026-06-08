import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; 

console.log("API URL:", import.meta.env.VITE_API_URL);

// ✅ GET all students
export const getStudents = () => {
  return axios.get(API_URL, { withCredentials: true });
};

// ✅ ADD student
export const addStudent = (student) => {
  return axios.post(API_URL, student, { withCredentials: true });
};

// ✅ DELETE student
export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`, { withCredentials: true });
};