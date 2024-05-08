import { cta } from "../assets"

const CTA = () => {
  return (
    <div className="w-full bg-[#E9F8F3] py-20">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px]">
        <img src={cta} className="w-[500px] mx-auto" />

        <div className="flex flex-col justify-start gap-4">
          <h1 className="py-2 md:text-5xl  font-semibold p-4">
            <span className="text-[#20B486] "> Join </span>
            Our learning platform today
          </h1>
          <p className="py-2 text-lg text-gray-600 p-4">
            Start learning by registering for free. You can also upgrade to a
            pro account to get more features.
          </p>
          <form className="bg-white max-w-[700px] p-4 input-bx-shadow shadow-lg rounded-md flex justify-between">
            <input
              className="bg-white "
              type="text"
              placeholder="What to learn?"
            />
            <button>Sign Up for Free</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CTA
