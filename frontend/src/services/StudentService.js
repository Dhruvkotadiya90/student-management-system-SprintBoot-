import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// helper to get token
const getAuthHeader = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// GET all students
export const getStudents = () => {
  return axios.get(`${API_URL}/students`, getAuthHeader());
};

// ADD student
export const addStudent = (student) => {
  return axios.post(`${API_URL}/students`, student, getAuthHeader());
};

// DELETE student
export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/students/${id}`, getAuthHeader());
};
