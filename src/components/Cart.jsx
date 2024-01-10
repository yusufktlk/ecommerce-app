import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/features/basket/basketSlice'


function Cart() {
  const basket = useSelector((state) => state.basket.basket)
  const totalQuantity = useSelector((state) => state.basket.totalQuantity)
  const totalPrice = useSelector((state) => state.basket.totalPrice)

  const dispatch = useDispatch(clearCart)

  return (
    <div className='bg-black w-[400px] overflow-hidden overflow-y-auto h-[500px] fixed  z-40 mt-14 right-0 rounded-l-xl  '>
        <hr className='border-black border-2' />
        <h1 className='text-center text-lg font-bold mt-4 underline mb-2 '>Cart</h1>
        <div className='flex flex-col gap-y-4 items-center'>
            {
              basket.map((basket,key) => (
                <div key={key} className='flex justify-between gap-x-4 mx-2 items-center text-[12px] text-left w-[350px] bg-slate-800 p-2 rounded-xl'>
                  <h1 className='w-32'>{basket.title}</h1>
                  <h1 className='text-red-600 text-sm'>{basket.price} $</h1>
                  <h1>Unit: {basket.quantity}</h1>
                  <img src={basket.image} className='w-16 h-16 rounded-lg' />
                </div>
              ))
            }
        </div>
        <hr className='border-gray-400 mt-5' />
        <div className='text-sm text-center font-bold mb-4 mt-4'>
            <h5>Total Units: {totalQuantity}</h5>
            <h5>Total Price: <span className='text-green-500'>{totalPrice.toFixed(2)}$</span> </h5>
            <div className='flex justify-between mx-8'>
              <button className='bg-[#1C1C1D] text-white rounded-xl w-32 h-8 items-center mt-2 hover:scale-110 duration-500 '>Buy</button>
              <button onClick={() => dispatch(clearCart())} className='bg-[#1C1C1D] text-white rounded-xl w-32 h-8 items-center mt-2 hover:scale-110 duration-500 '>Delete Items</button>
            </div>
        </div>
    </div>
  )
}

export default Cart