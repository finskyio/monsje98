"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();
  const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="py-2 border-b border-black/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-black/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-black/15">
              <Link href="/">
                <Image
                  src="/logoblack.svg"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                href="/shop"
                className="text-black/70 hover:text-black transition"
              >
                Shop
              </Link>
              <Link
                href="/philosophy"
                className="text-black/70 hover:text-black transition"
              >
                Philosophy
              </Link>
              <Link
                href="/spa"
                className="text-black/70 hover:text-black transition"
              >
                Spa
              </Link>
            </nav>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative">
              <Link href="/cart">
                <Image
                  src="/shopicon.svg"
                  alt="Koszyk"
                  width={30}
                  height={30}
                  className="mb-1 lg:mb-0"
                />
              </Link>
              <div suppressHydrationWarning>
                {mounted && totalItems > 0 && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-gradient-to-r from-[#bfd962] to-[#a6cc1b] text-white rounded-full text-xs">
                    {totalItems}
                  </div>
                )}
              </div>
            </div>

            <button onClick={() => setIsOpen(!isOpen)}>
              <Image
                src="/hamburger2.svg"
                alt="Menu"
                width={24}
                height={24}
                className="md:hidden"
              />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center transition-transform z-50">
          <button
            className="absolute top-6 right-6"
            onClick={() => setIsOpen(false)}
          >
            <Image src="/hamburger.svg" alt="Menu" width={24} height={24} />
          </button>
          <nav className="flex flex-col gap-6 text-lg text-white/80">
            <Link
              href="/shop"
              className="hover:text-white transition text-4xl tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/philosophy"
              className="hover:text-white transition text-4xl tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              Philosophy
            </Link>
            <Link
              href="/spa"
              className="hover:text-white transition text-4xl tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              Spa
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
