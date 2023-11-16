import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component
import About from "./components/About";
import Datasets from "./components/Datasets"; // Import the Datasets component
import Knowmore from "./components/Knowmore";
import Tableredner from "./components/Tablerender";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the Home component */}
        <Route path="/About" element={<About />} /> {/* Route for the About component */}
        <Route path="/Datasets" element={<Datasets />} /> {/* Route for the Datasets component */}
        <Route path= "/Knowmore" element={<Knowmore/>} /> {/* Route for the Know more component*/}
        <Route path="/Tablerender" element={<Tableredner/>} />
      </Routes>
    </Router>
  );
}

export default App;
