import {
  Navbar,
  Hero,
  Companies,
  Courses,
  Categories,
  Feedback,
  Footer,
  Register,
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
      <main className="App">
        <Register />
      </main>
      {/* register 的位置是否需要调整 */}
      <Footer />
    </div>
  )
}

export default App
