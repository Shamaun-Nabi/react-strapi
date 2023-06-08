import Category from "../Category/Category";
import SingleProduct from "../Shop/Product/SingleProduct";
import Shop from "../Shop/Shop";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <main>
      {/* <SingleProduct/> */}
      <Banner />
      <Category />
      {/* <CategroryPage/> */}
      <Shop />
    </main>
  );
};

export default Home;
