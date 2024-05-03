import PropTypes from 'prop-types'      // to bring in prop types (checks whether it is the right type (string, number...) for the specific property)

{/* function Header(props) {     props is an object with one or more properties (see App.js) */}
{/* function Header({ text }) {         the sam as above just refactored the object */}
function Header({ text, bgColor, textColor }) {

  const headerStyles = { 
    // backgroundColor: 'blue', color: 'red' 
    backgroundColor: bgColor, color: textColor 
  }

  return (
    // <header style={{ backgroundColor: 'blue', color: 'red' }}>
    <header style={headerStyles}>
        <div className="cotainer">
            {/* <h2>{props.text}</h2> */}
            <h2>{text}</h2>
        </div>
    </header>
  )
}

 {/* For the case nothing was past in to the specific prop */}
Header.defaultProps = {        
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

{/* To be able to add propTypes */}
Header.propTypes = {
    text: PropTypes.string,     // To have type checking - Gives a warning in the console when it isn't a string
    // text: PropTypes.string.isRequired        // Gives a warning in the console when it isn't a string (fatal) 
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header