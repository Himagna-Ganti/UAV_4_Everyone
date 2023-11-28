import React from 'react';
import './Powerlinesbox.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Powerlinesbox = () => {
  return (
    <div className="powerlines-box">
      <div className="text-container-powerlines">
        <div className="powerlines-text">Powerlines Datasets</div>
        <Link to="/Tablerender" className="open-table-link">Click here to view Powerlines Datasets</Link>
      </div>
    </div>
  );
};

export default Powerlinesbox;