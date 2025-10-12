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
        <div id="nav" className="px-4 md:px-20 pt-4 md:pt-10 flex items-center justify-between absolute w-full z-20">
            <Link href="/" className="flex-shrink-0">
                <Image src="/logo-full.svg" alt="Logo" width={120} height={0} className="md:w-40"/>
            </Link>

            <div className="flex items-center justify-end gap-2 md:gap-4">
                <Cart />
                <Link href="/long" className="bg-blur border border-[var(--border)] flex items-center gap-1 md:gap-2 px-3 md:px-6 py-2 rounded-full cursor-pointer text-sm md:text-base">
                    <span className="hidden md:inline">Explore Courses</span>
                    <span className="md:hidden">Courses</span>
                    <IoIosArrowRoundForward className="text-sm md:text-base" />
                </Link>
            </div>
        </div>
    )
}