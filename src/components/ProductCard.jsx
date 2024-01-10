import React, { useState } from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { addCart } from '../redux/features/basket/basketSlice'

function ProductCard(products) {
  const basket = useSelector((state) => state.basket)
  const dispatch = useDispatch(addCart)
    console.log(basket)
  return (
    <div className='flex flex-col h-[450px] w-[300px]  items-center gap-y-2'>
        <img src={products.products.image} className='border-2 border-black rounded-xl w-[200px] h-[200px] mt-4 cursor-pointer hover:scale-95 duration-500' />
        <h1 className='font-thin text-[15px] mt-2'>{products.products.category}</h1>
        <h1 className='font-bold w-[200px] text-[12px] text-center'>{products.products.title}</h1>
        <h5 className='text-xl text-green-600'>{products.products.price}$</h5>
        <button onClick={() => dispatch(addCart(products))} className='bg-black text-[#e7dcd3] p-2 rounded-xl mt-2 '>Add to Cart</button>
    </div>
  )
}

export default ProductCard