import PropTypes from 'prop-types'      // to bring in prop types (checks whether it is the right type (string, number...) for the specific property)

function Header(props) {    {/* props is an object with one or more properties (see App.js) */}
{/* function Header({ text }) {         the sam as above just refactored the object */}
  return (
    <header>
        <div className="cotainer">
            <h2>{props.text}</h2>
            {/* <h2>{text}</h2> */}
        </div>
    </header>
  )
}

 {/* For the case nothing was past in to the specific prop */}
Header.defaultProps = {        
    text: 'Feedback UI',
}

{/* To be able to add propTypes */}
Header.propTypes = {
    text: PropTypes.string,     // To have type checking - Gives a warning in the console when it isn't a string
    // text: PropTypes.string.isRequired        // Gives a warning in the console when it isn't a string (fatal) 
}

export default Header