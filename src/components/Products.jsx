import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Products() {
    const [products,setProducts] = useState([])
    const [womanProducts, setWomanProducts] = useState([])

    const getManProducts = async () => {
        const data = await axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
        .then(res => setProducts(res.data.splice(0,8)))
    }
    const getWomanProducts = async () => {
        const data = await axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
        .then(res => setWomanProducts(res.data.splice(0,4)))
    }

    useEffect(() => {
        getManProducts()
        getWomanProducts()
    }, [])
    

  return (
    <div>
        <h1 className='font-thin text-2xl lg:text-3xl tracking-wider ml-4 lg:ml-36 mt-12 lg:mt-24 mb-10'>FEATURES PRODUCTS</h1>
        <div className='flex flex-col lg:gap-y-12'>
            <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-y-12 lg:gap-x-12 lg:mx-24 items-center'>
                {
                    products.map((products,key) => (
                        <ProductCard key={key} products={products} />
                    ))
                }
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 lg:gap-y-12 lg:gap-x-12 lg:mx-24 items-center'>
                {
                    womanProducts.map((products,key) => (
                        <ProductCard key={key} products={products} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Products