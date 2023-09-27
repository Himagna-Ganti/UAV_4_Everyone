import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component


function About() {
    return (
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <br />
        <br />
        <br />
        <br />
        <div className="about-container">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            sollicitudin ipsum in justo auctor, vel consequat ipsum varius. Nam
            vitae metus a nisi dignissim vulputate non in lorem. Phasellus efficitur
            enim nec justo fringilla, vel vestibulum libero blandit.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    );
  }
  
  export default About;
  