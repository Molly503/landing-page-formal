import { feedbackpho2, quotationMark } from "../assets"

const FeedbackCard = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img src={feedbackpho2} style={{ width: "100px", height: "100px" }} />
          <div>
            <h1>Simone Grove</h1>
            <p>Data Engineer</p>
          </div>
        </div>
        <img className="h-8" src={quotationMark} />
      </div>

      <div className="py-8">
        <h3 className="text-lg">
          The Data Engineering Professional Certificate opened my eyes to the
          wonderful world of data. It gave me the basics to start doing some
          data projects on my own in order to remain competitive.
        </h3>
      </div>
    </div>
  )
}

export default FeedbackCard
