"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
export default function SideNav() {
    const currentPage = usePathname();
    const absURL= (page)=>{
        return currentPage+page;
    }
    return (
        <nav className={"flex flex-col"}>
            <Link href={absURL("/basic")}>Basic Details</Link>
            <Link href={absURL("/units")}>Units</Link>
            <Link href={absURL("/team")}>Team</Link>
        </nav>
    )
}