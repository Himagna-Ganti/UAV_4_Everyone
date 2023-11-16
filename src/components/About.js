import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";


function About() {
    return (
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <Multiplelinebreaks count={4} />
        <div className="about-container">
          <h1>About Us</h1>
          <p>
            This page is dedicated to show the details of the project 
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    );
  }
  
  export default About;
  