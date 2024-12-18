import React from 'react'
import pc from '../../public/p1.jpg'
import { FaStar } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import like from '../assets/like.png'
import icon from '../assets/icon.png'
import Img from './Img'

const ProductsItem = () => {
  return (
    <div className='relative px-6 py-4 group'>
    <p className='flex items-center gap-1 py-1'><TiTick className='w-5 h-5 rounded-full bg-[#78A962] text-white'/> <span className='font-common font-normal text-[#78A962] text-sm'>in stock</span></p>
    <div className='w-[150px] h-[150px]'>
        <img className='w-full h-full object-cover' src={pc} alt="" />
    </div>
    <div className='flex gap-2.5'>
        <div className='flex gap-.5 text-sm text-yellow-500'>
        <FaStar />
        <FaStar />  
        <FaStar />  
        <FaStar />  
        <FaStar />  
        </div>
        <div>
            <p className='font-common font-normal text-[#A2A6B0] text-[12px]'>Reviews <span>(5)</span></p>
        </div>
    </div>
    <h1 className='w-[185px] font-common font-normal text-black text-sm py-2'>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h1>
    <div>
        <p className='font-common font-semibold text-[#666666] text-sm line-through'>$499.00</p>
        <p className='font-common font-semibold text-black text-lg'>$499.00</p>
    </div>
    <div className='flex items-center gap-2.5 mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500'>
        <Link className='flex items-center gap-2 px-5 py-2 border border-[#0156FF] font-common font-semibold text-sm text-[#0156FF] rounded-full hover:bg-[#0156FF] hover:text-white transition-all duration-300'><LiaShoppingCartSolid className='text-xl' /><span>Add To Cart</span></Link>
    </div>
    <div className='absolute top-4 right-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500'>
        <div>
           <Link><Img src={like} /></Link>
        </div>
        <div>
            <Link><Img src={icon} /></Link>
        </div>
    </div>
</div>
  )
}

export default ProductsItem