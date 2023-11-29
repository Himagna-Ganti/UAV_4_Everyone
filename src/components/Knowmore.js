import React from "react";
import Navbar from "./Navbar";
import Multiplelinebreaks from "./Mulitplelinebreaks";
import './Knowmore.css'

function Knowmore() {
  // Function to navigate to a new page with SAM Model text
  const navigateToSAMText = () => {
    // You can replace the '/' with the actual route where you want to display the SAM Model text
    window.location.href = '/Samdescription';
  };
  const Yolov8Text = () => {
    // You can replace the '/' with the actual route where you want to display the SAM Model text
    window.location.href = '/Yolov8descriptions';
  };
  

  return (
    <div>
      <Navbar />
      <Multiplelinebreaks count={4} />
      <div className="knowmore-card">
        <h1 className="big-bold-text">Know More</h1>
        <p>
          If you want to know more about this project, you are at the right place.
          Here we are going to talk about how we utilized each model, their advantages, and drawbacks.
        </p>
      </div>
      <div className="Model-yolov8" onClick={Yolov8Text}>
        <div className="text-container-knowmore">
          <div className="Yolov8-text">Yolo V8 Detection</div>
          <div className="Yolov8-description">Know more about Yolo V8</div>
        </div>
      </div>
      <Multiplelinebreaks count={1} />
      {/* Clickable SAM Model component */}
      <div className="Model-SAM" onClick={navigateToSAMText}>
        <div className="text-container-knowmore">
          <div className="Yolov8-text">SAM Model</div>
          <div className="Yolov8-description">Know more about SAM</div>
        </div>
      </div>
      <Multiplelinebreaks count={4} />
    </div>
  );
}

export default Knowmore;
