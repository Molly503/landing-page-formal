// Register.jsx
import { useState } from "react"
import axios from "axios"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async e => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
      })
      setMessage(response.data)
    } catch (error) {
      setMessage("Registration failed")
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>
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
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  )
}

export default Register
