import React, {useState} from "react";
import {Column, ColumnDef, getCoreRowModel} from "@tanstack/table-core";
import {flexRender, useReactTable} from "@tanstack/react-table";
import {Order} from "@/model/order";
import AssignOrder from "@/app/orders/assignOrder";
type dataTableProps<T> = {
    columns: ColumnDef<T>[];
    data:T[];
}
const DataTable = <T,>({columns,data}:dataTableProps<T>)=> {




    const table = useReactTable({
        columns,data,getCoreRowModel: getCoreRowModel()
    });

    return (
        <>
            <table>
                <thead>
                {table.getHeaderGroups().map(headerGroup=>(
                    <tr key={headerGroup.id}>
                        {
                            headerGroup.headers.map(header=>(
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                    </tr>
                ))}
                </thead>
                <tbody>{
                    table.getRowModel().rows.map(row=>(
                        <tr key={row.id}>{
                            row.getVisibleCells().map(cell=>(
                                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))
                        }</tr>
                    ))
                }</tbody>
            </table>
        </>
    );
}




export default DataTable;