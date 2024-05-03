import Header from "./components/Header"

function App() {
    return (
      <>    {/* This is used to be able to bring in both <Header /> and <div> */}
<<<<<<< HEAD
        {/* <Header text='Hello World' />  To bring in the imported component - text='Hello World' is a prop (property) which can be past in to a component (see Header.jsx -> here the prop is catched) */}
        {/* <Header bgColor='red' textColor='blue' /> */}
        <Header />
=======
        <Header text='Hello World' />  {/* To bring in the imported component - text='Hello World' is a prop (property) which can be past in to a component (see Header.jsx -> here the prop is catched) */}
>>>>>>> 6e30c4e84af191e80bc3888dc304fe5c46f48588
        <div className='container'>
          <h1>My App</h1>
        </div>
      </>
    )
  }
  
  export default App