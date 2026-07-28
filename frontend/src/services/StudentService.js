import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// GET all students
export const getStudents = () => {
  return axios.get(`${API_URL}/students`);
};

// ADD student
export const addStudent = (student) => {
  return axios.post(`${API_URL}/students`, student);
};

// DELETE student
export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/students/${id}`);
};
