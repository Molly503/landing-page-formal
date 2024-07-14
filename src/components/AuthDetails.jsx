import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase"

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null)
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

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out Successfully")
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="hidden md:flex">
      {authUser ? (
        <>
          <p className="flex justify-between items-center  bg-transparent  px-6 gap-2">{`Signed In as ${authUser.email}`}</p>
          <button
            onClick={userSignOut}
            className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold"
          >
            Sign Out
          </button>
        </>
      ) : (
        <p className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
          Signed Out
        </p>
      )}
    </div>
  )
}

export default AuthDetails
