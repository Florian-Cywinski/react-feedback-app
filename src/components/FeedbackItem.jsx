import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'      // to bring in prop types (checks whether it is the right type (string, number...) for the specific property)
import Card from "./shared/Card"

function FeedbackItem({ item, handleDelete }) {
  return (
    // <Card reverse={true}>
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className='close' onClick={() => handleDelete(item.id)}>
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