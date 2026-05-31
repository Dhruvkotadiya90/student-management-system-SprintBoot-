package com.example.backend.Student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Student.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
    
}
