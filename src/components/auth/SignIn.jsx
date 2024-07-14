import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import { useState, useEffect } from "react"
import { auth } from "../../firebase"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [authUser, setAuthUser] = useState(null)
  const [signOutStatus, setSignOutStatus] = useState(false)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user)
        setSignOutStatus(false) // Reset sign out status on sign in
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  const signIn = e => {
    e.preventDefault()
    setErrorMessage("") // Reset error message
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential)
      })
      .catch(error => {
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Wrong password. Please try again.")
        } else {
          setErrorMessage(error.message)
        }
      })
  }

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out Successfully")
        setSignOutStatus(true)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-8 max-w-[600px] px-4 md:px-0">
        <div className="sign-in-container ">
          <form onSubmit={signIn}>
            <h1 className="text-2xl font-bold">Log In to Your Account</h1>
            <br />
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#F2F3F4] p-4 w-full rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="bg-[#F2F3F4] p-4 w-full rounded"
            />
            <br />
            <br />
            <div className="flex gap-4 items-center">
              <button
                type="submit"
                className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium"
              >
                Log In
              </button>
              <button
                type="button"
                onClick={userSignOut}
                className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-gray-500 text-white font-medium"
                disabled={!authUser}
              >
                {signOutStatus ? "Signed Out" : "Sign Out"}
              </button>
            </div>
            {authUser && !signOutStatus && (
              <p className="text-green-500">Signed in Successfully</p>
            )}
            {!authUser && signOutStatus && (
              <p className="text-red-500">The user signed out</p>
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
