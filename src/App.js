import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Education from "./Pages/Education";
import Events from "./Pages/Events";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/events" element={<Events/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/group-profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
