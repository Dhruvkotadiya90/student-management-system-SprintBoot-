package com.example.backend.service;

import com.example.backend.model.Student;
import java.util.List;

public interface IStudentService {
    List<Student> getAllStudents();

    Student saveStudent(Student student);

    void deleteStudent(Long id);
}