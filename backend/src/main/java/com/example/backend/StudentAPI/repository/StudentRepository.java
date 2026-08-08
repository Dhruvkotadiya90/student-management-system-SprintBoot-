package com.example.backend.StudentAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.StudentAPI.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{
    
}
