import React from "react";
import Navbar from "./Navbar";
import Multiplelinebreaks from "./Mulitplelinebreaks";
import "./Modal.css";
import Driftbox from "./Driftbox";
import Powerlinesbox from "./Powerlinesbox";
import "./Datasets.css";
import Backbutton from "./Backbutton";

function Datasets() {
  return (
    <div>
      <Navbar />
      <Multiplelinebreaks count={3} />
      <div className="header-container">
        <Backbutton/>
        <h1 className="custom-heading">Datasets</h1>
      </div>
      <Powerlinesbox />
      <Multiplelinebreaks count={1} />
      <Driftbox />
      <Multiplelinebreaks count={4} />
    </div>
  );
}

export default Datasets;
