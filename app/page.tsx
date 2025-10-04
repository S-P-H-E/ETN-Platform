import Card from "@/components/hero/card";
import Summary from "@/components/hero/summary";
import Lenis from 'lenis'
import ReactLenis from "lenis/react";
import { IoIosArrowRoundForward, IoMdFlower } from "react-icons/io";
import clsx from 'clsx'
import { RiFlowerFill } from "react-icons/ri";
import { FaHandshakeSimple, FaSuitcase } from "react-icons/fa6";

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

  const stats = [
    {
      icon: <RiFlowerFill className="mb-5" size={40}/>,
      number: "74%",
      description: "Landed New Jobs"
    },
    {
      icon: <FaSuitcase className="mb-5" size={40}/>,
      number: "1.2K+",
      description: "Started Freelancing"
    },
    {
      icon: <FaHandshakeSimple className="mb-5" size={40}/>,
      number: "84%",
      description: "Expanded Networks"
    },
  ]

  return (
    <>
      <ReactLenis root />
      {data && <Card data={data}/>}
      {/* Stats */}
      <div className="p-10 flex gap-20 w-fit mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-20">
            <div className="flex flex-col items-center justify-center">
              {s.icon}
              <h1 className="text-6xl font-semibold">{s.number}</h1>
              <p>{s.description}</p>
            </div>
            <div className={clsx(i === stats.length-1 ? "hidden" : "h-20 w-0.5 bg-[var(--border)]")}/>
          </div>
        ))}
      </div>
      <Summary />

      {/* Certificate */}
      <div className="px-20">
        <div className="bg-[var(--secondary)] rounded-4xl w-full flex justify-between">
          <div className="space-y-10 p-25">
            <h1 className="text-6xl w-[700px] font-semibold">You'll get a certificate about successful graduation</h1>
            <button className="bg-blur border border-[var(--border)] flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer">
                <h1>Explore Courses</h1>
                <IoIosArrowRoundForward />
            </button>
          </div>

          <img className="rounded-br-4xl" width={500} height={0} src="https://framerusercontent.com/images/Ticrdm8kssmLg8TBt6NSCFwKk.png?scale-down-to=2048" alt="" />
        </div>
      </div>
    </>
  )
}
