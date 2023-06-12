import Category from "../Category/Category";
import SingleProduct from "../Shop/Product/SingleProduct";
import Shop from "../Shop/Shop";
import Banner from "./Banner/Banner";
import { fetchData } from "../../utils/apiFetch";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchData("/api/categories?populate=*").then((res) => {
      setCategories(res);
      // console.log(res);
    });
  };
  const getProducts = () => {
    fetchData("/api/products?populate=*").then((res) => {
      setProducts(res);
      // console.log(res);
    });
  };

  // console.log(categories);
  // console.log(products);
  return (
    <main>
      {/* <SingleProduct/> */}
      <Banner />
      {/* {console.log(console.log("hello",import.meta.env.VITE_STRAPI_KEY))} */}
      <Category categories={categories} />
      {/* <CategoryPage/> */}
      <Shop products={products} />
    </main>
  );
};

export default Home;
