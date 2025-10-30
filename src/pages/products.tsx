import { useEffect, useState } from 'react';
import ProductCard from '../components/product-card';
export default function Products({searchTerm = "",LIMIT=3,PAGE=1}:{searchTerm?:string,LIMIT?:number,PAGE?:number}) {
  const [data,setData] = useState([]);
  const SKIP = (PAGE-1)*LIMIT;
  const baseUrl = "https://dummyjson.com/products";
  const query = searchTerm ? `/search?q=${searchTerm}` : `?limit=${LIMIT}&skip=${SKIP}`;
  console.log(data);
  useEffect(() => {
    console.log(`fetching started at ${Date.now()}`);
    fetch(`${baseUrl}${query}`)
    .then(res => res.json())
    .then(json => setData(json.products));
  },[searchTerm,LIMIT,SKIP,query]);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4 px-4'>
      {
        data && data.map((item,index) => <ProductCard key={index} product={item} />)
      }
    </div>
  );
}
