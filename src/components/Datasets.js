import React from "react";
import Table from "./Table"; // Import the Table component
import Navbar from "./Navbar";
// import Datasetpreview from "./Datasetpreview";
import Rectangularcomponent from "./Rectangularcomponent";

function Datasets() {
  const data = [
    { id: 1, name: "Dataset 1", description: "Description 1" },
    { id: 2, name: "Dataset 2", description: "Description 2" },
    // Add more dataset objects as needed
  ];
  // const imagePaths = [
  //   './Images/Abhi.png',
  //   './Images/Himagna.png'
  //   // Add more image paths here
  // ];
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
        <br />
        <br />
        <br />
        <br />
      <h1>Datasets</h1>
      <Table data={data} /> {/* Include the Table component with dataset data */}
      {/* <Datasetpreview imagePaths={imagePaths} /> */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}></div>
      {/* <dic className="rectangular-component"/> */}
      <div className="center-container"></div>
      <Rectangularcomponent />
    </div>
  );
}

export default Datasets;
