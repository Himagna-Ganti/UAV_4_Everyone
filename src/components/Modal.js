// Modal.js
import React from "react";
import "./Modal.css"; // Import the CSS file for styling

function Modal({ isOpen, data, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{data.name}</h2>
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </div>
        <div className="modal-content">
          <p>ID: {data.id}</p>
          <p>Description: {data.description}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
