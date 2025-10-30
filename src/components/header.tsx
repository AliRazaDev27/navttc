interface HeaderProps{
  setPage:React.Dispatch<React.SetStateAction<number>>
  setSearchTerm:React.Dispatch<React.SetStateAction<string>>
}
export default function Header({setPage,setSearchTerm}:HeaderProps){

  const handleNext = ()=>{
    setPage((prev)=>prev+1);
  }

  const handlePrev = ()=>{
    setPage((prev)=>prev-1);
  }
  const handleSearchTerm = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchTerm(e.target.value);
  }
  return(
    <header className="flex items-center justify-between mt-4">
      <div>
        <input type="text" placeholder="Search..." onChange={handleSearchTerm}
         className="text-lg bg-neutral-300 px-6 py-2.5 rounded-lg outline-0"/>
      </div>
      <div className="flex items-center justify-between gap-4">
        <button onClick={handlePrev} className="bg-blue-600 hover:bg-blue-700 text-white  px-5 py-2.5 rounded-lg">Prev</button>
        <button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white  px-5 py-2.5 rounded-lg">Next</button>
      </div>
    </header>
  )
}