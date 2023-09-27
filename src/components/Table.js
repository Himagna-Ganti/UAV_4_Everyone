import React from "react";

function Table({ data }) {
  // Assuming data is an array of objects with properties for the table columns

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          {/* Add more table headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            {/* Render other data columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;