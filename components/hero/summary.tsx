export default function Summary() {
    return (
        <div className="flex flex-col w-full items-center mt-10 md:mt-20 z-20 px-4 md:px-10">
            <div className="flex flex-col items-center gap-2 bg-[var(--secondary)] w-full p-8 md:p-16 rounded-4xl">
                <h1 className="text-2xl md:text-5xl font-semibold text-center">About Empowering The Nation</h1>
                <p className="text-[var(--description)] max-w-xl text-center text-sm md:text-base">We create transformative courses for aspiring gardeners, entrepreneurs, and professionals looking to grow their skills and careers.</p>
            </div>
        </div>
    )
}