import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex gap-10 items-center p-10 h-[350px]">
            <div className="p-10 bg-[var(--secondary)] w-1/2 rounded-2xl h-full">
                <div className="flex items-center gap-2 mb-3">
                    <Image src="/logo.svg" alt="Logo" width={50} height={0}/>
                    <h1 className="text-3xl font-semibold">Empowering The Nation</h1>
                </div>
                <p className="text-[var(--description)] mb-5 text-sm">Inspiring growth, empowering lives.</p>
                <p className="text-[var(--description)] w-xl text-sm">Empowering domestic workers and gardeners through skills training, making them more marketable and enabling higher wages. We believe in practical, hands-on learning with zero PowerPoint policy.</p>
            </div>

            <div className="p-10 bg-[var(--secondary)] rounded-2xl w-1/2 h-full">
                <h1 className="text-3xl font-semibold mb-3">General</h1>
                <div className="flex flex-col gap-3">
                    <Link href="/privacy" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        Terms of Service
                    </Link>
                    <Link href="/contact-us" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        Contact Us
                    </Link>
                    <Link href="/about-us" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        About Us
                    </Link>
                </div>
            </div>
        </div>
    )
}