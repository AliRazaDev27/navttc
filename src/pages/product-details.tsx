import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "../../types";

export default function ProductDetails() {
  const [data,setData] = useState<Product|null>(null);
  const params =useParams();
  useEffect(()=>{
fetch(`https://dummyjson.com/products/${params.id}`)
.then(res => res.json())
.then(json => setData(json));
  },[params.id])
  const [activeImage, setActiveImage] = useState("");
  useEffect(() => {
    if (data) {
      setActiveImage(data.thumbnail);
    }
  }, [data]);
  return (
    <div>
      {data && (
        <div className="grid grid-cols-2 px-6 py-8 rounded-3xl max-w-4xl place-items-center gap-4 border bg-neutral-700">
          <div>
            <img src={activeImage} alt={data.title} />
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold">{data.title}</h1>
            <p className="text-gray-400 mt-2">{data.description}</p>
            <div className="flex items-center mt-4">
              <span className="text-yellow-400">
                {"★".repeat(Math.round(data.rating))}
              </span>
              <span className="text-gray-400 ml-2">({data.rating})</span>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold">${data.price}</span>
              <span className="text-gray-400 line-through ml-2">
                $
                {(
                  data.price /
                  (1 - data.discountPercentage / 100)
                ).toFixed(2)}
              </span>
              <span className="text-green-400 ml-2">
                ({data.discountPercentage}% off)
              </span>
            </div>
            <div className="mt-4">
              <span className="text-gray-400">
                {data.stock > 0 ? `In Stock: ${data.stock}` : "Out of Stock"}
              </span>
            </div>
            <div className="mt-4">
              <span className="text-gray-400">Brand: {data?.brand || "Unknown"}</span>
            </div>
            <div className="mt-4">
              <span className="text-gray-400">Category: {data.category}</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
