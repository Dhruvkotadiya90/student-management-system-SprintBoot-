package com.example.backend.StudentAPI.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Value;

@RestController
@RequestMapping("/auth/login")
@CrossOrigin(origins = "https://dhruvsm.netlify.app/", allowCredentials = "true")
public class authController {

    @Value("${admin_username}")
    private String adminUsername;

    @Value("${admin_password}")
    private String adminPassword;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body, HttpSession session) {

        String username = body.get("username");
        String password = body.get("password");

        if (adminUsername.equals(username) && adminPassword.equals(password)) {
            return ResponseEntity.ok("success");
        }

        session.setAttribute("user", "admin");

        return ResponseEntity.ok("Login successful");

        // return ResponseEntity.status(401).body("fail");
    }
}