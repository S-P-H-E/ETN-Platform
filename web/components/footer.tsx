import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-center p-4 md:p-10 min-h-[350px]">
            <div className="p-6 md:p-10 bg-[var(--secondary)] w-full md:w-1/2 rounded-2xl">
                <div className="flex items-center gap-2 mb-3">
                    <Image src="/logo.svg" alt="Logo" width={40} height={0} className="md:w-[50px]"/>
                    <h1 className="text-xl md:text-3xl font-semibold">Empowering The Nation</h1>
                </div>
                <p className="text-[var(--description)] mb-3 md:mb-5 text-xs md:text-sm">Inspiring growth, empowering lives.</p>
                <p className="text-[var(--description)] text-xs md:text-sm">Empowering domestic workers and gardeners through skills training, making them more marketable and enabling higher wages. We believe in practical, hands-on learning with zero PowerPoint policy.</p>
            </div>

            <div className="p-6 md:p-10 bg-[var(--secondary)] rounded-2xl w-full md:w-fit">
                <h1 className="text-xl md:text-3xl font-semibold mb-3">General</h1>
                <div className="flex flex-col gap-2 md:gap-3">
                    <Link href="/privacy" className="text-[var(--description)] hover:text-[var(--background)] transition-colors text-sm md:text-base cursor-pointer">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-[var(--description)] hover:text-[var(--background)] transition-colors text-sm md:text-base cursor-pointer">
                        Terms of Service
                    </Link>
                    <Link href="/contact-us" className="text-[var(--description)] hover:text-[var(--background)] transition-colors text-sm md:text-base cursor-pointer">
                        Contact Us
                    </Link>
                    <Link href="/about-us" className="text-[var(--description)] hover:text-[var(--background)] transition-colors text-sm md:text-base cursor-pointer">
                        About Us
                    </Link>
                </div>
            </div>
        </div>
    )
}