import Slider from "react-slick"
import FeedbackCard from "./FeedbackCard"
import StudentData from "./StudentData"

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="w-full bg-white py-32">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold">
            Students <span className="text-[#20B486]">Feedback</span>
          </h1>
        </div>

        <Slider {...settings}>
          {StudentData.map((feedback, index) => (
            <FeedbackCard key={index} feedback={feedback} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Feedback
