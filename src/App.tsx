import Pagination from "./components/pagination";
import Products from "./pages/products";
import { useState } from "react";

export default function App() {
  const [page,setPage] = useState(1);
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <div>
      <Products searchTerm={searchTerm} PAGE={page}/>
      <Pagination setPage={setPage}/>
    </div>
  );
}
