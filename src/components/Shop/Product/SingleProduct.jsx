import React from "react";
import ProdImage from "../../../assets/products/watch-prod-1.webp";
import RelatedProducts from "./RelatedProducts";

const SingleProduct = () => {
  return (
    <>
      <section className="container mx-auto my-7">
        <div className="card w-full p-20 card-side bg-base-100 shadow-xl">
          <figure>
            <img src={ProdImage} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product Name</h2>
            <p>Price</p>
            <p className="w-full">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus adipisci a nulla commodi sunt vero, tempora architecto
              molestias doloribus sequi rerum voluptatum officiis, labore
              laudantium itaque? Totam dolorum provident labore.
            </p>
            <p className="text-slate-400">
              Category: <span>smartphone</span>
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts />
    </>
  );
};

export default SingleProduct;
