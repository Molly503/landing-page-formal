import {
  Navbar,
  Hero,
  Companies,
  Courses,
  Categories,
  Feedback,
  CTA,
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
      <CTA />
    </div>
  )
}

export default App
