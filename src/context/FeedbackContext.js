import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'   // To use this package just call uuidv4 as function to create unique ids

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 9
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 7
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]) // To setFeedback to an array of the newFeedback and all the already existing feedbacks (... is the spread operator)
  }

  // Delete feedback
  const deleteFeedback = (id) => {  // A function to delete one Feedback
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return <FeedbackContext.Provider value={{
    feedback,                   // feedback: feedback   state (data)
    deleteFeedback,             // deleteFeedback: deleteFeedback   function
    addFeedback,                // addFeedback: addFeedback         function
    editFeedback,               // editFeedback: editFeedback       function
    feedbackEdit                // ...   state (data)
  }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext
