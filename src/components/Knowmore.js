import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";

function Knowmore() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Multiplelinebreaks count={4} />
      <div className="knowmore-container">
        <h1>Know More</h1>
        <p>
          If you want to know more about this project you are at the right place
          {/* Add more content as needed */}
        </p>
      </div>
    </div>
  );
}

export default Knowmore;
