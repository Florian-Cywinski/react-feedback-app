import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)  // To bring in all feedbacks

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
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
