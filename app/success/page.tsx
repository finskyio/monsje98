"use client";

import Link from "next/link";
import Footer from "../components/Footer";

export default function SuccessPage() {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4 text-center">
      <h1 className="text-5xl text-center tracking-tighter lg:mb-4 mb-12 md:mb-0 ">
        Payment Successful!
      </h1>
      <p className="text-sm tracking-tight mb-6 ">
        Thank you for your purchase. (Note: This page is part of my portfolio – so don&apos;t take it too seriously!)
      </p>
      <Link
        href="/shop"
        className="text-md tracking-tight mb-2 bg-gradient-to-r from-[#BFD962] to-[#DEF2B3] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#b6d058] hover:to-[#d1f08e] hover:text-black transition duration-600 ease-in-out"
      >
        Continue Shopping
      </Link>
      <Footer />
    </div>
  );
}
