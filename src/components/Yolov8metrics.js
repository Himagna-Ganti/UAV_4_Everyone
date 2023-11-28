// Yolov8metrics.js
import React from "react";
import PropTypes from "prop-types";
import "./Yolov8metrics.css"; // Import your Yolov8metrics component styles
import sss1 from "./Images/Screenshot 2023-11-20 at 8.37.16 p.m..png"
import sss2 from "./Images/Screenshot 2023-11-20 at 8.37.16 p.m..png";

const Yolov8metrics = ({ title, content, images }) => {
  return (
    <div className="yolov8metrics-container">
      <h2 className="big-bold-text" >{title}</h2>
      <p>{content}</p>
      <div className="image-container">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={` ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="text-container">
        <h3 className="big-bold-text">F1 Score: 0.9863</h3>
        <h3 className="big-bold-text">MAP score: 98.97</h3>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {/* Repeat this row 10 times for the 10 rows */}
            <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
              {/* Add more cells as needed */}
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="bottom-images-container">
        {/* Add two more images here */}
        <div className="bottom-image-item">
          <img src= {sss1} alt="i 1" />
        </div>
        <div className="bottom-image-item">
          <img src={sss2} alt="I 2" />
        </div>
      </div>
    </div>
  );
};

Yolov8metrics.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Yolov8metrics;
