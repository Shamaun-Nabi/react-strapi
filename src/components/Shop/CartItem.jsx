import cartImage from "../../assets/products/watch-prod-1.webp";
function CartItem() {
  return (
    <div className="container mx-auto bg-slate-400 text-white p-2 my-2">
      <div className=" w-full flex justify-around items-center">
        <img className="object-contain w-12" src={cartImage} alt="" />
        <h1 className="text-xs font-semibold">Product Name</h1>
        <p className="cursor-pointer">Clear</p>
      </div>
      <div className="flex justify-center">
        <span className="px-4 border border-red-500 cursor-pointer">+</span>
        <span className="px-3">5</span>
        <span className="px-4 border border-red-500 cursor-pointer">-</span>
      </div>
    </div>
  );
}

export default CartItem;
