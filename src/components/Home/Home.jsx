import Category from "../Category/Category";
import SingleProduct from "../Shop/Product/SingleProduct";
import Shop from "../Shop/Shop";
import Banner from "./Banner/Banner";
import { fetchData } from "../../utils/apiFetch";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    fetchData("/api/categories?populate=*");
  };

  return (
    <main>
      {/* <SingleProduct/> */}
      <Banner />
      {/* {console.log(console.log("hello",import.meta.env.VITE_STRAPI_KEY))} */}
      <Category />
      {/* <CategroryPage/> */}
      <Shop />
    </main>
  );
};

export default Home;
