import { useRef } from "react";
interface SidebarProps{
  setSearchTerm:React.Dispatch<React.SetStateAction<string>>
}
export default function Sidebar({setSearchTerm}:SidebarProps){
  const cancelRef = useRef(0);
  const handleSearchTerm = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if(cancelRef.current){
      clearTimeout(cancelRef.current);
    }
    const cancelID = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 1000);
    cancelRef.current = cancelID;
  }
  return(
    <aside>
      <div>
        <input type="text" placeholder="Search..." onChange={handleSearchTerm}
         className="text-lg bg-neutral-300 px-6 py-2.5 rounded-lg outline-0"/>
      </div>
    </aside>
  )
}