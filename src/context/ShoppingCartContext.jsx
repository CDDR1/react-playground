import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (productPrice) => {
    setTotalPrice((prevPrice) => prevPrice + productPrice);
  };

  const deleteProductFromCart = (productToDelete) => {
    // TODO: Try to combine these two methods into a single reduce method.
    const productsCopy = cartProducts.map((product) => product);
    const updatedProducts = productsCopy.filter((product) => product.id !== productToDelete.id);
    setCartProducts(updatedProducts);
    updateTotalPrice(-productToDelete.price * productToDelete.quantity);
  };

  const decrementProductQuantity = (productToRemove) => {
    if (productToRemove.quantity === 1) {
      deleteProductFromCart(productToRemove);
    } else {
      const updatedProducts = cartProducts.map((product) => {
        if (product.id === productToRemove.id) {
          return { ...product, quantity: --product.quantity };
        } else {
          return { ...product };
        }
      });
      setCartProducts(updatedProducts);
      updateTotalPrice(-productToRemove.price);
    }
  };

  const incrementProductQuantity = (productToIncrement) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === productToIncrement.id) {
        return { ...product, quantity: ++product.quantity };
      } else {
        return { ...product };
      }
    });

    setCartProducts(updatedCartProducts);
    updateTotalPrice(productToIncrement.price);
  };

  const addToCart = (productId, productPicture, productName, productPrice) => {
    const product = cartProducts.find((product) => product.id === productId);
    if (!product) {
      setCartProducts((prevState) => [...prevState, { id: productId, image: productPicture, name: productName, price: productPrice, quantity: 1 }]);
      updateTotalPrice(productPrice);
    }
  };

  return <ShoppingCartContext.Provider value={{ cartProducts, totalPrice, addToCart, incrementProductQuantity, decrementProductQuantity, deleteProductFromCart }}>{children}</ShoppingCartContext.Provider>;
};

export default ShoppingCartContext;
