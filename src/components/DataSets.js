import React from 'react';
import data from "./DataSource";
import DataTable from "./DataTableDesign";

function DataTablePage() {
  return (
    <div>
      {/* Content for the Data Table Page */}
      <h1>Data Table</h1>
      <DataTable data={data} />
    </div>
  );
}

export default DataTablePage;
