import { prisma } from "@/lib/prisma";

export default async function Card() {
    // const data = await prisma.courses.findFirst({
    //     where: {
    //       featured: true
    //     }
    // })

    // TODO: Switch to Prisma fetching
    const data = {
      name: "Garden Course",
      description: "Learn the essentials of gardening — from soil preparation and planting to watering, pruning, and harvesting. This course will give you the skills to grow healthy plants, create a thriving garden, and enjoy the beauty of nature at home.",
      coverImage: "https://images.unsplash.com/photo-1618935810018-dd4adbb64b78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

    return (
        <div className="px-10">
            <div className="bg-[var(--foreground)] w-full h-[600px] rounded-4xl relative">
                <div className="absolute p-10 text-[var(--background)] flex flex-col justify-end gap-3 size-full z-10">
                    <h1 className="text-5xl font-semibold">{data?.name}</h1>
                    <p className="text-xl w-3xl">{data?.description}</p>
                    <div className="space-x-2">
                        <button className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-6 py-2 rounded-full font-semibold">Buy Now</button>
                        <button className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-6 py-2 rounded-full font-semibold">Add to Cart</button>
                    </div>
                </div>
                <div className="absolute bg-gradient-to-t from-black to-transparent size-full rounded-4xl"/>
                <img className="size-full object-cover rounded-4xl" src={data?.coverImage} alt={data?.name} />
            </div>
        </div>
    )
}