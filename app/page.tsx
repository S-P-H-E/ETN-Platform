import { prisma } from "@/lib/prisma";
import Image from "next/image"
import { FaCartShopping } from "react-icons/fa6";

export default async function Home() {
  // const data = await prisma.courses.findFirst({
  //   where: {
  //     id: "id"
  //   }
  // })

  return (
    <div>
      <div className="p-10 flex items-center justify-between">
        <Image src="/logo-full.svg" alt="Logo" width={160} height={0}/>

        <div className="flex gap-6 font-semibold">
          <button>Courses</button>
          <button>Contact Us</button>
          <button>About Us</button>
        </div>

        <button className="border border-black flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer">
          Cart
          <FaCartShopping />
        </button>
      </div>
      <div className="px-10">
        <div className="bg-red-500 w-full h-[600px] rounded-4xl relative">
          <div className="absolute p-8 text-white flex flex-col justify-end gap-3 size-full z-10">
            <h1 className="text-5xl font-semibold">Garden</h1>
            <p className="text-2xl">Some stuff here about gardening</p>
            <div className="space-x-2">
              <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-full font-semibold">Buy Now</button>
              <button className="bg-white cursor-pointer text-black px-4 py-2 rounded-full font-semibold">Buy Now</button>
            </div>
          </div>
          <div className="absolute bg-gradient-to-t from-black to-transparent size-full rounded-4xl"/>
          <img className="size-full object-cover rounded-4xl" src="https://images.unsplash.com/photo-1618935810018-dd4adbb64b78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        {/* <h1>{data?.name}</h1> */}
      </div>
    </div>
  )
}
