import React from 'react';

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((col, index) => (
          <th key={index}>{col}</th> 
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
