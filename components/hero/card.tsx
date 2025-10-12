"use client"
import { addItemToCart } from "@/lib/cart";

type Card = {
    data: {
        id: string,
        name: string,
        description: string,
        coverImage: string,
        price: number
    }
}

export default function Card({ data }: Card) {
    const item = {
        id: data.id,
        quantity: 1,
        name: data.name,
        price: data.price
    }

    return (
        <>
            <div className="bg-[var(--foreground)] w-full h-[100dvh] relative">
                <div className="absolute p-4 md:p-20 text-[var(--background)] flex flex-col justify-end gap-4 md:gap-6 size-full z-10">
                    <h1 className="text-2xl md:text-5xl font-semibold leading-tight">{data.name}</h1>
                    <p className="text-sm md:text-xl max-w-3xl">{data.description}</p>
                    <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 sm:space-y-0">
                        <a href={`/checkout?items=${data.id}`} className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-4 md:px-6 py-2 rounded-full font-semibold inline-block text-center text-sm md:text-base">Buy Now</a>
                        <button onClick={() => addItemToCart(item)} className="bg-[var(--background)] cursor-pointer text-[var(--foreground)] px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base">Add to Cart</button>
                    </div>
                </div>
                <div className="absolute bg-gradient-to-t from-black to-transparent size-full"/>
                <div className="absolute bg-gradient-to-b from-black/90 to-transparent w-full h-40"/>
                <img className="size-full object-cover" src={data.coverImage} alt={data.name} />
            </div>
        </>
    )
}