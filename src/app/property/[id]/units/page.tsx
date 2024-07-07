"use client"
import DataTable from "@/components/dataTable";
import {ColumnDef} from "@tanstack/table-core";
import {Order} from "@/model/order";
import "./unit.scss"
import AddUnit from "@/app/property/[id]/units/addUnit";
import {useState} from "react";
export default function Unit(){
    const [isAddUnitOpen, setIsAddUnitOpen] = useState(false);
    const columns:ColumnDef<Order>[] =[
        {
            header:"Unit Number",
            accessorKey: 'number',
        },
        {
            header: 'Number of Tenants',
            accessorKey: 'numTenants',
        },
        {
            accessorKey: 'assignee',
            header: 'Add Tenant',
            cell: ({row})=>(
                <button onClick={()=>addTenant()}>
                    Add Tenant
                </button>
            )

        }
    ]
    const addTenant=()=>{

    }
    return(
        <>
            <DataTable columns={columns} data={[]} getRowCanExpand={()=>true}></DataTable>
            <button
                className={"absolute right-10 bottom-10 bg-green-700 rounded-md p-1.5"}
                onClick={()=>setIsAddUnitOpen(!isAddUnitOpen)}
            > Add Unit</button>
            <AddUnit isOpen={isAddUnitOpen}></AddUnit>
        </>
    )
}