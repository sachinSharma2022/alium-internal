import React from 'react';
import Table from '@/components/table';

const TablePage = () => {
  const columns = ['Survey Type', 'Create Date', 'Last Changed by', 'Status', 'Actions'];
  
  const data = [
    { 'Survey Type': 'fdsf', 'Create Date': '2023-01-01', 'Last Changed by': 'john@example.com', 'Status': 'Active', 'Actions': 'Edit' },
    { 'Survey Type': 'another survey', 'Create Date': '2023-02-15', 'Last Changed by': 'jane@example.com', 'Status': 'Inactive', 'Actions': 'Delete' },
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default TablePage;
