import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Table from "./Table";
import "./Table.css";
import Modal from "./Modal"; // Import the Modal component
import "./Modal.css"; 

function Tablereder() {
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
      <Navbar /> {/* Include the Navbar component */}
      <Multiplelinebreaks count={4} />
      <div className="Tablerender-container">
      <h1>Drifts Datasets</h1>
      <Table data={data} onNameClick={openModal} /> {/* Pass the openModal function */}
      <Modal isOpen={isModalOpen} data={selectedData} onClose={closeModal} /> {/* Render the Modal */}
      </div>
    </div>
  );
}

export default Tablereder;
