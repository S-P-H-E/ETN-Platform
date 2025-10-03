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
        },
    ]

    return (
        <div className="flex flex-col w-full items-center mt-10 z-20">
            <div className="flex flex-col items-center gap-1">
                <h1 className="text-3xl font-semibold">About Empowering The Nation</h1>
                <p className="text-[var(--description)]">We make courses for (insert customers here)</p>
            </div>

            <div className="flex gap-2 justify-center mt-10">
                {categories.map(c => (
                    <div key={c.id} className="w-lg p-10 rounded-xl">
                        <h1 className="text-xl font-semibold">{c.name}</h1>
                        <p className="text-[var(--description)]">{c.description}</p>
                        <div className="flex flex-col">
                            {c.courses.map((c, i) => (
                                <h1 key={i}>{c}</h1>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}