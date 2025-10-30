import Header from "./components/header";
import Products from "./pages/products";
import { useState } from "react";

export default function App() {
  const [page,setPage] = useState(1);
  return (
    <div>
      <Header setPage={setPage}/>
      <Products PAGE={page}/>
    </div>
  );
}
