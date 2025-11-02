"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"

export default function Links() {
    const pathname = usePathname()
    // TODO: Add pages variable with check for (if drop down then) etc.

    return (
        <div className="flex justify-center gap-6 font-semibold w-1/2 text-white">
            {/* TODO: Add dropdown to courses */}
            <button>Courses</button>

            <Link href="/contact-us" className={clsx(pathname == "/contact-us" ? "text-[var(--foreground)]" : "text-[var(--description)]", "hover:text-[var(--background)]")}>Contact Us</Link>
            <Link href="/about-us" className={clsx(pathname == "/about-us" ? "text-[var(--foreground)]" : "text-[var(--description)]", "hover:text-[var(--background)]")}>About Us</Link>
        </div>
    )
}