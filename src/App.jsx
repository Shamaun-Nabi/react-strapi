import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import AppContext from "./utils/context";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </AppContext>
      </BrowserRouter>
    </>
  );
};

export default App;
