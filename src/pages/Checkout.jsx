import React from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cartProducts } = useContext(ShoppingCartContext);
  const { totalPrice } = useContext(ShoppingCartContext);

  return (
    <div className="p-4">
      <h1 className="my-4 font-semibold text-3xl">Checkout</h1>
      <div className="grid grid-cols-2">
        <div>
          {cartProducts.map((product) => {
            return (
              <div key={product.id} id={product.id} className="flex gap-4 my-8">
                <div className="w-28">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="block">{product.name}</span>
                    <span className="block">Price: ${product.price}</span>
                  </div>
                  <span className="block">Quantity: {product.quantity}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <strong className="block text-center">Total price: ${totalPrice.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
