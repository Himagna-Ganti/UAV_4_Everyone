import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Multiplelinebreaks from "./Mulitplelinebreaks";


function Samdescription() {
    return (
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <Multiplelinebreaks count={4} />
        <div className="samdescription-container">
          <div className="knowmore-card">
            <h1 className="big-bold-text">SAM</h1>
            <p>
                How we did it ??
                <br/>
                Flexibility and repeated review: SAM allows for repeated reviewing, which provides many opportunities 
                to communicate changes or feedback, making it suitable for adapting to the evolving requirements of
                 power lines segmentation.
                 <br/>
                 Rapid feedback and development: The model elicits feedback from all interested parties, 
                 facilitating the design and development of power lines segmentation rapidly.
                 <br/>
                 Collaboration and iterative approach: SAM encourages collaboration and an iterative approach, 
                 enabling designers to test power lines segmentation early and often and be agile in response to 
                 user feedback.
                 <br/>
                 Repetitive in nature: SAM involves frequent repetition of steps, which may not align well with 
                 environments that do not encourage rapid feedback or flexible processes.
                 <br/>
                 Time-consuming: The model can be time-consuming and may require significant resources, 
                 especially if the project does not necessitate the level of review provided by SAM.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Samdescription;