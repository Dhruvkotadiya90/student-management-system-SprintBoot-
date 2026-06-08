import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("https://dhruvsm.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      const data = await res.json(); // 🔥 IMPORTANT
  
      if (res.ok) {
        // 🔐 STORE TOKEN (MOST IMPORTANT FIX)
        localStorage.setItem("token", data.token);
  
        setError("");
        onLogin();
      } else {
        setError(data || "Invalid username or password");
      }
  
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "100px auto" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Login</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}