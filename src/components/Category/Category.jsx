import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <section className="text-center container mx-auto">
        <h1 className="text-3xl mx-4"> Select A Category</h1>
        <div className="flex justify-center gap-10 p-10">
          <Link to={"/category/headphones"}  className="text-xl font-bold hover:text-rose-400 transition-all duration-100" href="">Headphones</Link>
          <a  className="text-xl font-bold hover:text-rose-400 transition-all duration-100" href="">SmartWatch</a>
          <a className="text-xl font-bold hover:text-rose-400 transition-all duration-100"  href="">Speakers</a>
          <a  className="text-xl font-bold hover:text-rose-400 transition-all duration-100" href="">Earpods</a>
        </div>
      </section>
    </>
  );
};

export default Category;
