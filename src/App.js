// import "/App.css";
// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Switch } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
//   pass the URL as a prop to about and projects so they can make a call to our API
  const URL = "https://faiza--portfolio.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

// what do we need to keep track of on the client-side, dynamically combing components, clipLoader(isLoading, setIsLoading)= useState(true) : useState
// is it a vlue that would make sense to keep track of, and make it more readable and is it a value that I was to change
export default App;