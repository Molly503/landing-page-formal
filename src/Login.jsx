// Login.jsx
import React, { useState } from "react"
import axios from "axios"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
      })
      localStorage.setItem("token", response.data.token)
      setMessage("Login successful")
    } catch (error) {
      setMessage("Login failed")
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  )
}

export default Login
