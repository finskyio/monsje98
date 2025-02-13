import Link from "next/link";

export default function HeroOne() {
  return (
    <div
      className="w-[800px] md:mr-20 lg:mr-18 flex shrink-0 h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/heroone.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-16 left-60 flex flex-col gap-2 ">
        <h1 className="lg:text-8xl text-6xl mx-auto lg:mx-0 lg:mr-72 text-[#f2f2f2] h-[45px] lg:h-[75px]">elegance.</h1>
        <h2 className="lg:text-6xl text-5xl ml-16 text-[#eee8e8] mb-2">smoothness.</h2>
        <div className="text-center cursor-pointer">
        <Link
      href="/shop"
      className="px-2 py-2 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-[#f2f2f2] border-[0.2px] border-[#f2f2f241] bg-[linear-gradient(90deg,rgba(173,192,60,0.85),rgba(141,174,16,0.85),rgba(91,126,29,0.85))] hover:bg-[linear-gradient(90deg,rgba(173,192,60,1),rgba(141,174,16,1),rgba(91,126,29,1))] hover:text-[#fff]"
    >
      check the store
    </Link>

      </div>
      </div>
      
      
    </div>
  );
}
