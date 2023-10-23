import React, { useState } from "react";
import "./Modal.css"; // Import the CSS file for styling
import AbhiImage from "./Images/Abhi.png"; // Adjust the path as needed
import HimagnaImage from "./Images/Himagna.png"; // Adjust the path as needed

function Modal({ isOpen, data, onClose }) {
  const [showImages, setShowImages] = useState(false);

  // Reset the showImages state when the modal is closed
  const handleClose = () => {
    setShowImages(false);
    onClose(); // Call the original onClose function
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{data.name}</h2>
          <button onClick={handleClose} className="close-button">
            Close
          </button>
        </div>
        <div className="modal-content">
          <p>ID: {data.id}</p>
          <p>Description: {data.description}</p>
          {/* Add more details as needed */}
        </div>
        <div className="modal-footer">
          <button onClick={() => setShowImages(true)}>Preview Data Set</button>
        </div>
        {showImages && (
          <div className="image-preview">
            <a href={AbhiImage} target="_blank" rel="noopener noreferrer" className="image-link">
              <img src={AbhiImage} alt="Abhi" className="image-style" />
            </a>
            <a href={HimagnaImage} target="_blank" rel="noopener noreferrer" className="image-link">
              <img src={HimagnaImage} alt="Himagna" className="image-style" />
            </a>
            {/* Add more images as needed with their respective links and class names */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
