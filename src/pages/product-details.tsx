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
  return <div>
    {data && <div>
      {/* Product details design */}
      </div>}
  </div>;
}