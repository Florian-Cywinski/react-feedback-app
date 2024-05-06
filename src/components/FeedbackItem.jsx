import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'      // to bring in prop types (checks whether it is the right type (string, number...) for the specific property)
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const {deleteFeedback} = useContext(FeedbackContext)  // To get the function deleteFeedback from the FeedbackContext

  return (
    // <Card reverse={true}>
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={() => deleteFeedback(item.id)}>
          <FaTimes color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem