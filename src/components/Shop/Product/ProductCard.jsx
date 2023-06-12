import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card  bg-base-100 shadow-xl my-5 cursor-pointer"
        onClick={() => navigate(`/product/${product?.id}`)}
      >
        <figure className="">
          <img
            className="w-[100%]"
            src={
              import.meta.env.VITE_APP_RUN +
              product?.attributes?.image?.data?.attributes?.url
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <span>
            {product?.attributes?.categories?.data[0]?.attributes?.title}
          </span>
          <h2 className="card-title overflow-hidden whitespace-nowrap text-ellipsis">
            {product?.attributes?.name}
          </h2>
          <p>{product?.attributes?.price}</p>
          <p>{product?.attributes?.desc}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
