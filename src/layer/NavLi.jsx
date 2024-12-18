import React from 'react'
import { Link } from 'react-router-dom'

const NavLi = ({listItem}) => {
    return (
        <div>
            <li>
                <Link className='font-common font-semibold text-sm text-black'>{listItem}</Link>
            </li>
        </div>
    )
}

export default NavLi