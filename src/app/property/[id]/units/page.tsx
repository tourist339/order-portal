"use client"
import DataTable from "@/components/dataTable";
import {ColumnDef} from "@tanstack/table-core";
import {Order} from "@/model/order";
import "./unit.scss"
import AddUnit from "@/app/property/[id]/units/addUnit";
import AddTenantTable from './AddTenantTable';
import {Tenant, UnitInfo} from '@/model/property'

import {useState} from "react";
export default function Unit(){
    const [isAddUnitOpen, setIsAddUnitOpen] = useState(false);
    const columns:ColumnDef<UnitInfo>[] =[
        {
            header:"Unit Number",
            accessorKey: 'number',
        },
        {
            header: 'Number of Tenants',
            accessorKey: 'numTenants',
        },
        {
            header: 'Edit Tenant Info',
            cell: ({ row }) => {
                return row.getCanExpand() ? (
                  <button
                    {...{
                      onClick: row.getToggleExpandedHandler(),
                      style: {cursor: 'pointer'},
                    }}
                  >
                    Do Shit
                  </button>
                ) : (
                  '🔵'
                )
              }
            

        }

    ]
    const dummyTenant: Tenant = {unitNumber: "12", firstName: "AS", lastName: "asd"}

    
    const getUnits = () => {

        const data :UnitInfo[] = [
            {
                number:"123",
                tenants: [dummyTenant]
            },
            {
                number:"1234",
                tenants: [dummyTenant]
            }
        ];

        return data

    }

    const saveTable = (e) => {
        e.preventDefault();
        console.log("SAVING.....")
      };
    const addTenant=()=>{

    }
    const renderSubComponent = ({ row }) => {
        return (
            <AddTenantTable data={getUnits()}></AddTenantTable>
        )
      }
    return(
        <>
            <DataTable columns={columns} data={getUnits()} subRowComponent={renderSubComponent} getRowCanExpand={()=>true}></DataTable>

            <button
                className={"absolute right-10 bottom-10 bg-green-700 rounded-md p-1.5"}
                onClick={()=>saveTable}
            > Save</button>
            {/* <AddUnit isOpen={isAddUnitOpen}></AddUnit> */}
        </>
    )
}