import { useSearchParams } from "react-router";

export default function Pagination(){
  const [searchParams,setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || '1');
  const handleNext = ()=>{
    setSearchParams({page: (page+1).toString()});
  }

  const handlePrev = ()=>{
    setSearchParams({page: (page-1).toString()});
  }
  return(
      <div className="flex items-center justify-between gap-4 my-4">
        <button onClick={handlePrev} className="bg-blue-600 hover:bg-blue-700 text-white  px-5 py-2.5 rounded-lg">Prev</button>
        <button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white  px-5 py-2.5 rounded-lg">Next</button>
      </div>
  )
}