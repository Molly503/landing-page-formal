import { blogImg1 } from "../assets"
import StarRating from "./StarRating"

const Card = () => {
  return (
    <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl">
      <img src={blogImg1} className="h-40 w-full object-cover" />
      <div className="p-5 border border-b">
        <h1>JavaScript Programming</h1>
        <StarRating rating={4} />
      </div>
      <h3 className="p-5">$50</h3>
    </div>
  )
}

export default Card
