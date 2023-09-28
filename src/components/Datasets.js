import React from "react";
import Table from "./Table"; // Import the Table component
import Navbar from "./Navbar";

function Datasets() {
  const data = [
    { id: 1, name: "Dataset 1", description: "Description 1" },
    { id: 2, name: "Dataset 2", description: "Description 2" },
    // Add more dataset objects as needed
  ];

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
        <br />
        <br />
        <br />
        <br />
      <h1>Datasets</h1>
      <Table data={data} /> {/* Include the Table component with dataset data */}
    </div>
  );
}

export default Datasets;
