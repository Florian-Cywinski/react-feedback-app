// import { useState, useContext } from "react"
// import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({ select, selected }) { // select is a prop which is a function (FeedbackForm.jsx)
  // const [selected, setSelected] = useState(10)  // see down below checked={selected === i + 1}
  // NOTE: We don't need local state here as it's a duplicate of parent state
  // also no real need for useEffect or context
  // useEffect(() => {
  //   select(feedbackEdit.item.rating)
  // }, [feedbackEdit])

  // const { feedbackEdit } = useContext(FeedbackContext)   // To bring in the addFeedback function from FeedbackContext

  const handleChange = (e) => {
    // setSelected(+e.currentTarget.value) // to set (1...10) 
    select(+e.currentTarget.value)  // to call the function select
  }

  // NOTE: simplified with iteration
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => ( // To have 10 (1 to 10) rating circle buttons (to chose one)
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange} // handleChange is an event handeler
            checked={selected === i + 1}  // if it matches it is set to true and therefor shown as the selected one
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
