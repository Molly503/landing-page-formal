import newHeroImg from "../assets/newHeroImg.png"

import { AiOutlineSearch } from "react-icons/ai"

const Hero = () => {
  return (
    <div className="w-full bg-white py-20">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#20B486] font-medium p-4">
            START TO SUCCEED
          </p>
          <h1 className="md:leading-[72px] py-2 md:text-5xl text-3xl font-semibold p-4">
            Access to <span className="text-[#20B486] ">800+ </span>Courses from
            <span className="text-[#20B486] ">100</span> Instructors
          </h1>
          <p className="py-2 text-lg text-gray-600 p-4">
            Various versions have evolved over the years
            {/* can i say sth else */}
          </p>
          <form className="bg-white max-w-[700px] p-4 input-bx-shadow shadow-lg rounded-md flex justify-between">
            <input
              className="bg-white "
              type="text"
              placeholder="What to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>
        <img className="md:order-last p-5" src={newHeroImg} />
      </div>
    </div>
  )
}

export default Hero
