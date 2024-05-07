import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from './shared/Spinner'

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext)  // To bring in all feedbacks and the boolean value of isLoading

  if (!isLoading && (!feedback || feedback.length === 0)) {   // if it's not loading anymore AND there is no feedback data OR if there are no feedbacks in the data
    return <p>No Feedback Yet</p>
  }

  return isLoading ? (<Spinner />) : (
    <div className='feedback-list'>
      <AnimatePresence  mode="popLayout">
        {feedback.map((item) => (
          <motion.div layout key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

}

export default FeedbackList
