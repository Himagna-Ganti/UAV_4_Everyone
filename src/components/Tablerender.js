import React, { useState } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";
import Table from "./Table";
import "./Table.css";
import Modal from "./Modal"; // Import the Modal component
import "./Modal.css";
import I51 from "./Normalinsulators/0051.jpg";
import I49 from "./Normalinsulators/0049.jpg";
import I56 from "./Normalinsulators/0056.jpg";
import I58 from "./Normalinsulators/0058.jpg";
import I59 from "./Normalinsulators/0059.jpg";
import I60 from "./Normalinsulators/0060.jpg";
import D07 from "./Defectiveinsulators/170007d.JPG";
import D13 from "./Defectiveinsulators/170013v.JPG";
import D29 from "./Defectiveinsulators/170029d.JPG";
import D30 from "./Defectiveinsulators/170030.JPG";
import D31 from "./Defectiveinsulators/170031v.JPG";
import D32 from "./Defectiveinsulators/170032h.JPG";

function Tablereder() {
  const data = [
    { id: 1, Datasetname: "Normal Insulators", Dateofupload: "31/10/2023", description: "Link provided below will download datasets from our Amazon s3 bucket", datasetlink:"https://object-arbutus.cloud.computecanada.ca/rrg-test-bucket/Normal_insulators_images.zip", imagePath: [I49, I51, I56, I58, I59, I60]},
    { id: 2, Datasetname: "Defective Insulators", Dateofupload: "31/10/2023",description: "Link provided below will download datasets from our Amazon s3 bucket", datasetlink:"https://object-arbutus.cloud.computecanada.ca/rrg-test-bucket/defect_images.zip", imagePath: [D07, D13, D29, D30, D31, D32]},
    // Add more dataset objects as needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  }

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <Multiplelinebreaks count={4} />
      <div className="Tablerender-container">
        <h1>Powerlines Datasets</h1>
        <Table data={data} onNameClick={openModal} /> {/* Pass the openModal function */}
        <Modal isOpen={isModalOpen} data={selectedData} onClose={closeModal} /> {/* Render the Modal */}
      </div>
    </div>
  );
}

export default Tablereder;
