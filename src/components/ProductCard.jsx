import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { useContext } from "react";

const ProductCard = ({ data }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  return (
    <div className="flex flex-col items-center gap-6 h-80 shadow-lg">
      <div className="product-card-img flex items-center h-52">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="w-full px-2">
        <span className="block">{data.title}</span>
        <div className="flex justify-between">
          <span className="block">{`$${data.price}`}</span>
          <button onClick={() => addToCart(data.id, data.image, data.title, data.price)}>
            <BsFillBagFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
