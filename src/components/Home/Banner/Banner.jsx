import BannerPhoto from "../../../assets/products/watch-prod-3.webp";
const Banner = () => {
  return (
    <>
      <section className="container mx-auto">
        <div className="grid grid-cols-2 ">
          <div className=" p-4 flex items-center">
            <div className="px-5">
              <h1 className="text-6xl">Welcome to Website</h1>
              <p className="mt-4 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nam
                architecto optio eius illo suscipit maiores dolorum, eveniet
                voluptate. Excepturi!
              </p>
              <button className="bg-gray-900 text-white px-4 py-2">
                Sale On
              </button>
            </div>
          </div>
          <div className=" flex justify-center  w-full content-center p-4">
            <img src={BannerPhoto} className="w-[60%]" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
