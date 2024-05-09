import StarRating from "./StarRating"

import PropTypes from "prop-types"

const Card = ({ course }) => {
  return (
    <div className="z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2  my-4">
      <img src={course.linkImg} className="h-40 w-full object-cover" />
      <div className="p-5 border border-b">
        <h1 className="py-2 truncate">{course.title}</h1>
        <StarRating rating={course.rating} />
      </div>
      <h3 className="p-5 text-xl">{course.price}</h3>

      <div className="absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold">
        {course.category}
      </div>
    </div>
  )
}

Card.propTypes = {
  course: PropTypes.shape({
    linkImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card

//card.jsx, courses,js and course.jsx are the files that are being modified
//把图片链接都改成下载到本地
