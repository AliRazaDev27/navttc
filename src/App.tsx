import { useSearchParams } from "react-router";
import Pagination from "./components/pagination";
import Products from "./pages/products";
import { useState } from "react";

export default function App() {
  const [searchTerm,setSearchTerm] = useState("");
  const [searchParams,_] = useSearchParams();
  const page = parseInt(searchParams.get("page") || '1')
  return (
    <div>
      <Products searchTerm={searchTerm} PAGE={page}/>
      <Pagination/>
    </div>
  );
}
