package com.example.backend.StudentAPI.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.StudentAPI.utils.JwtUtil;

import jakarta.annotation.PostConstruct;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "https://dhruvsm.netlify.app", allowCredentials = "true")
public class authController {

    @PostConstruct
    public void init(){
        
        System.out.println("ADMIN USER: [" + adminUsername + "]");
        System.out.println("ADMIN PASS: [" + adminPassword + "]");

    }

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

    System.out.println("Received body: " + body);
    System.out.println("Expected: " + adminUsername + " / " + adminPassword);

    String username = body.get("username") != null ? body.get("username").trim() : null;
    String password = body.get("password") != null ? body.get("password").trim() : null;

    System.out.println("Username from body: " + username);
    System.out.println("Password from body: " + password);

    // SAFE CHECK (prevents crash)
    if (username != null && password != null &&
        adminUsername.equalsIgnoreCase(username) &&
        adminPassword.equals(password)) {

        String token = jwtUtil.generateToken(username);

        return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "token", token
        ));
    }

    return ResponseEntity.status(401).body("Invalid credentials");
}
}
