import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" flex justify-between mx-10 text-2xl mt-4">
      <h1>Header</h1>
      <div className='flex-end flex gap-16'>
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header