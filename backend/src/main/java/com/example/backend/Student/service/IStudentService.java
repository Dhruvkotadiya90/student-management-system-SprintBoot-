package com.example.backend.Student.service;

import com.example.backend.Student.model.Student;
import java.util.List;

public interface IStudentService {
    List<Student> getAllStudents();

    Student saveStudent(Student student);

    void deleteStudent(Long id);
}