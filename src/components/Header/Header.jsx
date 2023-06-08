import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import cartImage from "../../assets/products/watch-prod-1.webp";
import CartItem from "../Shop/CartItem";

const Header = () => {
  return (
    <header className="bg-base-100 shadow-lg">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-10 mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>
                  <a>Homepage</a>
                </Link>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end flex justify-center  ">
          <button
            className="btn btn-ghost btn-circle "
            onClick={() => window.my_modal_4.showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* You can open the modal using ID.showModal() method */}
          <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box w-11/12 max-w-5xl">
              <input
                type="text"
                placeholder="Search Here"
                className="input input-bordered w-full "
              />

              <div className="w-full bg-fuchsia-300 p-4 flex my-2">
                <img className="w-20" src={cartImage} alt="" />
                <div>
                  <h4>Product Name</h4>
                  <h4>Price</h4>
                  <p>des</p>
                </div>
              </div>
              <div className="modal-action">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
          <button className="text-xl">
            <AiOutlineHeart />
          </button>

          <div>
            <label
              tabIndex={0}
              htmlFor="my-drawer-4"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
          </div>

          {/* Drawer */}
          <div className="drawer drawer-end z-10">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{/* Page content here */}</div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <div className="menu p-4 w-80 h-full bg-base-200 text-base-content relative ">
                {/* Sidebar content here */}
                <CartItem />
                <CartItem />
                <CartItem />

                <div className="absolute bottom-0 w-full p-2  ">
                  <div className="flex justify-between p-5 items-center">
                    <h1 className="text-xl font-semibold">Subtotal</h1>
                    <p className="font-bold">14000 tk</p>
                  </div>

                  <div className="w-fulbg-slate-400 ">
                    <button className="text-center btn btn-secondary">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
