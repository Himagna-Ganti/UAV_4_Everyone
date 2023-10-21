import React from "react";
import Navbar from "./Navbar";
// import Infobox from './Infobox';
import Multiplelinebreaks from "./Mulitplelinebreaks";
import "./Modal.css"; 
import Driftbox from "./Driftbox";


function Datasets() {

  return (
    <div>
      <Navbar /> 
      <Multiplelinebreaks count={4} />
      <h1>Datasets</h1>
      <Driftbox/>
      <Multiplelinebreaks count={4} />
    </div>
    
  );
}

export default Datasets;
