import React from 'react';

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {Object.keys(row).map((key, idx) => (
            <td key={idx}>{row[key]}</td> 
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
