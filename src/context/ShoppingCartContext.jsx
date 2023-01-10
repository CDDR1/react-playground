import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteItemFromCart = (productToDelete) => {
    setCartProducts(cartProducts.filter((product) => product.id !== productToDelete.id));
  }
  
  const removeFromCart = (productToRemove) => {
    if (productToRemove.quantity === 1) {
      deleteItemFromCart(productToRemove);
    } else {
      productToRemove.quantity--;
    }
    setTotalPrice((prevState) => (prevState -= productToRemove.price));
  };

  const addToCart = (productId, productPicture, productName, productPrice) => {
    const product = cartProducts.find((product) => product.id === productId);
    if (product) {
      product.quantity++;
    } else {
      setCartProducts((prevState) => [...prevState, { id: productId, image: productPicture, name: productName, price: productPrice, quantity: 1 }]);
    }
    setTotalPrice((prevState) => (prevState += productPrice));
  };

  return <ShoppingCartContext.Provider value={{ cartProducts, totalPrice, addToCart, removeFromCart, deleteItemFromCart }}>{children}</ShoppingCartContext.Provider>;
};

export default ShoppingCartContext;
