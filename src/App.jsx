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

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Categories />
      <Feedback />

      <Footer />
    </div>
  )
}

export default App
