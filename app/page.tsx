import Card from "@/components/hero/card";
import Summary from "@/components/hero/summary";
import Lenis from 'lenis'
import ReactLenis from "lenis/react";

export default async function Home() {
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
    <>
      <ReactLenis root />
      {data && <Card data={data}/>}
      <Summary />
    </>
  )
}
