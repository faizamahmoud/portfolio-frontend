
import "./App.css";
import Footer from "../src/components/Footer";
import Main from "../src/components/Main";
import Header from "../src/components/Header"

function App() {
  
  const URL = "https://faiza--portfolio.herokuapp.com/";


  return (
    <div className="App">
      <Main url={URL}/>
      <Footer />
      <Header />
    </div>
  )
}

// what do we need to keep track of on the client-side, dynamically combing components, clipLoader(isLoading, setIsLoading)= useState(true) : useState
// is it a vlue that would make sense to keep track of, and make it more readable and is it a value that I was to change
export default App;