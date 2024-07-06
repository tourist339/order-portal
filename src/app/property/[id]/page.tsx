
import {redirect, usePathname} from "next/navigation";

export default function Page({params}){
    redirect(`/property/${params.id}/basic`)
}