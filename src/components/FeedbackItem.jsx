import PropTypes from 'prop-types'      // to bring in prop types (checks whether it is the right type (string, number...) for the specific property)
import Card from "./shared/Card"

function FeedbackItem({ item }) {
  return (
    // <Card reverse={true}>
    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem