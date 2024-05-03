import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App() {
    return (
      <>    {/* This is used to be able to bring in both <Header /> and <div> */}
        {/* <Header text='Hello World' />  To bring in the imported component - text='Hello World' is a prop (property) which can be past in to a component (see Header.jsx -> here the prop is catched) */}
        {/* <Header bgColor='red' textColor='blue' /> */}
        <Header />
        <div className='container'>
          <FeedbackItem />
        </div>
      </>
    )
  }
  
  export default App