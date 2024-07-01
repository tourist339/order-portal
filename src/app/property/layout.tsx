import Link from "next/link";

export default function PropertyLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className={"flex"}>
        <h1>Property</h1>
            </div>
            <div className={"flex"}>
        <nav className={"flex-col"}>
            <Link href="/orders">Orders</Link>
        </nav>
            </div>
        {children}
        </>
    );
}
