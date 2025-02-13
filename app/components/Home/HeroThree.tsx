import Link from "next/link";


export default function HeroThree() {
  return (
    <div
      className="w-full md:mr-60 h-screen flex shrink-0 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/herothree.jpg')",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute bottom-2 left-4 flex flex-col gap-2">
      <div className="text-center cursor-pointer">
        <Link
      href="/spa"
      className="px-2 py-2 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-[#f2f2f2] border-[0.2px] border-[#f2f2f241] bg-[linear-gradient(90deg,rgba(173,192,60,0.85),rgba(141,174,16,0.85),rgba(91,126,29,0.85))] hover:bg-[linear-gradient(90deg,rgba(173,192,60,1),rgba(141,174,16,1),rgba(91,126,29,1))] hover:text-[#fff]"
    >
      relax
    </Link>
        </div>
        <h1 className="lg:text-8xl text-5xl left-4 top-10 text-[#f2f2f2] h-[35px] lg:h-[75px]">rituals&</h1>
        <h2 className="lg:text-6xl text-4xl ml-16 text-[#e0d9d9]">spa treatment.</h2>
        
      </div>
    </div>
  );
}
