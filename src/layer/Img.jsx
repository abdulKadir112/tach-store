import React from 'react'
import { Link } from 'react-router-dom'

const Img = ({src , className}) => {
  return (
    <div>
       <Link className='inline-block'> 
       <img className={`block ${className}`} src={src} alt={"src"} />
       </Link>
    </div>
  )
}

export default Img