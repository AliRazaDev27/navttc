import versace from "@/assets/LOGO/versace.svg";
import Gucci from "@/assets/LOGO/gucci.svg";
import zara from "@/assets/LOGO/zara.svg";
import Prada from "@/assets/LOGO/Prada.svg";
import Calvin from "@/assets/LOGO/Calvin-Klein.svg";

export function Brand() {
  return (
    <div className="w-full bg-black py-4 md:p-4 md:my-4 flex justify-center">
      <ul
        className="  flex items-center justify-center gap-8 md:gap-20">
        <li><img src={versace} alt="Versace" className="w-16 md:w-28" /></li>
        <li><img src={zara} alt="Zara" className="w-10 md:w-18" /></li>
        <li><img src={Gucci} alt="Gucci" className="w-16 md:w-28" /></li>
        <li><img src={Prada} alt="Prada" className="w-16 md:w-28" /></li>
        <li><img src={Calvin} alt="Calvin Klein" className="w-16 md:w-28" /></li>
      </ul>
    </div>
  );
}
