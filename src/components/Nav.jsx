import React from 'react';
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className='bg-gray-900 text-white p-3'>
      <ul className='flex justify-around'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;