import Header from "./components/header";
import Products from "./pages/products";
import { useState } from "react";

export default function App() {
  const [page,setPage] = useState(1);
  const [searchTerm,setSearchTerm] = useState("");
  return (
    <div>
      <Header setPage={setPage} setSearchTerm={setSearchTerm}/>
      <Products searchTerm={searchTerm} PAGE={page}/>
    </div>
  );
}
