import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <main className="bg-white py-1 xl:py-3 h-screen text-black overflow-x-hidden">
      <div className="w-full flex flex-col space-y-1 lg:space-y-2 xl:space-y-3 items-center justify-center">
        <span className="text-[#036A8C] font-extrabold text-lg md:text-xl xl:text-2xl">DeutschNow</span>
        <div className="bg-[url('/banner1.png')] h-56 !mb-2 sm:h-60 w-screen bg-bottom md:bg-center bg-cover bg-no-repeat bg-fixed"></div>
        <div className='flex flex-col sm:pt-10 space-y-5 items-center justify-center w-full'>
          <Link href={"/practice/scenario1"}>
            <div className='bg-gradient-to-r p-2 rounded-3xl bg-clip-border border-2 from-green-400 to-cyan-400'>
              <span className='w-full rounded-xl p-1 px-2 bg-white hover:bg-gradient-to-r from-green-400 to-cyan-400 hover:text-white'>Scenario 1: Buying a Ticket.</span>
            </div>
          </Link>
          <Link href={"/practice/scenario2"}>
            <div className='bg-gradient-to-r p-2 rounded-3xl bg-clip-border border-2 from-cyan-400 to-green-400'>
              <span className='w-full rounded-xl p-1 px-2 bg-white hover:bg-gradient-to-r from-cyan-400 to-green-400 hover:text-white'>Scenario 2: Asking for Directions.</span>
            </div>
          </Link>
          <Link href={"/practice/scenario3"}>
            <div className='bg-gradient-to-r p-2 rounded-3xl bg-clip-border border-2 from-green-400 to-cyan-400'>
              <span className='w-full rounded-xl p-1 px-2 bg-white hover:bg-gradient-to-r from-green-400 to-cyan-400 hover:text-white'>Scenario 3: Finding a Restaurant.</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Home