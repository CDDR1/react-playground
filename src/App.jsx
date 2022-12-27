import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
