import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const images = [
  "/onelife-graphic.png",
  "/onelife-graphic2.png",
  "/onelife-graphic4.png",

];

const colors = ["#6B5F42", "#1D2B36", "#203A43", "#2E4A3E"];
const sizes = ["Small", "Medium", "Large", "X-Large"];

export default function ProductDetails(){
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [qty, setQty] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">

      
      <div className="flex gap-4">
    
        <div className="flex flex-col gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`w-28 h-32.5 rounded-xl object-cover cursor-pointer border-2 ${
                index === selectedImage ? "border-blue-500" : "border-gray-200"
              }`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>

        
        <div className="flex-1">
          <img
            src={images[selectedImage]}
            className="w-full h-[420px] object-cover rounded-xl border-2 border-blue-400"
          />
        </div>
      </div>

      
      <div>
        <h1 className="text-3xl font-extrabold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>

        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-yellow-500 text-xl">★★★★☆</span>
          <span className="text-gray-600 text-sm">4.5/5</span>
        </div>

        
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl font-bold">$260</span>
          <span className="line-through text-gray-400 text-lg">$300</span>
          <span className="text-red-500 text-sm bg-red-100 px-2 py-1 rounded-full">
            -40%
          </span>
        </div>

        
        <p className="text-gray-600 leading-relaxed mb-6">
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>

    
        <h3 className="text-sm font-semibold mb-2">Select Colors</h3>
        <div className="flex gap-3 mb-6">
          {colors.map((color) => (
            <div
              key={color}
              className={`w-6 h-6 rounded-full cursor-pointer border ${
                color === selectedColor ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        
        <h3 className="text-sm font-semibold mb-2">Choose Size</h3>
        <div className="flex gap-4 mb-8 ">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-2 sm:px-6 py-1 sm:py-2 rounded-full border text-sm  ${
                size === selectedSize
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        
        <div className="flex items-center gap-6 justify-between ">
          
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="p-1"
            >
              <Minus size={18} />
            </button>

            <span className="px-4 text-lg font-medium">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="p-1"
            >
              <Plus size={18} />
            </button>
          </div>

          <div className="">
          <button className="bg-black text-white  px-10 sm:px-30 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
            Add to Cart
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};


