// import { useState, useEffect } from "react"
// import { lock, hamburgerMenu, close } from "../assets"
// import logo from "../assets/newLogo.png"
// import { Link } from "react-router-dom"
// import { onAuthStateChanged } from "firebase/auth"
// import { auth } from "../firebase"
// import AuthDetails from "./AuthDetails"

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false)
//   const [authUser, setAuthUser] = useState(null)

//   const handleClick = () => setToggle(!toggle)

//   useEffect(() => {
//     const listen = onAuthStateChanged(auth, user => {
//       if (user) {
//         setAuthUser(user)
//       } else {
//         setAuthUser(null)
//       }
//     })
//     return () => {
//       listen()
//     }
//   }, [])

//   return (
//     <div className="w-full h-[80px] bg-white border-b">
//       <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
//         <img src={logo} className="h-[35px]" />

//         <div className="hidden md:flex items-center ">
//           <ul className="flex gap-4">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/Companies">Clients</Link>
//             </li>

//             <li>
//               <Link to="/Courses">Courses</Link>
//             </li>
//             <li>
//               <Link to="/Categories">Categories</Link>
//             </li>
//             <li>Pro</li>
//             {/* set payment for Pro */}
//             <li>
//               <Link to="/Feedback">Feedback</Link>
//             </li>
//           </ul>
//         </div>

//         <div className="hidden md:flex items-center gap-4">
//           <AuthDetails />
//           {!authUser && (
//             <>
//               <button className="flex justify-between items-center bg-transparent px-6 gap-2">
//                 <img src={lock} />
//                 <Link to="/SignIn"> Login </Link>
//               </button>
//               <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
//                 <Link to="/SignUp"> Sign Up </Link>
//               </button>
//             </>
//           )}
//         </div>

//         <div className="md:hidden" onClick={handleClick}>
//           <img src={toggle ? close : hamburgerMenu} />
//         </div>
//       </div>

//       <div
//         className={
//           toggle
//             ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
//             : "hidden"
//         }
//       >
//         <ul>
//           <li className="p-4 hover:bg-gray-100">
//             {" "}
//             <Link to="/">Home</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-100">
//             {" "}
//             <Link to="/Companies">Clients</Link>
//           </li>

//           <li className="p-4 hover:bg-gray-100">
//             {" "}
//             <Link to="/Courses">Courses</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-100">
//             {" "}
//             <Link to="/Categories">Categories</Link>
//           </li>
//           <li className="p-4 hover:bg-gray-100">Pro</li>
//           <li className="p-4 hover:bg-gray-100">
//             <Link to="/Feedback">Feedback</Link>
//           </li>
//           <div className="flex flex-col my-4 gap-4">
//             <AuthDetails />
//             {!authUser && (
//               <>
//                 <div className="flex flex-col my-4 gap-4">
//                   <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
//                     <img src={lock} />
//                     <Link to="/SignIn"> Login </Link>
//                   </button>

//                   <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
//                     <Link to="/SignUp"> Sign Up </Link>
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </ul>
//       </div>
//     </div>
//   )
// }
// export default Navbar

import { useState, useEffect } from "react"
import { lock, hamburgerMenu, close } from "../assets"
import logo from "../assets/newLogo.png"
import { Link } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"
import AuthDetails from "./AuthDetails"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [authUser, setAuthUser] = useState(null)

  const handleClick = () => setToggle(!toggle)

  const closeMenu = () => setToggle(false)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logo} className="h-[35px]" />

        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Companies">Clients</Link>
            </li>

            <li>
              <Link to="/Courses">Courses</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
            <li>Pro</li>
            {/* set payment for Pro */}
            <li>
              <Link to="/Feedback">Feedback</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <AuthDetails />
          {!authUser && (
            <>
              <button className="flex justify-between items-center bg-transparent px-6 gap-2">
                <img src={lock} />
                <Link to="/SignIn"> Login </Link>
              </button>
              <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
                <Link to="/SignUp"> Sign Up </Link>
              </button>
            </>
          )}
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/Companies" onClick={closeMenu}>
              Clients
            </Link>
          </li>

          <li className="p-4 hover:bg-gray-100">
            <Link to="/Courses" onClick={closeMenu}>
              Courses
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/Categories" onClick={closeMenu}>
              Categories
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">Pro</li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/Feedback" onClick={closeMenu}>
              Feedback
            </Link>
          </li>
          <div className="flex flex-col my-4 gap-4">
            <AuthDetails />
            {!authUser && (
              <>
                <button
                  className="border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4"
                  onClick={closeMenu}
                >
                  <img src={lock} />
                  <Link to="/SignIn"> Login </Link>
                </button>

                <button
                  className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold"
                  onClick={closeMenu}
                >
                  <Link to="/SignUp"> Sign Up </Link>
                </button>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
