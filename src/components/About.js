import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Profile from "./Profile";
import fishy from "./Images/Screenshot 2023-11-20 at 8.37.02 p.m..png"
import Pmonster from "./Images/Screenshot 2023-11-20 at 8.37.16 p.m..png"
import Spacemonkey from "./Images/Screenshot 2023-11-20 at 11.58.39 p.m..png"

function About() {
    return (
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <Multiplelinebreaks count={4} />
        <div className="about-container">
          <h1 className="about-heading">About Us</h1>
          <p className="about-paragraph">This page is to show all the contributors of the project wanna join the list head to join us page 
          </p>
          {/* Add more content as needed */}
          <Multiplelinebreaks count={2} />
          <Profile
          imageSrc={fishy}
          name="Fishy fish"
          role="Developer"
          />
          <Profile
          imageSrc={Pmonster}
          name="Purple monster"
          role="Designer"
          />
          <Profile
          imageSrc={Spacemonkey}
          name="Space Monkey"
          role="Developer 2"
          />
        </div>
      </div>
    );
  }
  
  export default About;
  