// About.js
import React from "react";
import Navbar from "./Navbar";
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Profile from "./Profile";
import fishy from "./Images/Screenshot 2023-11-20 at 8.37.02 p.m..png";
import Pmonster from "./Images/Screenshot 2023-11-20 at 8.37.16 p.m..png";
import Spacemonkey from "./Images/Screenshot 2023-11-20 at 11.58.39 p.m..png";
import fallguy from "./Images/fall guy.png"
import "./Profile.css"; // Import the Profile CSS

function About() {
  return (
    <div>
      <Navbar />
      <Multiplelinebreaks count={4} />
      <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <p className="about-paragraph">
          This page is to show all the contributors of the project wanna join
          the list head to join us page
        </p>
        <Multiplelinebreaks count={2} />
        <div className="profile-row">
          {/* Two profile cards in a row */}
          <Profile imageSrc={fishy} name="Fishy fish" role="Developer" />
          <Profile imageSrc={Pmonster} name="Purple monster" role="Designer" />
        </div>
        <div className="profile-row">
          {/* Two profile cards in a row */}
          <Profile
            imageSrc={Spacemonkey}
            name="Space Monkey"
            role="Developer 2"
          />
          <Profile
            imageSrc={fallguy}
            name="fall guy"
            role="AI engineer"
          />
          <Profile
            imageSrc={fallguy}
            name="fall guy"
            role="AI engineer"
          />
          <Profile
            imageSrc={fallguy}
            name="fall guy"
            role="AI engineer"
          />
          {/* Add more profile cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default About;
