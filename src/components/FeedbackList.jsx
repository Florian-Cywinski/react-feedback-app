import PropTypes from 'prop-types'      // to bring in prop types (checks whether it is the right type (string, number...) for the specific property)
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} />
        ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbackList
