// Inside your Rectangularcomponent.js
import React, { useState } from 'react';
// Import your images
import Abhi from "./Images/Abhi.png"
import Himagna from "./Images/Himagna.png";

function Rectangularcomponent() {
  const [showPictures, setShowPictures] = useState(false);

  const handleClick = () => {
    setShowPictures(!showPictures);
  };

  return (
    <div className="rectangular-component" onClick={handleClick}>
      <p>Sample images of abhinay and Himagna to see it is clickable</p>
      {showPictures && (
        <div>
          {/* Use the imported images */}
          <img src={Abhi} alt="Abhi" />
          <img src={Himagna} alt="Himagna" />
          {/* Add more pictures as needed */}
        </div>
      )}
    </div>
  );
}

export default Rectangularcomponent;
