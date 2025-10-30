import { useEffect, useState } from 'react';
import ProductCard from '../components/product-card';
export default function Products({LIMIT=3,PAGE=1}:{LIMIT?:number,PAGE?:number}) {
  const [data,setData] = useState([]);
  const SKIP = (PAGE-1)*LIMIT;
  console.log(data);
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${SKIP}`)
    .then(res => res.json())
    .then(json => setData(json.products));
  },[LIMIT,SKIP]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8'>
      {
        data && data.map((item,index) => <ProductCard key={index} product={item} />)
      }
    </div>
  );
}
