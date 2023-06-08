import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <div>
      <section className="container mx-auto my-7">
        <h1 className="text-2xl">RelatedProduct</h1>
        <div className="grid grid-cols-4 gap-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
};

export default RelatedProducts;
