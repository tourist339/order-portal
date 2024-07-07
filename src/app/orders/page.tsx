"use client"
import DataTable from "@/components/dataTable";
import AssignOrder from "@/app/orders/assignOrder";
import {useState} from "react";
import {WorkerData} from "@/model/workerdata";
import {Order,Status} from "@/model/order";
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
            details: "demo fake",
            status: Status.TODO,
            created: new Date(),
            due: new Date(),
            image: {
                src: "../orders/image.png",
                alt: "Sample image"
            },
            comments: "nvjnsdknclksdn",
            assignee: "fdsfs",
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
    }}> bro</button>
    <DataTable columns={columns} data={data} ></DataTable>
            <AssignOrder isOpen={isAssignOpen} workerData={workerData}></AssignOrder>
        </>
    )
}