import {createContext, useState} from "react";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (productPicture, productName, productPrice) => {
    setCartProducts(prevState => [...prevState, {productPicture, productName, productPrice}]);
    setTotalPrice(totalPrice += productPrice)
  };

  return (
    <ShoppingCartContext.Provider value={{ cartProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContext;