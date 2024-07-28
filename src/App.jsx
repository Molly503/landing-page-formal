import {
  Navbar,
  Hero,
  Companies,
  Courses,
  Categories,
  Feedback,
  Footer,
  SignIn,
  SignUp,
  AuthDetails,
  Cart,
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
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/AuthDetails" element={<AuthDetails />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>

      <Footer />

      {/* <AuthDetails /> */}
      {/* should be displayed in the upper right corner of the Navbar component. */}
      <br />
      <br />
      <br />
      <br />
      {/* remember to delete */}
    </div>
  )
}

export default App

// logo set home page link
