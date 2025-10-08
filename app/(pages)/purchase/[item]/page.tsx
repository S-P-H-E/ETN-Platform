export default async function ItemID({ params }: {params: Promise<{ course: string }>}) {
    const { course } = await params

    return (
        <div className="p-20 pt-30">
            <h1>ID: {course}</h1>
        </div>
    )
}