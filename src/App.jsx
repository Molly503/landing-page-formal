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

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Hero />
      break
    case "/Courses":
      component = <Courses />
      break
    case "/Footer":
      component = <Footer />
      break
  }
  return (
    <div>
      <Navbar />
      {component}
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
