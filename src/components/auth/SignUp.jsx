// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { useState } from "react"
// import { auth } from "../../firebase"

// const SignUp = () => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const signUp = e => {
//     e.preventDefault()
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(userCredential => {
//         console.log(userCredential)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   return (
//     <div className="w-full  bg-white py-24">
//       <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
//         <div className="sign-in-container">
//           <form onSubmit={signUp}>
//             <h1 className="text-2xl font-bold">Create Account</h1>
//             <br />
//             <br />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="bg-[#F2F3F4] p-4 w-full rounded"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             ></input>
//             <br />
//             <br />
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="bg-[#F2F3F4] p-4 w-full rounded"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//             ></input>
//             <br />
//             <br />
//             <button
//               type="submit"
//               className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium"
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp

import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signupSuccess, setSignupSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const signUp = e => {
    e.preventDefault()
    setSignupSuccess(false)
    setErrorMessage("")

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Log the user credential for debugging
        console.log(userCredential)
        setSignupSuccess(true)
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(error.message)
      })
  }

  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-8 max-w-[600px] px-4 md:px-0">
        <div className="sign-in-container">
          <form onSubmit={signUp}>
            <h1 className="text-2xl font-bold">Create Account</h1>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#F2F3F4] p-4 w-full rounded mt-4"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-[#F2F3F4] p-4 w-full rounded mt-4"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium"
            >
              Sign Up
            </button>
            {signupSuccess && (
              <p className="text-green-500">
                An account has been created and you are signed in.
              </p>
            )}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
