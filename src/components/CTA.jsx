import { cta } from "../assets"

const CTA = () => {
  return (
    <div className="w-full bg-[#E9F8F3] py-20">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center">
        <img src={cta} className="w-[650px] mx-auto" />

        <div>
          <h1 className="py-2 md:text-3xl  font-semibold ">
            <span className="text-[#20B486] "> Join </span>
            Our learning platform today
          </h1>
          <p className="py-2 text-lg text-gray-600 p-4">
            Start learning by registering for free. You can also upgrade to a
            pro account to get more features.
          </p>

          <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
            Sign Up for Free
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA
