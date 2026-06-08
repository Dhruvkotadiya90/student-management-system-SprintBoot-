package com.example.backend.StudentAPI.Filter;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class AuthFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        String path = req.getRequestURI();

        // ✅ Allow login API without restriction
        if (path.startsWith("/auth/login")) {
            chain.doFilter(request, response);
            return;
        }

        // ✅ Get session (do NOT create new one)
        HttpSession session = req.getSession(false);

        // ❌ Block if not logged in
        if (session == null || session.getAttribute("user") == null) {
            res.setStatus(401);
            res.getWriter().write("Unauthorized - Please login");
            return;
        }

        // ✅ Allow request if logged in
        chain.doFilter(request, response);
    }
}