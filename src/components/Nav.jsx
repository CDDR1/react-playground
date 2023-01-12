import React from "react";
import { Link } from "react-router-dom";
import { FaTshirt } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { useContext } from "react";

const Nav = () => {
  const {cartProducts} = useContext(ShoppingCartContext);

  const totalQuantity = cartProducts.reduce((acc, product) => acc + product.quantity, 0);
 
  return (
    <nav className="bg-gray-900 text-white p-3 sticky top-0">
      <ul className="flex justify-around">
        <li className="flex gap-2 items-center">
          <Link to="/">Products</Link>
          <FaTshirt />
        </li>
        <li className="flex gap-2 items-center">
          <Link to="/checkout">Checkout</Link>
          <BsFillCartFill />
          <span>{totalQuantity}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
