"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import "./sidebar.css"
export default function SideNav({id}:{id:string}) {
    return (
        <nav className={"flex flex-col sidebar"}>
            <Link href={`/property/${id}/basic`}>Basic Details</Link>
            <Link href={`/property/${id}/units`}>Units</Link>
            <Link href={`/property/${id}/team`}>Team</Link>
        </nav>
    )
}