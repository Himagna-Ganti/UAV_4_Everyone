import React, { useState } from "react";
import Table from "./Table";
import "./Table.css";
import Navbar from "./Navbar";
// import Infobox from './Infobox';
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Modal from "./Modal"; // Import the Modal component
import "./Modal.css"; 

function Datasets() {
  const data = [
    { id: 1, name: "Dataset 1", description: "Description 1" },
    { id: 2, name: "Dataset 2", description: "Description 2" },
    // Add more dataset objects as needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar /> 
      <Multiplelinebreaks count={4} />
      <h1>Datasets</h1>
      <Table data={data} onNameClick={openModal} /> {/* Pass the openModal function */}
      <Multiplelinebreaks count={3} />
      {/* <Infobox
        title="Dataset 1"
        content="Dataset 1 details"
      /> */}
      <Modal isOpen={isModalOpen} data={selectedData} onClose={closeModal} /> {/* Render the Modal */}
    </div>
  );
}

export default Datasets;
