import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import './Knowmore.css'

function Knowmore() {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Multiplelinebreaks count={4} />
      <div className="knowmore-card">
        <h1>Know More</h1>
        <p>
          If you want to know more about this project you are at the right place
          here we are going to talk about how we utlized each model their advantages and drawbacks
          {/* Add more content as needed */}
        </p>
      </div>
      <div className="Model-yolov8">
        <div className="text-container">
          <div className="Yolov8-text">Yolo V8 Detection</div>
          <div className="Yolov8-description">this model was first desgned to detect object and other related tasks</div>
        </div>
      </div>
      <Multiplelinebreaks count={1} />
      <div className="Model-yolov8-seg">
        <div className="text-container">
          <div className="Yolov8-text">Yolo V8 Segmentation</div>
          <div className="Yolov8-description">this segmentation model is used to create bounding box</div>
        </div>
      </div>
      <Multiplelinebreaks count={1} />
      <div className="Model-SAM">
        <div className="text-container">
          <div className="Yolov8-text">SAM Model</div>
          <div className="Yolov8-description">Here we talk about the SAM model this is everyting to know about SAM</div>
        </div>
      </div>
      <Multiplelinebreaks count={4} />
    </div>
  );
}

export default Knowmore;
