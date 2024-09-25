import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <main className="bg-white py-1 xl:py-3 h-screen text-black overflow-x-hidden">
      <div className="w-full flex flex-col space-y-1 lg:space-y-2 xl:space-y-3 items-center justify-center">
        <span className="text-[#036A8C] font-extrabold text-lg md:text-xl xl:text-2xl">DeutschNow</span>
        <div className="bg-[url('/banner11.png')] h-56 !mb-2 sm:h-60 lg:h-72 w-screen bg-bottom md:bg-center bg-cover bg-no-repeat bg-fixed"></div>
        <div className='flex flex-col sm:pt-4 space-y-5 items-center justify-center w-full'>
          <span className='text-center pb-3 border-b border-b-cyan-500'>
            German speaking practice <br/>
            Practice speaking German with real life scenarios. Speak your lines to keep the conversation going.
          </span>
          <Link href={"/practice/scenario1"}>
            <div className='bg-gradient-to-r p-2 rounded-3xl bg-clip-border border-2 from-green-400 to-cyan-400'>
              <span className='w-full rounded-xl p-1 px-2 bg-white hover:bg-gradient-to-r from-green-400 to-cyan-400 hover:text-white'>Scenario 1: Buying a Train Ticket in Germany</span>
            </div>
          </Link>
          <Link href={"/practice/scenario2"}>
            <div className='bg-gradient-to-r p-2 rounded-3xl bg-clip-border border-2 from-cyan-400 to-green-400'>
              <span className='w-full rounded-xl p-1 px-2 bg-white hover:bg-gradient-to-r from-cyan-400 to-green-400 hover:text-white'>Scenario 2: Going Through Immigration in Germany</span>
            </div>
          </Link>
          <Link href={"/practice/scenario3"}>
            <div className='bg-gradient-to-r p-2 rounded-3xl bg-clip-border border-2 from-green-400 to-cyan-400'>
              <span className='w-full rounded-xl p-1 px-2 bg-white hover:bg-gradient-to-r from-green-400 to-cyan-400 hover:text-white'>Scenario 3: Handling Lost Luggage at the Airport</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home