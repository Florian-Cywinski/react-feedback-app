import { v4 as uuidv4 } from 'uuid'   // To use this package just call uuidv4 as function to create unique ids
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackData from "./data/FeedbackData"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback]) // To setFeedback to an array of the newFeedback and all the already existing feedbacks (... is the spread operator)
    }

    const deleteFeedback = (id) => {  // A function to delete one Feedback
      if (window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    }

    return (
      <>    {/* This is used to be able to bring in both <Header /> and <div> */}
        {/* <Header text='Hello World' />  To bring in the imported component - text='Hello World' is a prop (property) which can be past in to a component (see Header.jsx -> here the prop is catched) */}
        {/* <Header bgColor='red' textColor='blue' /> */}
        <Header />
        <div className='container'>
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
      </>
    )
  }
  
  export default App