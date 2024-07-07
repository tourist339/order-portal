"use client"
import React, {Fragment, useState} from "react";
import {Column, ColumnDef, getCoreRowModel, Row} from "@tanstack/table-core";
import {flexRender, useReactTable} from "@tanstack/react-table";
import {Order} from "@/model/order";
import AssignOrder from "@/app/orders/assignOrder";
type dataTableProps<T> = {
    columns: ColumnDef<T>[];
    data:T[];
    getRowCanExpand?: (row: Row<T>) => boolean;
    subRowComponent?:({row}:{row:Row<T>})=>React.ReactElement;
    fixedFirstRowComponent?: React.ReactElement;
}
const DataTable = <T,>({columns,data,getRowCanExpand,subRowComponent, fixedFirstRowComponent}:dataTableProps<T>)=> {




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
                <tbody>
                {
                    fixedFirstRowComponent
                }
                {
                    table.getRowModel().rows.map(row=> {
                        return(
                            <Fragment key = {row.id}>
                        <tr key={row.id}>{
                            row.getVisibleCells().map(cell => (
                                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))
                        }</tr>
                        {row.getIsExpanded()&& (
                            <tr>
                                {/* 2nd row is a custom 1 cell row */}
                                <td colSpan={row.getVisibleCells().length}>
                                    {subRowComponent({ row })}
                                </td>
                            </tr>
                        )}
                            </Fragment>
                    )})
                }</tbody>
            </table>
        </>
    );
}




export default DataTable;