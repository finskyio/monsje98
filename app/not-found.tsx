// pages/404.tsx
import React from "react";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-9xl font-thin tracking-tighter text-[#b3b3b3]">
        404 &gt; <span className="text-white bg-gradient-to-r from-[#e9e9e910] to-[#c3c3c307] p-2">98</span>
      </h1>
      <p className="mt-4 text-lg tracking-tight text-black/70">Page Not Found</p>
      <p className="mt-2 text-sm tracking-tight">
        Math doesn&apos;t lie — 98 is always right!
      </p>
      <Link
        href="/"
        className="text-black/80 tracking-tight mt-6 inline-block bg-gradient-to-r from-[#d9d9d9ae] to-[#e6e6e6a1] rounded-[10px] p-2 hover:bg-gradient-to-r hover:from-[#d9d9d9] hover:to-[#e6e6e6] hover:text-black transition duration-600 ease-in-out"
      >
        Return Home
      </Link>
      <Footer />
    </div>
  );
}
