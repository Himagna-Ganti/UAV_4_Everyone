import React from "react";
import Table from "./components/Table";

function App() {
  const data = [
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jane Smith", age: 25 },
    // Add more data objects as needed
  ];

  return (
    <div>
      <h1>Table Example</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
