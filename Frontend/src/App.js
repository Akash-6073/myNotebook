import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./Context/NoteState";
import Login from "./Components/Login";
import style from "./Style/style.css";
import utils from "./Style/utils.css";
import responsive from "./Style/responsive.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Interface from "./Components/Interface";
import Signup from "./Components/Signup";
import Pricing from "./Components/Pricing";
import Features from "./Components/Features";
import ScrollToTop from "./Components/ScrollToTop";
function App() {
  return (
    <>
    <NoteState>
        <Router>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Interface/>}  />
            <Route path="/home" element={<Home/>}  />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/pricing" element={<Pricing/>}/>
            <Route exact path="/features" element={<Features/>}/>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
          </Routes>
          </Router>
    </NoteState>
    </>
  );
}

export default App;
