// Modelandmetrics.js
import React from "react";
import Navbar from "./Navbar";
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Yolov8metrics from "./Yolov8metrics";
import SAM from "./SAM";
// import "./Modelandmetrics.css"; // Import your Modelandmetrics component styles
// import t_04 from "./Images/t_0.4.png";
import image from "./Images/image.png";
import mask from "./Images/mask.png";
import pmap from  "./Images/pmap.png"


function Modelandmetrics() {
  // Example array of image URLs
  const images = [
    image,
    mask,
    pmap,
  ];

  return (
    <div>
      <Navbar />
      <Multiplelinebreaks count={4} />
      <div className="Modelandmetrics-container">
        <h1 className="big-bold-text">Metrics</h1>
        <p></p>
        {/* Include the Yolov8metrics component with the images prop */}
        <Yolov8metrics title="Metrics Title" content="Metrics Content goes here." images={images} />
        <SAM title="Metrics Title" content="Metrics Content goes here." images={images} />
        {/* Add more content as needed */}
      </div>
      <Multiplelinebreaks count={4} />
    </div>
  );
}

export default Modelandmetrics;
