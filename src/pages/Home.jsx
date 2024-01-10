import React from 'react'
import Products from '../components/Products'

function Home() {
  return (
    <>
      <div className='absolute text-center lg:text-left text-3xl lg:text-[90px] right-32 lg:right-44 top-[500px] lg:top-64'>
        <h1>YUSTORE</h1>
        <button className='lg:ml-20 mt-2 lg:mt-20 w-60 h-14 lg:h-20 lg:w-[220px] hover:bg-[#1C1C1D] hover:text-[#E7DCD3] hover:font-thin hover:scale-105 duration-500 border-4 border-[#1C1C1D] rounded-xl lg:text-5xl lg:p-3 text-center'>Explore</button>
      </div>
      <div className='flex flex-col lg:flex-row lg:-[750px] h-screen lg:max-w-screen-md'>
        <img src="homeimg1.png" className='bg-cover h-[350px] lg:h-full lg:w-[800px]  opacity-85 ' />
        <img src="homeimg2.png" className='bg-cover h-[400px] lg:h-full lg:w-[750px] opacity-85 ' />
      </div>

      <Products />
    </>
  )
}

export default Home