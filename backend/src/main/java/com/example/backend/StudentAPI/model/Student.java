package com.example.backend.StudentAPI.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table()
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "Name", nullable = false)
    private String name;
    @Column(name = "City", nullable = false)
    private String city;
    @Column(name = "Age", nullable = false)
    private int age;
    @Column(name = "Enrollment_Number", nullable = false)
    private long enroll;
    @Column(name = "Phone", nullable = false)
    private long phone;
    @Column(name = "Email", nullable = false)
    private String email;

}