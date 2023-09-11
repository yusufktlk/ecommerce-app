import React from 'react'
import Products from '../components/Products'

function Home() {
  return (
    <>
      <div className='absolute text-[90px] right-44 top-64'>
        <h1>YUSTORE</h1>
        <button className='ml-24 w-[200px] hover:bg-[#1C1C1D] hover:text-[#E7DCD3] hover:font-thin hover:scale-105 duration-500 border-4 border-[#1C1C1D] rounded-xl text-5xl p-3 text-center'>Explore</button>
      </div>
      <div className='flex h-[750px] max-w-screen-md'>
        <img src="homeimg1.png" className='bg-cover w-[800px] opacity-85 ' />
        <img src="homeimg2.png" className='bg-cover w-[750px] opacity-85 ' />
      </div>

      <Products />
    </>
  )
}

export default Home