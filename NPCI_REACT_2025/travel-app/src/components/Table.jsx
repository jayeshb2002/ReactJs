import React, { useState } from 'react';
import TableHead from '../ui/TableHead';
import TableBody from '../ui/TableBody';

const Table = ({ columns, data }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
  const filteredData = data.filter(row => 
    columns.some(col => 
      row[col].toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <input 
        type="text" 
        name="search" 
        onChange={handleChange}
        value={searchQuery} 
      />
      <table>
        <TableHead columns={columns} />
        <TableBody data={filteredData} />
      </table>
    </div>
  );
};

export default Table;
