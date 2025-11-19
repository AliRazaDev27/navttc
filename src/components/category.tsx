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
import Sidebar from "./sidebar";

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
          <Sidebar />
        </aside>

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 px-6 pb-6 pt-4 overflow-y-auto transition-transform duration-300 sm:hidden
               ${showFilters ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              className="text-gray-600 text-xl"
              onClick={() => setShowFilters(false)}
            >
              ✕
            </button>
          </div>
          <Sidebar /> 
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
              <h3 className="font-medium mb-1 cursor-pointer">Gradient Graphic T-shirt</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐☆ (3.5)</p>
              <p className="font-semibold cursor-pointer">$145</p>
            </div>

            <div className="p-4 rounded-xl ">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt2} alt="shirt2" />
              <h3 className="font-medium mb-1 cursor-pointer">Polo With Tipping Details</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐⭐☆ (4.5)</p>
              <p className="font-semibold cursor-pointer">$180</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt3} alt="shirt3" />
              <h3 className="font-medium mb-1 cursor-pointer">Black Striped T-shirt</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐⭐⭐ (5.0/5)</p>
              <p className="font-semibold cursor-pointer">$120</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt4} alt="shirt4" />
              <h3 className="font-medium mb-1 cursor-pointer">Sinny fit Jeans</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐☆ (3.5)</p>
              <p className="font-semibold cursor-pointer">$240</p>
            </div>

            <div className="p-4 rounded-xl hover:shadow-md transition">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt5} alt="shirt5" />
              <h3 className="font-medium mb-1 cursor-pointer">Checkered Shirt</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐⭐☆ (4.5)</p>
              <p className="font-semibold cursor-pointer">$180</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt6} alt="shirt6" />
              <h3 className="font-medium mb-1 cursor-pointer">Sleeve Striped T-shirt</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐⭐☆ (4.5)</p>
              <p className="font-semibold cursor-pointer">$130</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt7} alt="shirt7" />
              <h3 className="font-medium mb-1 cursor-pointer">Vertical Striped Shirt</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐⭐⭐ (5.0/5)</p>
              <p className="font-semibold cursor-pointer">$212</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt8} alt="shirt8" />
              <h3 className="font-medium mb-1 cursor-pointer">Courage Graphic T-shirt</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐⭐ (4.0)</p>
              <p className="font-semibold cursor-pointer">$145</p>
            </div>

            <div className="p-4 rounded-xl">
              <img className="w-full h-52 rounded-lg mb-3 " src={Shirt9} alt="shirt9" />
              <h3 className="font-medium mb-1 cursor-pointer">Loose Fit Bermuda Shorts</h3>
              <p className="text-gray-500 text-sm mb-1 cursor-pointer">⭐⭐⭐ (3.0/5)</p>
              <p className="font-semibold cursor-pointer">$80</p>
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
