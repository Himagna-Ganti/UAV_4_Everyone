import React from 'react';
import './Driftbox.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Driftbox = () => {
  return (
    <div className="drift-box">
      <div className="text-container">
        <div className="drift-text">Drones Datasets</div>
        <Link to="/Tablerender" className="open-table-link">Click here to view Drones Datasets</Link>
      </div>
    </div>
  );
};

export default Driftbox;

