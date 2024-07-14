"use client"
import React, { useState } from 'react';
import './addTenant.scss';

const AddTenantTable = (data) => {

  const [rows, setRows] = useState([
    {unitNumber: "12", firstName: "AS", lastName: "asd",  editable: false}
  ]);
  const [datas, setDatas] = useState(data)
  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };


  const addRow = () => {
    setRows([...rows, { firstName: '', lastName: '', unitNumber: '',  editable: true }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted Data:', rows);
  };

  

  return (
    <div className="table-container">
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Unit Number</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={row.firstName}
                    onChange={(e) => handleInputChange(index, 'firstName', e.target.value)}
                    required
                    readOnly={!row.editable}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.lastName}
                    onChange={(e) => handleInputChange(index, 'lastName', e.target.value)}
                    required
                    readOnly={!row.editable}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.unitNumber}
                    onChange={(e) => handleInputChange(index, 'unitNumber', e.target.value)}
                    required
                    readOnly={!row.editable}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="add-row-button" onClick={addRow}>
          Add Tenant
        </button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTenantTable;
