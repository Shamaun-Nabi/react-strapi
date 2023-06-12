import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
// import Category from "./components/Category/Category";
import Product from "./components/Shop/Product/ProductCard";
import Header from "./components/Header/Header";
import AppContext from "./utils/context";
import CategroryPage from "./components/Category/CategroryPage";
import SingleProduct from "./components/Shop/Product/SingleProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<CategroryPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
        </AppContext>
      </BrowserRouter>
    </>
  );
};

export default App;
