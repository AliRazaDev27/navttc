import { Link, Outlet } from "react-router";
import ModelCart from "./model-cart";

export default function Header(){
  return(
    <>
    <header className="w-full flex items-center justify-between my-4">
      <p className="text-white font-semibold text-3xl">
        <Link to="/">Shopwave</Link>
      </p>
      <nav className="text-white text-lg">
        <ul className="flex items-center gap-4">
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
          <ModelCart/>
        <div className="flex items-center justify-center bg-green-600 rounded-full text-white font-bold size-14">AR</div>
      </div>
    </header>
    <Outlet/>
    </>
  )
}