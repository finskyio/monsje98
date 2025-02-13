"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-2 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative gap-2">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15 cursor-pointer">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Monsje98 Logo"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                href="/shop"
                className="text-white/70 hover:text-white transition"
              >
                Shop
              </Link>
              <Link
                href="/philosophy"
                className="text-white/70 hover:text-white transition"
              >
                Philosophy
              </Link>
              <Link
                href="/spa"
                className="text-white/70 hover:text-white transition"
              >
                Spa
              </Link>
            </nav>
          </div>

          <div className="flex gap-4 items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image src="/hamburger2.svg" alt="Menu" width={24} height={24} />
            </button>
          </div>

          <div
            className={`fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center transition-transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden z-50`}
          >
            <button
              className="absolute top-6 right-6"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/hamburger.svg"
                alt="Close"
                width={24}
                height={24}
               
              />
            </button>
            <nav className="flex flex-col gap-6 text-lg text-white">
              <Link
                href="/shop"
                className="hover:text-gray-300 transition text-4xl tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/philosophy"
                className="hover:text-gray-300 transition text-4xl tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                Philosophy
              </Link>
              <Link
                href="/spa"
                className="hover:text-gray-300 transition text-4xl tracking-tighter"
                onClick={() => setIsOpen(false)}
              >
                Spa
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
