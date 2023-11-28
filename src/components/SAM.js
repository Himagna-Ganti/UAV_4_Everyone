// SAM.js
import React from "react";
import PropTypes from "prop-types";
import "./SAM.css"; // Import your SAM component styles
import meanloss from "./Images/meanloss.png"
import map50 from "./Images/map50.png";

const SAM = ({ title, content, images }) => {
  return (
    <div className="SAM-container">
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
        <h3 className="big-bold-text">F1 Score: 0.7565</h3>
        <h3 className="big-bold-text">MAP score: 0.6793</h3>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Parameters</th>
              <th>Value</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {/* Repeat this row 10 times for the 10 rows */}
            <tr>
              <td>Hidden_Size</td>
              <td>768</td>
            </tr>
            <tr>
              <td>Output_channel</td>
              <td>256</td>
            </tr>
            <tr>
              <td>Num_hidden_layers</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Num_attention_heads</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Hidden_activation</td>
              <td>"gelu"</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="bottom-images-container">
        {/* Add two more images here */}
        <div className="bottom-image-item-sam">
          <img src= {meanloss} alt="i 1" />
        </div>
        <div className="bottom-image-item-sam">
          <img src={map50} alt="I 2" />
        </div>
      </div>
    </div>
  );
};

SAM.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SAM;
