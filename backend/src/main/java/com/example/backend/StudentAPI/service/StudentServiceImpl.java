package com.example.backend.StudentAPI.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.StudentAPI.model.Student;
import com.example.backend.StudentAPI.repository.StudentRepository;

@Service  // ✅ VERY IMPORTANT
public class StudentServiceImpl implements IStudentService {

    @Autowired
    private StudentRepository repository;

    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @Override
    public Student saveStudent(Student student) {
    return repository.save(student);
}

@Override
public void deleteStudent(Long id) {
   repository.deleteById(id);
}

}