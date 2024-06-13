const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = 5000
const users = [] // This will act as our database for this example

app.use(bodyParser.json())
app.use(cors())

// Register endpoint
app.post("/register", async (req, res) => {
  const { username, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)
  users.push({ username, password: hashedPassword })
  res.status(201).send("User registered")
})

// Login endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body
  const user = users.find(user => user.username === username)
  if (!user) return res.status(400).send("User not found")
  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) return res.status(400).send("Invalid password")
  const token = jwt.sign({ username: user.username }, "secret_key")
  res.json({ token })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
