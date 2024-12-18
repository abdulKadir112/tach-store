import React from 'react'
import AllProductsCatd from '../layer/AllProductsCatd'
import Container from '../layer/Container'
import ProductsItem from '../layer/ProductsItem'
import { Link } from 'react-router-dom'

const CustomeBuilds = () => {
  return (
    <div>
       <Container>
        <div>
          <div className='flex items-center gap-6 pb-5'>
            <li className='list-none'>
                <Link className='font-common font-semibold text-base text-black underline underline-offset-8 decoration-[#0156FF] decoration-2'>MSI Infinute Series</Link>
            </li>
            <li className='list-none'>
                <Link className='font-common font-semibold text-base text-black hover:underline underline-offset-8 decoration-[#0156FF] decoration-2'>MSI Triden</Link>
            </li>
            <li className='list-none'>
                <Link className='font-common font-semibold text-base text-black hover:underline underline-offset-8 decoration-[#0156FF] decoration-2'>MSI GL Series</Link>
            </li>
            <li className='list-none'>
                <Link className='font-common font-semibold text-base text-black hover:underline underline-offset-8 decoration-[#0156FF] decoration-2'>MSI Nightblade</Link>
            </li>
          </div>
        </div>
       <div className={"flex"}>
       <AllProductsCatd className={"allP3"} title={"Desktops"}/>
        <ProductsItem/>
        <ProductsItem/>
        <ProductsItem/>
        <ProductsItem/>
        <ProductsItem/>
       </div>

        </Container> 
    </div>
  )
}

export default CustomeBuilds