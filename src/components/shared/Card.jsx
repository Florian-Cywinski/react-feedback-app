import PropTypes from 'prop-types'      // to bring in prop types (checks whether it is the right type (string, number...) for the specific property)

function Card({ children, reverse = true }) {  // reverse is a boolean (FeedbackItem.jsx)
  return (
    // <div className="card">{children}</div>
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>  // A conditional class ('reverse')
    <div className={'card'} style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse ? '#fff' : '#000'}}>{children}</div>  // Conditional styles
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
