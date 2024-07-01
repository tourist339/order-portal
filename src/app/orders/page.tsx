"use client"
import DataTable from "@/app/orders/dataTable";
import AssignOrder from "@/app/orders/assignOrder";
import {useState} from "react";
import {WorkerData} from "@/model/workerdata";
import {Order} from "@/model/order";
import {ColumnDef} from "@tanstack/table-core";

export default function OrderPage(){
    const [isAssignOpen, setIsAssignOpen] = useState(false);
    const [workerData, setWorkerData] = useState<WorkerData[]>([
        {
            Name:"ABC",
            Distance:"3.5km"
        }
    ]);
    const columns:ColumnDef<Order>[] =[
        {
            header:"First Name",
            accessorKey: 'id',
        },
        {
            header: 'Last Name',
            accessorKey: 'created',
        },
        {
            accessorKey: 'assignee',
            header: 'Assignee',
            cell: ({row})=>(
                <button onClick={()=>assignWorker("row")}>
                    Assign
                </button>
            )

        }
    ]
    const data :Order[] = [
        {
            id:"123",
            created: new Date(),
            assignee:"fdsfs"
        }
    ];

    const assignWorker= (loc:string)=>{
        alert(loc)
        setIsAssignOpen(true)
    }
    return(
        <>
        <h1>
            Hey baby
        </h1>
    <button onClick={()=> {
        setWorkerData([])
        alert("fdsfsdfs")
    }}> bro</button>
    <DataTable columns={columns} data={data} ></DataTable>
            <AssignOrder isOpen={isAssignOpen} workerData={workerData}></AssignOrder>
        </>
    )
}