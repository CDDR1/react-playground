import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
