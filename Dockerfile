# ---------- STEP 1: Build React Frontend ----------
    FROM node:22 AS frontend-build
    WORKDIR /app/frontend
    COPY frontend/ .
    RUN npm install && npm run build
    
    # ---------- STEP 2: Build Spring Boot Backend ----------
    FROM maven:3.9-eclipse-temurin-17 AS backend-build
    WORKDIR /app/backend
    COPY backend/ .
    RUN mvn clean package -DskipTests
    
    # ---------- STEP 3: Final Image ----------
    FROM eclipse-temurin:17-jdk
    WORKDIR /app
    
    # Copy backend JAR
    COPY --from=backend-build /app/backend/target/*.jar app.jar
    
    # Copy frontend build into static folder
    COPY --from=frontend-build /app/frontend/dist /app/static
    
    # Expose port
    EXPOSE 8081
    
    # Run app
    ENTRYPOINT ["java", "-jar", "app.jar"]