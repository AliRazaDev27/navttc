import { useEffect, useState } from 'react';
import ProductCard from './components/product-card';
export default function App() {
  const [data,setData] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => setData(json));
  },[]);
  return (
    <div>
      <ProductCard product={data!}/>
    </div>
  );
}
