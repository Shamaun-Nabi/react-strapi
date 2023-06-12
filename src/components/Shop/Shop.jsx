import React from "react";
import ProductCard from "./Product/ProductCard";

const Shop = ({ products }) => {
  // console.log(products);
  return (
    <section className="container mx-auto ">
      <h1 className="text-center text-3xl my-4">All Products</h1>
      <div className="grid grid-cols-4 gap-3">
        {products?.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
