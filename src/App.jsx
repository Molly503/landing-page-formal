import {
  Navbar,
  Hero,
  Companies,
  Courses,
  Categories,
  Feedback,
} from "./components"
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Categories />
      <Feedback />
    </div>
  )
}

export default App
