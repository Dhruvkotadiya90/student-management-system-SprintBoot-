package com.example.backend.model;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Student{

    @Id
    @Getter
    @Setter
    private String name;
    private String city;
    private int age;
    private long enroll;
    private long phone;

}