import Link from "next/link";
import SideNav from "@/app/property/(components)/SideNav";
import {Property} from "@/model/property";
async function fetchProperty(id:string):Promise<Property>{
    console.log(id)
    return {
        owner:"kartik",
        address:"abcd",
        company:"your"
    }
}


export default async function PropertyLayout({
                                                 children,
                                                params
                                             }: Readonly<{
    children: React.ReactNode;
    params: {id: string};
}>) {
    const prop = await fetchProperty(params.id)
    return (
        <>
            <div className={"flex"}>
                <h1>Property</h1>
            </div>
            <div className={"flex"}>
                <SideNav/>
            </div>
            {children}
        </>
    );
}
