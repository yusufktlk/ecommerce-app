import React, { useState } from 'react'
import {AiFillShopping} from 'react-icons/ai'
import Cart from './Cart'

function Navbar() {
    const [open,setOpen] = useState(false)
    const [navbar,setNavbar] = useState("")
    const [text,setText] = useState('black')

    const changeBackground = () => {
        if(window.scrollY >= 100){
            setNavbar("#1C1C1D")
        }else{
            setNavbar("")
        }
    }

    const changeText = () => {
        if(window.scrollY >= 100){
            setText("bisque")
        }else{
            setText("")
        }
    }

    window.addEventListener('scroll', changeBackground)
    window.addEventListener('scroll',changeText)

  return (
    <div>
        <div style={{background: navbar, color: text}} className='text-black font-bold flex justify-between duration-500 w-full p-4 items-center lg:text-2xl fixed z-50'>
            <div className='flex lg:gap-x-10 gap-x-6 items-center ml-4 lg:ml-20'>
                <h1 className='text-2xl lg:text-4xl relative'>YuStore</h1>
                <h2 className='lg:ml-12 lg:text-xl'>Man</h2>
                <h2 className='lg:ml-10 lg:text-xl'>Woman</h2>
                <h2 className='lg:ml-5 lg:text-xl'>Other Stuffs</h2>
            </div>

            <div>
                <AiFillShopping size={32} onClick={() => setOpen(!open)}  className='cursor-pointer lg:mr-36 '/>
            </div>
        </div>
        {open && <Cart />}
    </div>
  )
}

export default Navbar