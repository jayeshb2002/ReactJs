import React from 'react'

const TableHead = ({ columns }) => {
    const createContent = (value, idx) => {
        return <th key={idx}>{value.toUpperCase()}</th>
    }
    return (
        <thead>
            <tr>
                {
                    columns.map(createContent)
                }
            </tr>
        </thead>
    )
}

export default TableHead