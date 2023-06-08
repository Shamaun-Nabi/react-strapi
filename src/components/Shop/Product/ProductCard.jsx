const ProductCard = () => {
  return (
    <>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="">
          <img
            className="w-[100%]"
            src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title overflow-hidden whitespace-nowrap text-ellipsis">
            Lorem ipsum dolor sit ame consectetur adipisicing elit. Amet,
            dolore.
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
