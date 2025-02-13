import React from "react";
import Link from "next/link";

export default function HeroTwo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herotwo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-8 flex flex-col items-right justify-center text-right gap-2 ">
        <h3 className="md:mr-40 lg:text-6xl text-3xl text-[#fff] h-[25px] lg:h-[50px]">
          99,1% <span className="text-[#DEF244] h-[35px] lg:h-[75px]">organic</span>
        </h3>
        
        <div className="cursor-pointer">
          <h3 className="lg:text-6xl md:mr-40 text-4xl text-[#DEF244] mb-8 h-[35px] lg:h-[75px]">
            philosophy
            </h3>
            <Link
      href="/philosophy"
      className="md:mr-40 px-2 py-2 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-[#f2f2f2] border-[0.2px] border-[#f2f2f241] bg-[linear-gradient(90deg,rgba(173,192,60,0.85),rgba(141,174,16,0.85),rgba(91,126,29,0.85))] hover:bg-[linear-gradient(90deg,rgba(173,192,60,1),rgba(141,174,16,1),rgba(91,126,29,1))] hover:text-[#fff]"
    >
      read more
    </Link>
    
        </div>
      </div>
    </div>
  );
}
