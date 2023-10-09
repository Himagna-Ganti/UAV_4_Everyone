import React from "react";
import "./Table.css"; // Import the CSS file

function Table({ data, onNameClick }) {
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
            <td onClick={() => onNameClick(item)} className="name-cell">
              {item.name}
            </td>
            <td>{item.age}</td>
            {/* Render other data columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
