package com.example.backend.StudentAPI.service;

import java.util.List;

import com.example.backend.StudentAPI.model.Student;

public interface IStudentService {
    List<Student> getAllStudents();

    Student saveStudent(Student student);

    void deleteStudent(Long id);
}