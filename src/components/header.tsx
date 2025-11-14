import { Outlet } from "react-router";
import cart from "@/assets/cart.svg"
import profile from "@/assets/profile.svg"
import search from "@/assets/search.svg"
import menu from "@/assets/menu.svg"
import searchMobile from "@/assets/search_mobile.svg"

export default function Header(){
  return(
    <>
    <header className="w-full max-w-6xl mx-auto my-6 flex items-center gap-4 md:gap-12 px-6">
      <nav className="md:hidden">
        <img src={menu} alt="" />
      </nav>
      <h1 className="text-2xl font-bold md:text-4xl md:font-extrabold">SHOP.CO</h1>
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-4 font-semibold">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </nav>
      <form className="md:grow ms-auto md:ms-0">
      <div className="relative flex items-center rounded-3xl ps-4 focus-within:outline  bg-[#F0F0F0] ">
        <div className="static md:absolute">
          <img src={search} alt="" className="hidden md:block" />
          <img src={searchMobile} alt="" className="md:hidden"/>
        </div>
        <input type="text" className="hidden md:block ps-8 pe-4 py-3 w-full outline-none" placeholder="Search for products..." />
      </div>
      </form>
      <div className="flex items-center gap-4">
        <button>
          <img src={cart} alt="" />
        </button>
        <button>
          <img src={profile} alt="" />
        </button>
      </div>
    </header>
    <Outlet/>
    </>
  )
}