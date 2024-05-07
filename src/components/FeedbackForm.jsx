import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')  // To have a min. of 10 char in the input field filled in

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)   // To bring in the addFeedback function from FeedbackContext

  // useEffect(() => {
  //   console.log('The component has loaded');
  // }, [])  // The second argument (an array of dependencies) - if there is something in the array and it changes the arrow function is gonna run - if it's empty it just runs when the component loads

  useEffect(() => {
    if (feedbackEdit.edit === true) {   // To check whether it's in edit mode
      setBtnDisabled(false)     // Enables the Send button
      setText(feedbackEdit.item.text)   // Shows the text in the input filed
      setRating(feedbackEdit.item.rating)   // To get the current rating of the selected item (feedback)
    }
  }, [feedbackEdit])  // The arrow function runs when the edit icon was clicked

  const handleTextChange = (e) => { 
    let inputValue = e.target.value
    setText(inputValue)

    // To enable / disable the button (min. 10 char (without whitespaces))
    if (inputValue === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (inputValue.trim().length < 10) { // 👈 check for less than 10 - trim() to get rid of all whitespaces
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false) // To have the btn enabled
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,       // text: text
        rating      // rating: rating
      }

    if (feedbackEdit.edit === true) { // If a feedback item is in edit mode
      updateFeedback(feedbackEdit.item.id, newFeedback)
    } else {
      addFeedback(newFeedback)  // To output the new feedback to App.js
    }

    setText('')   // To clear the input field after submit
    }
  }

  // NOTE: pass selected to RatingSelect so we don't need local duplicate state
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        {/* <RatingSelect select={(rating) => setRating(rating)} /> select is a prop which is a function (it gets the selected value (rating) (1...10) from RatingSelect.jsx (select) and save it into setRating) */}
        <div className='input-group'>
          <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}/>
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
