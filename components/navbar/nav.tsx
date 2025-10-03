import Image from "next/image"
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Links from "./links";

export default function Navbar() {
    return (
        <div className="p-10 flex items-center justify-between">
            <Link href="/" className="w-1/2">
                <Image src="/logo-full.svg" alt="Logo" width={160} height={0}/>
            </Link>

            <Links />

            <div className="flex justify-end gap-2 w-1/2">
                <button className="bg-[var(--foreground)] text-[var(--background)] flex items-center gap-2 px-6 py-2 rounded-lg cursor-pointer">
                    <h1>Cart</h1>
                    <FaCartShopping />
                </button>
                <button className="flex items-center gap-2 px-6 py-2 rounded-lg cursor-pointer">
                    <h1>Login</h1>
                    <FaUserCircle />
                </button>
            </div>
        </div>
    )
}