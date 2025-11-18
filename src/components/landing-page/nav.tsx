import { Outlet } from "react-router";
import cart from "@/assets/cart.svg";
import profile from "@/assets/profile.svg";
import search from "@/assets/search.svg";
import menu from "@/assets/menu.svg";
import searchMobile from "@/assets/search_mobile.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router";
export default function Nav() {
  // menu rendering
  const [ismenuopen, setIsMenuOpen] = useState(false);
  const toogleMenu = () => setIsMenuOpen(!ismenuopen);
  // hide scroll when rendering
  useEffect(() => {
    document.body.style.overflow = ismenuopen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ismenuopen]);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  // cart rendering
  const [iscartopen, setIsCartOpen] = useState(false);
  const toogleCart = () => setIsCartOpen(!iscartopen);
  return (
    <>
      <header className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 flex items-center gap-4 md:gap-12">
        {/* menu */}
        <nav className="md:hidden relative">
          <img
            className="block cursor-pointer"
            src={menu}
            alt=""
            onClick={toogleMenu}
          />
        </nav>
        {/* condtional rendering */}
        {ismenuopen && (
          <div className="fixed inset-0  bg-opacity-50 z-50">
            <div
              className="absolute  backdrop-blur-xl top-0 right-0 w-full h-full bg-white/10 shadow-lg"
              style={{
                transform: ismenuopen ? "translateX(0)" : "translateX(-100%)",
              }}
            >
              <div className="p-6">
                {/* Button to close the menu and go back to main page */}
                <div className="border-b border-slate-900">
                  <button
                    onClick={closeMenu}
                    className=" text-2xl text-black cursor-pointer ml-79 pb-3"
                  >
                    &times;
                  </button>
                </div>
                {/* Navigation Links */}
                <nav className="mt-5">
                  <ul className="space-y-3 text-lg">
                    <li>
                      <Link to="#">Shop</Link>
                    </li>
                    <li>
                      <Link to="#">On Sale</Link>
                    </li>
                    <li>
                      <Link to="#">New Arrivals</Link>
                    </li>
                    <li>
                      <Link to="#">Brands</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        )}
        <h1 className="text-2xl font-bold md:text-4xl md:font-extrabold">
          SHOP.CO
        </h1>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-4 font-semibold">
            <li>
              <Link to="#">Shop</Link>
            </li>
            <li>
              <Link to="#">On Sale</Link>
            </li>
            <li>
              <Link to="#">New Arrivals</Link>
            </li>
            <li>
              <Link to="#">Brands</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 ms-auto lg:ms-0 lg:grow">
          <form className="lg:grow">
            <div className="relative flex items-center rounded-3xl lg:ps-4 focus-within:outline  bg-[#F0F0F0] ">
              <div className="static lg:absolute">
                <img src={search} alt="" className="hidden lg:block" />
                <img src={searchMobile} alt="" className="lg:hidden" />
              </div>
              <input
                type="text"
                className="hidden lg:block ps-8 pe-4 py-3 w-full outline-none"
                placeholder="Search for products..."
              />
            </div>
          </form>
          <div className="flex items-center gap-4">
            <img
              src={cart}
              alt=""
              onClick={toogleCart}
              className="cursor-pointer"
            />

            {iscartopen && (
              <div className="absolute backdrop-blur-xl top-15 right-10 rounded-2xl md:top-20 md:right-10 md:w-[23%] h-auto bg-white/10 border border-slate-500 ">
                <div className="px-4 py-2">
                  <h4 className="text-black md:text-xl font-bold border-b border-slate-500 pb-2 mb-2 md:mb-4">cart</h4>
                <p className="text-center text-sm mb-2 md:mb-4">your cart is empty</p>
                </div>
              </div>
            )}
            <button>
              <img src={profile} alt="" />
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}
