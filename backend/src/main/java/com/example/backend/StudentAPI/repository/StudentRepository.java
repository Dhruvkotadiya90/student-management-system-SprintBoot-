package com.example.backend.StudentAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.StudentAPI.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
    
}
