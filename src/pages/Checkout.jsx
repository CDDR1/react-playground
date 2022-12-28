import React from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cartProducts } = useContext(ShoppingCartContext);
  const { totalPrice } = useContext(ShoppingCartContext);

  return (
    <div className="p-4">
      <h1 className="my-4 font-semibold text-3xl">Checkout</h1>
      <div>
        {console.log("cart products:", cartProducts)}
        {cartProducts.map((product) => {
          return (
            <div key={product.id} id={product.id}>
              <div>
                <img src={product.image} alt={product.name} />
              </div>
              <span className="block">{product.name}</span>
              <span className="block">{product.price}</span>
            </div>
          );
        })}
      </div>
      <div>
        <strong>Total price: {totalPrice}</strong>
      </div>
    </div>
  );
};

export default Checkout;
