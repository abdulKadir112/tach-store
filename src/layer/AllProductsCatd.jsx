import React from 'react'
import { Link } from 'react-router-dom'

const AllProductsCatd = ({className, title}) => {
  return (
    <div className={`relative w-[233px] h-[350px] ${className}`}>
       <h2 className='w-14 font-common font-bold text-white text-[22px] leading-[130%] flex justify-center items-center text-center'>{title}</h2>
       <Link className='absolute bottom-8 left-1/2 -translate-x-1/2 font-common font-normal text-white text-[13px] leading-[115%] underline cursor-pointer'>See All Products</Link>
    </div>
  )
}

export default AllProductsCatd