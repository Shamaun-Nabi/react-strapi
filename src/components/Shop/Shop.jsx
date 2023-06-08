import React from "react";
import Product from "./Product/ProductCard";

const Shop = () => {
  return (
    <section className="container mx-auto ">
      <h1 className="text-center text-3xl my-4">All Products</h1>
      <div className="grid grid-cols-4 gap-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Shop;
