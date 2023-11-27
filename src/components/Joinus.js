import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";


function Joinus() {
    return (
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <Multiplelinebreaks count={4} />
        <div className="Joinus-container">
        <div className="knowmore-card">
        <h1>Interested in what we do ??</h1>
        <p>
        Do you find everyting you seen so far interesting!!!
            You can contribute to this work.
            if not contact professor Miodrag for more interesting projects.
            if you have any suggestions for the website you can contact our 
            web developers. Let's build and learn together!!!
        </p>
      </div>
          
          <p>
            
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    );
  }
  
  export default Joinus;