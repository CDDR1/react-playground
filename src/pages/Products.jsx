import React from "react";
import ProductCard from "../components/ProductCard";

const Products = ({ products, isLoading }) => {
  return (
    <div className="p-4">
      <h1 className="my-4 font-semibold text-3xl">Products</h1>
      <div className="grid grid-cols-4 gap-10">
        {isLoading && "Loading..."}
        {
          products.map(product => <ProductCard data={product} key={product.id} id={product.id} />)
        }
      </div>
    </div>
  );
};

export default Products;
