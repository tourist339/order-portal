"use client"
import { useState } from "react";
import ReactModal from "react-modal"
import DataTable from "@/components/dataTable";
import {ColumnDef} from "@tanstack/table-core";
import { Tenant } from "@/model/property";

type AddUnitProps = {
    isOpen : boolean
}
export default function AddUnit({isOpen}:AddUnitProps) {
    

    const [unitNumber, setUnitNumber] = useState('');
    const [tenants, setTenants] = useState([])

    const columns:ColumnDef<Tenant>[] =[
        {
            header:"Unit Number",
            accessorKey: 'unitNumber',
        },
        {
            header: 'First Name',
            accessorKey: 'firstName',
        },
        {
            accessorKey: 'Last Name',
            header: 'lastName',

        }
    ]

    const data :Tenant[] = [
        {
            unitNumber:"123",
            firstName: "kartik Dalla",
            lastName: "Dalla!"
        }
    ];

    const handleUnitNumberChange = (e) => {
        setUnitNumber(e.target.value);
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Unit Number:', unitNumber);
      console.log('Tenants:', tenants);
    };
  
    return (
        <ReactModal isOpen={isOpen} className={"addUnitModal"}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="unitNumber">Unit Number:</label>
        <input 
          type="text" 
          id="unitNumber" 
          name="unitNumber" 
          value={unitNumber} 
          onChange={handleUnitNumberChange} 
          required 
        /><br /><br />

        <DataTable columns={columns} data={data} ></DataTable>
  

  
        <input type="submit" value="Submit" />
      </form>
      </ReactModal>
    );
}