import PropTypes from "prop-types"
import quotationMark from "../assets/quotationMark.png"

const FeedbackCard = ({ feedback }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            src={feedback.photo}
            style={{ width: "100px", height: "100px" }}
            alt="Student"
          />
          <div>
            <h1>{feedback.name}</h1>
            <p>{feedback.job}</p>
          </div>
        </div>
        <img className="h-8" src={quotationMark} alt="Quotation Mark" />
      </div>

      <div className="py-8">
        <h3 className="text-lg">{feedback.text}</h3>
      </div>
    </div>
  )
}

FeedbackCard.propTypes = {
  feedback: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
}

export default FeedbackCard
