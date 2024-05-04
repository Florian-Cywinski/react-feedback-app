import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
  // Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {return acc + cur.rating}, 0) / feedback.length
  // To have only one decimal place 
  average = average.toFixed(1).replace(/[.,]0$/, '')  // toFixed(1) to display only one decimal place - replace(/[.,]0$/, '') to display only 0 at 0

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4> {/* When there is no rating to display 0 istead of NaN */}
    </div>
  )
}

export default FeedbackStats
