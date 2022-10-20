import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import About from "../pages/About";
import Projects from "../pages/Projects";



export default function Main (props) {
    return (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects url={props.url} />} />
            <Route path="/about" element={<About  />} />
          </Routes>
      );
}