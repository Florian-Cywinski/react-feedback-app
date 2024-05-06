import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'  // {} because it's not a default export

function App() {

    return (
      <FeedbackProvider>
        <Router>    {/* This is used to be able to bring in both <Header /> and <div> */}
          {/* <Header text='Hello World' />  To bring in the imported component - text='Hello World' is a prop (property) which can be past in to a component (see Header.jsx -> here the prop is catched) */}
          {/* <Header bgColor='red' textColor='blue' /> */}
          <Header />
          <div className='container'>
            <Routes>
              {/* To show the homepage - without exact it would have a conflict with /about */}
              <Route exact path='/' element={    
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }>
              </Route>

              <Route path='/about' element={<AboutPage/>} />
            </Routes>
            {/* <AboutIconLink /> */}
          </div>
        </Router>
      </FeedbackProvider>
    )
  }
  
  export default App