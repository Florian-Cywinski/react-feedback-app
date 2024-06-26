import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'   // To use this package just call uuidv4 as function to create unique ids

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  const [isLoading, setIsLoading] = useState(true)    // To be able to show a spinner when it's loading

  useEffect(() => {
    fetchFeedback()
  }, [])  // Since the argument array is empty it runs the effect just on pageload

  // Fetch feedback
  const fetchFeedback = async () => {
    // const response = await fetch(`http://localhost:5000/feedback?_sort=-id`)    // - is to reverse the order
    const response = await fetch(`/feedback?_sort=-id`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)   // To reset the state after loading
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])  // To set the new data with all already existing feedbacks in one array (... is the spread operator)
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

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

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    // NOTE: no need to spread data and item
    setFeedback(feedback.map((item) => (item.id === id ? data : item)))

    // FIX: this fixes being able to add a feedback after editing
    // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  return <FeedbackContext.Provider value={{
    feedback,                   // feedback: feedback   state (data)
    deleteFeedback,             // deleteFeedback: deleteFeedback   function
    addFeedback,                // addFeedback: addFeedback         function
    editFeedback,               // editFeedback: editFeedback       function
    feedbackEdit,               // ...   state (data)
    updateFeedback,             // ...   function
    isLoading                   // ...   state (data)
  }}>{children}</FeedbackContext.Provider>
}

export default FeedbackContext
