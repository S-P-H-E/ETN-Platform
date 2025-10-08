export default function Summary() {
    const categories = [
        {
          id: "id1",
          name: "Short Courses",
          description: "Description of Course Here",
          courses: ["First Aid", "First Aid"]
        },
        {
          id: "id2",
          name: "Long Courses",
          description: "Description of Course Here",
          courses: ["First Aid", "First Aid"]
        }
    ]

    return (
        <div className="flex flex-col w-full items-center mt-20 z-20 px-10">
            <div className="flex flex-col items-center gap-2 bg-[var(--secondary)] w-full p-16 rounded-4xl">
                <h1 className="text-5xl font-semibold">About Empowering The Nation</h1>
                <p className="text-[var(--description)] w-xl text-center">We create transformative courses for aspiring gardeners, entrepreneurs, and professionals looking to grow their skills and careers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 max-w-6xl w-full">
                {categories.map(c => (
                    <div key={c.id} className="rounded-3xl border border-[var(--border)] p-12 transition-transform hover:scale-[1.01]">
                        <h2 className="text-2xl font-semibold">{c.name}</h2>
                        <p className="text-[var(--description)] mt-1">{c.description}</p>
                        <div className="mt-6">
                            {c.courses.map((course, i) => (
                                <div key={i} className="py-2 border-b border-[var(--border)] last:border-b-0 text-sm">
                                    {course}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}