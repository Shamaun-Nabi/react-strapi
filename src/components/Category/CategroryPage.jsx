import Product from "../Shop/Product/ProductCard";

const CategroryPage = () => {
  return (
    <section className="text-center container mx-auto">
      <h1 className="text-3xl my-4">Category Title</h1>
      <div className="grid grid-cols-4 gap-3">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default CategroryPage;
