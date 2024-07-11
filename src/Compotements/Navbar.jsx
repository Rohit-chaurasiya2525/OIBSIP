
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex bg-gray-100 text-black py-5 font-bold justify-around text-lg '>
      <Link to = "/">ECOMPLUS</Link>
      <ul className='flex justify-center items-center gap-20'>
        <li> <Link to = "/about">About us </Link></li>
        <li> <Link to = "/contact">Contact us  </Link></li>
        <li><Link to = "/help">Help Center</Link></li>
      </ul>
    </div>
  )
}

export default Navbar