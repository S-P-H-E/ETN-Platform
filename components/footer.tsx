import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex gap-10 items-center p-10 h-[350px]">
            <div className="p-10 bg-[rgb(14,16,18)] w-1/2 rounded-2xl h-full">
                <div className="flex items-center gap-2 mb-3">
                    <Image src="/logo.svg" alt="Logo" width={50} height={0}/>
                    <h1 className="text-3xl font-semibold">Empowering The Nation</h1>
                </div>
                <p className="text-[var(--description)] mb-5 text-sm">Inspiring growth, empowering lives.</p>
                <p className="text-[var(--description)] w-xl text-sm">Being fully bootstrapped, we're not driven by money or interested in becoming a mystical unicorn. We happily cut through the noise and teach gardeners and entrepreneurs personally, taking a 100% learn-by-doing approach with a zero Powerpoint policy.</p>
            </div>

            <div className="p-10 bg-[rgb(14,16,18)] rounded-2xl w-1/2 h-full">
                <h1 className="text-3xl font-semibold mb-3">Socials</h1>
                <div className="flex flex-col gap-3">
                    <Link href="/" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        Facebook
                    </Link>
                    <Link href="/" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        Instagram
                    </Link>
                    <Link href="/" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        Twitter
                    </Link>
                    <Link href="/" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        LinkedIn
                    </Link>
                </div>
            </div>
            <div className="p-10 bg-[var(--secondary)] rounded-2xl w-1/2 h-full">
                <h1 className="text-3xl font-semibold mb-3">General</h1>
                <div className="flex flex-col gap-3">
                    <Link href="/" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/" className="text-[var(--description)] hover:text-[var(--background)] transition-colors">
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