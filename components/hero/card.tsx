"use client"
import { addItemToCart } from "@/lib/cart";

type Card = {
    data: {
        id: string,
        name: string,
        description: string,
        coverImage: string
    }
}

export default function Card({ data }: Card) {
    const item = {
        id: 1,
        quantity: 1,
        name: data.name
    }

    return (
        <>
            <div className="bg-[var(--foreground)] w-full h-[80dvh] relative">
                <div className="absolute p-20 text-[var(--background)] flex flex-col justify-end gap-6 size-full z-10">
                    <h1 className="text-5xl font-semibold">{data.name}</h1>
                    <p className="text-xl w-3xl">{data.description}</p>
                    <div className="space-x-2">
                        <button className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-6 py-2 rounded-full font-semibold">Buy Now</button>
                        <button onClick={() => addItemToCart(item)} className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-6 py-2 rounded-full font-semibold">Add to Cart</button>
                    </div>
                </div>
                <div className="absolute bg-gradient-to-t from-black to-transparent size-full"/>
                <div className="absolute bg-gradient-to-b from-black/90 to-transparent w-full h-40"/>
                <img className="size-full object-cover" src={data.coverImage} alt={data.name} />
            </div>
        </>
    )
}