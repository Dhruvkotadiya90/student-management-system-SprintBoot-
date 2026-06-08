package com.example.backend.StudentAPI.controller;



import java.util.Map;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.StudentAPI.utils.JwtUtil;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "https://dhruvsm.netlify.app", allowCredentials = "true")
public class authController {

    private final JwtUtil jwtUtil;

    @Value("${admin_username}")
    private String adminUsername;

    @Value("${admin_password}")
    private String adminPassword;

    public authController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/test")
    public String test() {
        return "Auth controller working";
    }

    @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody Map<String, String> body) {

    String username = body.get("username");
    String password = body.get("password");

    if (adminUsername.equals(username) && adminPassword.equals(password)) {

        String token = jwtUtil.generateToken(username);

        return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "token", token
        ));
    }

    return ResponseEntity.status(401).body("Invalid credentials");
}
}