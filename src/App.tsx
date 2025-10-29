import { useEffect, useState } from 'react';
import ProductCard from './components/product-card';
export default function App() {
  const [data,setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setData(json.products));
  },[]);
  return (
    <div className='grid'>
      {
        data && data.map((item,index) => <ProductCard key={index} product={item} />)
      }
    </div>
  );
}
