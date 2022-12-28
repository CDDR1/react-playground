import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="my-4 font-semibold text-3xl">Products</h1>
      <div className="grid grid-cols-4 gap-10">
        {loading && "Loading..."}
        {
          products.map(product => <ProductCard data={product} key={crypto.randomUUID()} id={product.id} />)
        }
      </div>
    </div>
  );
};

export default Products;
