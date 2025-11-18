import { Link } from "react-router-dom";
import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { GoFilter } from "react-icons/go";
import Shirt1 from "/Frame 33.png";
import Shirt2 from "/Frame 34.png";
import Shirt3 from "/Frame 38.png";
import Shirt4 from "/Frame 35.png";
import Shirt5 from "/Frame 72.png";
import Shirt6 from "/Frame 73.png";
import Shirt7 from "/Frame 32.png";
import Shirt8 from "/Frame 70.png";
import Shirt9 from "/Frame 71.png";

export default function Category() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="flex gap-2 items-center w-full bg-white py-4 px-8 text-gray-600 text-sm">
        <p><Link to="#">Home</Link></p>
        <p><GoChevronRight /></p>
        <p className="text-black"><Link to="#">Casual</Link></p>
      </div>

      <div className="flex w-full bg-white px-8 relative">
        {showFilters && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
            onClick={() => setShowFilters(false)}
          />
        )}

        {/* Desktop Sidebar */}
        <aside className="w-64 h-full px-6 pb-6 pt-2 border border-gray-200 rounded-md hidden sm:block">
          <h2 className="text-lg font-semibold mb-2">Filters</h2>

          {/* Categories */}
          <div className="mb-6">
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><Link to="#">T-shirts</Link></li>
              <li><Link to="#">Shorts</Link></li>
              <li><Link to="#">Shirts</Link></li>
              <li><Link to="#">Hoodie</Link></li>
              <li><Link to="#">Jeans</Link></li>
            </ul>
          </div>

          {/* Price Slider */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price</h3>
            <input type="range" className="w-full" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Colors</h3>
            <div className="grid grid-cols-5 gap-2">
              <p className="w-6 h-6 bg-green-500 rounded-full cursor-pointer "></p>
              <p className="w-6 h-6 bg-red-500 rounded-full cursor-pointer "></p>
              <p className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer "></p>
              <p className="w-6 h-6 bg-orange-500 rounded-full cursor-pointer "></p>
              <p className="w-6 h-6 bg-sky-500 rounded-full cursor-pointer"></p>
              <p className="w-6 h-6 bg-blue-700 rounded-full cursor-pointer"></p>
              <p className="w-6 h-6 bg-purple-600 rounded-full cursor-pointer"></p>
              <p className="w-6 h-6 bg-pink-500 rounded-full cursor-pointer"></p>
              <p className="w-6 h-6 rounded-full cursor-pointer border"></p>
              <p className="w-6 h-6 bg-black rounded-full cursor-pointer"></p>
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2 text-gray-500 text-sm">
              <button className="px-3 py-1 bg-gray-100 border rounded-2xl" ><Link to="#">XX-Small</Link></button>
              <button className="px-3 py-1 bg-gray-100 border rounded-2xl "><Link to="#">X-Small</Link></button>
              <button className="px-3 py-1 bg-gray-100 border rounded-2xl"><Link to="#">Small</Link></button>
              <button className="px-3 py-1 bg-gray-100 border rounded-2xl"><Link to="#">Medium</Link></button>
              <button className="px-3 py-1 bg-black text-white border rounded-2xl"><Link to="#">Large</Link></button>
              <button className="px-3 py-1 bg-gray-100 border rounded-2xl"><Link to="#">X-Large</Link></button>
              <button className="px-3 py-1 bg-gray-100 border rounded-2xl"><Link to="#">XX-Large</Link></button>
              <button className="px-3 py-1 bg-gray-100 border rounded-2xl"><Link to="#">3X-Large</Link></button>
              <button className="px-3 py-1 bg-gray-100 border rounded-2xl"><Link to="#">4X-Large</Link></button>
            </div>
          </div>

          {/* Dress Style */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Dress Style</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li><Link to="#">Casual</Link></li>
              <li><Link to="#">Formal</Link></li>
              <li><Link to="#">Party</Link></li>
              <li><Link to="#">Gym</Link></li>
            </ul>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-lg mt-4">Apply Filter</button>
        </aside>

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 px-6 pb-6 pt-2 transition-transform duration-300 sm:hidden
            ${showFilters ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="text-right w-full py-2 text-gray-600"
            onClick={() => setShowFilters(false)}
          >
            ✕ Close
          </button>
          <h2 className="text-lg font-semibold mb-2">Filters</h2>
         
        </aside>

        {/* Products Section */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold"><Link to="#">Casual</Link></h2>
            <div className="flex gap-4 justify-between items-center">
              <p className="text-sm text-gray-500"><Link to="#">Showing 1-10 of 100 Products</Link></p>

              {/* MOBILE FILTER BUTTON */}
              <div
                className="sm:hidden cursor-pointer"
                onClick={() => setShowFilters(true)}
              >
                <GoFilter size={22} />
              </div>
            </div>
          </div>


          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt1} alt="shirt1" />
              <h3 className="font-medium mb-1">Gradient Graphic T-shirt</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐☆ (3.5)</p>
              <p className="font-semibold">$145</p>
            </div>

            <div className="p-4 rounded-xl ">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt2} alt="shirt2" />
              <h3 className="font-medium mb-1">Polo With Tipping Details</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐⭐☆ (4.5)</p>
              <p className="font-semibold">$180</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt3} alt="shirt3" />
              <h3 className="font-medium mb-1">Black Striped T-shirt</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐⭐⭐ (5.0/5)</p>
              <p className="font-semibold">$120</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt4} alt="shirt4" />
              <h3 className="font-medium mb-1">Sinny fit Jeans</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐☆ (3.5)</p>
              <p className="font-semibold">$240</p>
            </div>

            <div className="p-4 rounded-xl hover:shadow-md transition">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt5} alt="shirt5" />
              <h3 className="font-medium mb-1">Checkered Shirt</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐⭐☆ (4.5)</p>
              <p className="font-semibold">$180</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt6} alt="shirt6" />
              <h3 className="font-medium mb-1">Sleeve Striped T-shirt</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐⭐☆ (4.5)</p>
              <p className="font-semibold">$130</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt7} alt="shirt7" />
              <h3 className="font-medium mb-1">Vertical Striped Shirt</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐⭐⭐ (5.0/5)</p>
              <p className="font-semibold">$212</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt8} alt="shirt8" />
              <h3 className="font-medium mb-1">Courage Graphic T-shirt</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐⭐ (4.0)</p>
              <p className="font-semibold">$145</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt9} alt="shirt9" />
              <h3 className="font-medium mb-1">Loose Fit Bermuda Shorts</h3>
              <p className="text-gray-500 text-sm mb-1">⭐⭐⭐ (3.0/5)</p>
              <p className="font-semibold">$80</p>
            </div>
          </div>

          {/* Previous/Next */}
          <div className="flex justify-between items-center mt-10 gap-3">
            <button className="px-4 py-2 border rounded-lg"> <span className="font-bold">← </span>Previous</button>
            <div className="flex">
              <p className="px-3 py-1  border rounded-lg cursor-pointer">1</p>
              <p className="px-3 py-1 text-gray-500 rounded-lg cursor-pointer">2</p>
              <p className="px-3 py-1 text-gray-500 rounded-lg cursor-pointer">3</p>
              <p className="px-3 py-1 text-gray-500 rounded-lg cursor-pointer">...</p>
              <p className="px-3 py-1 text-gray-500 rounded-lg cursor-pointer">8</p>
              <p className="px-3 py-1 text-gray-500 rounded-lg cursor-pointer">9</p>
              <p className="px-3 py-1 text-gray-500 rounded-lg cursor-pointer">10</p>
            </div>
            <button className="px-4 py-2 border rounded-lg">Next<span className="font-bold"> →</span></button>
          </div>
        </main>
      </div >

    </>
  );
} 
