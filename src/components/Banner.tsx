import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import {
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive ,
} from "@/assets/banner/indexBan";

export default function Banner() {
  const [currentslide, setCurrentslide] = useState(0);
  const prevSlide = () => {
    setCurrentslide(currentslide === 0 ? 4 : (slide) => slide - 1);
  };
  const nextSlide = () => {
    setCurrentslide(currentslide === 4 ? 0 : (slide) => slide + 1);
  };
  console.log(currentslide);
  return (
    <div className="w-full  h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          className=" h-full w-[400vw] flex transition-transform   duration-1000"
          style={{ transform: `translateX(-${currentslide * 100}vw )` }}
        >
          <img
            src={imageOne}
            alt="imageSlider "
            className="object-cover h-full w-screen"
          />
          <img
            src={imageTwo}
            alt="imageSlider "
            className="object-cover h-full w-screen"
          />
          <img
            src={imageThree}
            alt="imageSlider "
            className="object-cover h-full w-screen"
          />
          <img
            src={imageFour}
            alt="imageSlider "
            className="object-cover h-full w-screen"
          />
          <img
            src={imageFive}
            alt="imageSlider "
            className="object-cover h-full w-screen"
          />
          
        </div>
        <div
          className="flex absolute text-base gap-8  left-0 right-0 
         w-fit bottom-44 mx-auto "
        >
          <div
            onClick={prevSlide}
            className="h-7 w-7 md:w-14 md:h-12 text-sm md:text-lg rounded-sm border-[1px] 
 border-gray-700 flex items-center justify-center hover:cursor-pointer 
 hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            {" "}
            <IoIosArrowBack />{" "}
          </div>
          <div
            onClick={nextSlide}
            className="h-7 w-7 md:w-14 md:h-12 text-sm md:text-lg rounded-sm border-[1px] 
 border-gray-700 flex items-center justify-center hover:cursor-pointer 
 hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            {" "}
            <IoIosArrowForward />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
