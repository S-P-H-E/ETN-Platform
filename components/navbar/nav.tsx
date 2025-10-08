"use client"
import Image from "next/image"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { removeItemFromCart, useCartItems } from "@/lib/cart";
import { FaCartShopping } from "react-icons/fa6";
import Cart from "./cart";

export default function Navbar() {
    
    // removeItemFromCart(1)

    return (
        <div id="nav" className="px-20 pt-10 flex items-center justify-between absolute w-full z-20">
            <Link href="/" className="w-1/2">
                <Image src="/logo-full.svg" alt="Logo" width={160} height={0}/>
            </Link>

            {/* <Links /> */}
            <div className="flex gap-4 w-1/2">

                
            </div>

            <div className="flex items-center justify-end gap-2 w-1/2 h-full">
                <Cart />
                <Link href="/long" className="bg-blur border border-[var(--border)] flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer">
                    <h1>Explore Courses</h1>
                    <IoIosArrowRoundForward />
                </Link>
            </div>
        </div>
    )
}