import hero from "@/assets/hero.png"
import { Link } from "react-router"
export default function Homepage(){
  return(
    <main>
      <section className="w-full sm:bg-[url('/src/assets/hero-desktop.png')] bg-contain bg-right bg-no-repeat  bg-[#F2F0F1]">
        <div className="sm:ms-8 md:ms-14 lg:md-20 px-4 border border-red-500 sm:w-[50%] md:px-0 py-8 md:py-16  flex flex-col justify-center gap-3 md:gap-4">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <p>FIND CLOTHES</p>
            <p>THAT MATCHES</p>
            <p>YOUR STYLE</p>
          </div>
          <p className="text-gray-600 max-w-lg">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <div>
          <Link to="#" className="block text-center w-full max-w-md mx-auto sm:mx-0 sm:w-fit bg-black text-white px-10 py-2.5 rounded-4xl">Shop Now</Link>
          </div>
          <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4">
            <li>
              <p className="text-4xl font-bold">200+</p>
              <p className="text-gray-700">Internation Brands</p>
            </li>
            <li>
              <p className="text-4xl font-bold">2,000+</p>
              <p className="text-gray-700">High Quality Products</p>
            </li>
            <li>
              <p className="text-4xl font-bold">30,000+</p>
              <p className="text-gray-700">Happy Customers</p>
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <img src={hero} alt="" className="w-full"/>
        </div>
      </section>
      </main>
  )
}