import React, { useState } from 'react'
import Container from '../layer/Container'
import { Link } from 'react-router-dom'
import Img from '../layer/Img'
import NavLi from '../layer/NavLi'
import { IoClose, IoSearch } from 'react-icons/io5'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import navLogo from '../../public/navbar/navLogo.png'

const Navbar = () => {

    const [show, setShow] = useState(true)

    return (
        <div className='bg-white'>
            <Container className={"relative flex justify-between py-7"}>
                <div className='flex items-center gap-8'>
                    <Link to={'/'}>
                        <Img src={navLogo} />
                    </Link>
                    <ul className='flex gap-6'>
                        <NavLi listItem={"Laptops"} />
                        <NavLi listItem={"Desktop PCs"} />
                        <NavLi listItem={"Networking Devices"} />
                        <NavLi listItem={"Printers & Scanners"} />
                        <NavLi listItem={"PC Parts"} />
                        <NavLi listItem={"All Other Products"} />
                        <NavLi listItem={"Repairs"} />
                        <div>
                            <Link className='font-common font-semibold text-sm text-[#0156FF] border border-[#0156FF] px-7 py-2 rounded-full hover:bg-[#0156FF] hover:text-white transition-all duration-300'>Our Deals</Link>
                        </div>
                        {/* search */}
                        <div className={`absolute top-1/2 -translate-y-1/2`}>
                            <div className={`relative right-0 h-12 bg-slate-200 rounded-full px-4 transition-all duration-300 ${show ? "w-0 opacity-0 invisible" : " w-[1126px] opacity-100 visible"}`}>
                                <input className='w-full h-full outline-none pr-5 bg-transparent' type="text" placeholder='Search entiere store here...' />
                                <Link className='absolute top-1/2 -translate-y-1/2 right-3'>
                                    <IoSearch className='text-xl' />
                                </Link>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className='flex items-center gap-7'>
                    <Link onClick={()=> setShow(!show)}>
                        <IoSearch className={`text-xl ${show ? "block" : "hidden"}`} />
                        <IoClose className={`text-xl ${show ? "hidden" : "block"}`} />
                    </Link>
                    <Link>
                        <LiaShoppingCartSolid className='text-xl' />
                    </Link>
                    <div className='w-9 h-9 bg-slate-500 rounded-full'>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar