"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function CancelPage() {
  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4 text-center">
      <h4 className="text-5xl text-center tracking-tighter lg:mb-6 mb-16">Payment Cancelled</h4>
      <p className="mb-6">Your payment has been cancelled.</p>
      <div className="flex justify-center items-center mb-4">
  <Link
    href="/shop"
    className="flex gap-1 items-center text-md tracking-tighter bg-gradient-to-r from-[#d9d9d9ae] to-[#e6e6e6a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#d9d9d9] hover:to-[#e6e6e6] hover:text-black transition duration-600 ease-in-out lg:max-w-[10%] max-w-[40%]"
  >
    <Image
      src="/backicon.svg"
      alt="Icon 1"
      width={20}
      height={20}
    />
    <h4 className="m-0 leading-none">Back shop</h4>
  </Link>
</div>
<Footer />

    </div>
  );
}
