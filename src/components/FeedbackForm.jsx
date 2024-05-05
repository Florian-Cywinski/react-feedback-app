import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')  // To have a min. of 10 char in the input field filled in

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

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} /> {/* select is a prop which is a function (it gets the selected value (rating) (1...10) from RatingSelect.jsx (select) and save it into setRating) */}
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
