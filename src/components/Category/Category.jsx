import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  // console.log(categories?.data);
  return (
    <>
      <section className="text-center container mx-auto">
        <h1 className="text-3xl mx-4"> Select A Category</h1>
        <div className="flex justify-center gap-10 p-10">
          {categories?.data.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category?.id}`}
              className="text-xl font-bold hover:text-rose-400 transition-all duration-100"
              href=""
            >
              {category?.attributes?.title}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Category;
