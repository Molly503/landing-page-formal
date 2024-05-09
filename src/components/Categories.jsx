import CategoryCard from "./CategoryCard"

import { TiHtml5 } from "react-icons/ti"

import { HiOutlineBriefcase } from "react-icons/hi"

import { BiData } from "react-icons/bi"

import { FaAws } from "react-icons/fa6"
import { CiLock } from "react-icons/ci"

import { PiFinnTheHumanFill } from "react-icons/pi"
import IconAi from "../assets/icon-ai4.png"
import IconGpt from "../assets/icon-gpt2.png"

const Categories = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
        <h1 className="md:leading-[72px] text-3xl font-bold break-words">
          Popular <span className="text-[#20B486]"> Categories</span>
        </h1>
        <p className="text-xl text-gray-600">
          {/* Various versions have evolved over the years, sometimes by accident. */}
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-2">
          <CategoryCard
            icons={<PiFinnTheHumanFill size={30} />}
            title={"Artificial Intelligence"}
          />
          <CategoryCard
            icons={<TiHtml5 size={30} />}
            title={"Web Development"}
          />
          <CategoryCard
            icons={<FaAws size={30} />}
            title={"Amazon Web Services"}
          />
          <CategoryCard
            icons={<HiOutlineBriefcase size={30} />}
            title={"Data Analysis"}
          />

          <CategoryCard
            icons={<BiData size={30} />}
            title={"Data Engineering"}
          />

          <CategoryCard icons={<CiLock size={30} />} title={"Cyber Security"} />
          <CategoryCard
            icons={<img src={IconGpt} size={30} />}
            title={"Generative AI"}
          />
          <CategoryCard
            icons={<img src={IconAi} size={30} />}
            title={"Machine Learning"}
          />
        </div>
      </div>
    </div>
  )
}

export default Categories

// import CategoryCard from "./CategoryCard"

// const Categories = () => {
//   return (
//     <div className="w-full bg-white py-24">
//       <div className="md:max-w-[1480px] m-auto  grid md:grid-cols-2 max-w-[600px] ">
//         <h1 className="md:leading-[72px] text-3xl font-bold">
//           Popular <span className="text-[#20B486]"> Categories</span>
//         </h1>
//         <div className="grid md:grid-cols-4 py-12 gap-4">
//           <CategoryCard />
//           <CategoryCard />
//           <CategoryCard />
//           <CategoryCard />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Categories
