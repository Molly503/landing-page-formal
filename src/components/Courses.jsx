// Remove the unused import statement for React
import Card from "./Card"

const Courses = () => {
  return (
    <div className="w-full bg-[#E9F8F3B2] py-20">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]">
        <Card />
      </div>
    </div>
  )
}

export default Courses
