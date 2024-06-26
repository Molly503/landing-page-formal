import {
  Navbar,
  Hero,
  Companies,
  Courses,
  Categories,
  Feedback,
  Footer,
} from "./components"
import "./App.css"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/Companies" element={<Companies />}></Route>
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/Categories" element={<Categories />}></Route>
        <Route path="/Feedback" element={<Feedback />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

// logo set home page link
