import React from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DataTablePage from "./components/DataTablePage/DataSets";


// function App() {
//   return (
//     <>
//       <Navbar />
//       <br />
//       <Title />
//       {/* <h1>Data Table</h1>
//       <DataTable data={data} /> */}
//       <Router>
//       <div>
//       <Navbar />
//         <Routes>
//           <Route path="/" exact component={Home} />
//           <Route path="/components/DataSets" component={DataTablePage} />
//         </Routes>
//       </div>
//     </Router>
//     </>
    
//   );
// }

// export default App;


function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <Title />
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/DataSets">Datasets</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/DataSets" element={<DataTablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
