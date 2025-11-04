interface PaginationProps{
  setPage:React.Dispatch<React.SetStateAction<number>>
}
export default function Pagination({setPage}:PaginationProps){
  const handleNext = ()=>{
    setPage((prev)=>prev+1);
  }

  const handlePrev = ()=>{
    setPage((prev)=>prev-1);
  }
  return(
      <div className="flex items-center justify-between gap-4 my-4">
        <button onClick={handlePrev} className="bg-blue-600 hover:bg-blue-700 text-white  px-5 py-2.5 rounded-lg">Prev</button>
        <button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white  px-5 py-2.5 rounded-lg">Next</button>
      </div>
  )
}