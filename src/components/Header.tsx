import { logoDark , cartImg } from "@/assets";

export default function Header() {
  return (
    <div
      className="w-full h-20 bg-white font-titleFont
     border-b-[1px] border-b-gray-800 sticky top-0 z-50"
    >
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between relative">
        <div>
          <img src={logoDark} alt="logoDark" className="w-28" />
        </div>
        <ul className="flex items-center gap-8 ">
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            HOME
          </li>
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            PAGES
          </li>
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            SHOP
          </li>
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            ELEMENT
          </li>
          <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            BLOG
          </li>
          <div className="relative">
              <img className="w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center 
              font-semibold font-titleFont">0 </span>
            </div>
            
        </ul>
        
      </div>
    </div>
  );
}
