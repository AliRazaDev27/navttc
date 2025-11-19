import { Link } from "react-router-dom";
export default function Sidebar(){
    return(
        <>
          <div>
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
          </div>
        </>
    )
}