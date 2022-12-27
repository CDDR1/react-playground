import React from "react";
import { Link } from "react-router-dom";
import { FaTshirt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="bg-gray-900 text-white p-3">
      <ul className="flex justify-around">
        <li className="flex gap-2 items-center">
          <Link to="/">Products</Link>
          <FaTshirt className="" />
        </li>
        <li className="flex gap-2 items-center">
          <Link to="/checkout">Checkout</Link>
          <BsFillCartFill />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
