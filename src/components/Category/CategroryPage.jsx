import { useParams } from "react-router-dom";
import ProductCard from "../Shop/Product/ProductCard";
import { fetchCategories } from "../../utils/apiFetch";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const CategroryPage = () => {
  const { id } = useParams();
  const [categoryItem, setCatItem] = useState([]);

  useEffect(() => {
    getCategoryWiseData();
  }, []);

  const getCategoryWiseData = () => {
    fetchCategories(
      `api/products?populate=*&[filters][categories][id]=${id}`
    ).then((res) => {
      setCatItem(res.data);
      // console.log("data from category's", res.data);
    });
  };

  console.log(id);
  return (
    <section className="text-center container mx-auto">
      <div className="grid grid-cols-4 gap-3">
        {categoryItem.map((catItem, index) => (
          <ProductCard key={index} product={catItem} />
        ))}
      </div>
    </section>
  );
};

export default CategroryPage;
