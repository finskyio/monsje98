"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "../components/Footer";

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const slugify = (text: string): string => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const totalPrice = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: state.items }),
      });
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      if (data.url) {
        router.push(data.url);
      } else {
        throw new Error("No URL returned from checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
    }
  };

  const handleIncrement = (itemId: string, currentQuantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id: itemId, quantity: currentQuantity + 1 },
    });
  };

  const handleDecrement = (itemId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: itemId, quantity: currentQuantity - 1 },
      });
    } else {
      dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
    }
  };

  const handleRemove = (itemId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
  };

  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4">
      <div className="mb-4">
        <Link
          href="/shop"
          className="flex gap-1 items-center text-md tracking-tighter bg-gradient-to-r from-[#d9d9d9ae] to-[#e6e6e6a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#d9d9d9] hover:to-[#e6e6e6] hover:text-black transition duration-600 ease-in-out lg:max-w-[10%] max-w-[40%]"
        >
          <Image src="/backicon.svg" alt="Icon 1" width={20} height={20} />
          <h4 className="m-0 leading-none">Back shop</h4>
        </Link>
      </div>

      <h4 className="text-5xl text-center tracking-tighter lg:mb-6 mb-12">
        Checkout
      </h4>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4 max-w-[70%] mx-auto">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-center border p-4 rounded-lg"
            >
              <Link href={`/shop/${slugify(item.name)}`}>
                <div className="w-24 h-24 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={`/products/${item.image.src}.jpg`}
                    alt={item.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </Link>

              <div className="mt-4 md:mt-0 md:ml-4 flex-1">
                <Link href={`/shop/${slugify(item.name)}`}>
                  <h2 className="text-lg tracking-tighter mb-4 text-black/80 text-center lg:text-left md:text-left">
                    {item.name}
                  </h2>
                </Link>
                <p className="text-sm tracking-tight max-w-[70%] text-justify mx-auto lg:mx-0 md:mx-0">
                  {item.short || "No description available."}
                </p>
                <p className="bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-1 font-medium tracking-tighter text-md mt-2 lg:max-w-[15%] max-w-[35%] mx-auto lg:mx-0">
                  {(item.price * item.quantity).toFixed(2)} €
                </p>
                <div className="flex items-center mt-2 space-x-1 justify-end">
                  <button
                    onClick={() => handleDecrement(item.id, item.quantity)}
                    className="bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-1 text-md"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-1 text-md">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrement(item.id, item.quantity)}
                    className="bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-1 text-md"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-4 flex items-center text-red-500 p-2 rounded opacity-60 hover:opacity-100"
                  >
                    <Image
                      src="/binicon.svg"
                      alt="Delete"
                      width={24}
                      height={24}
                    />
                    <span className="ml-2 text-sm tracking-tight">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <p className="bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-1 font-medium tracking-tighter text-lg mt-2 lg:max-w-[20%] max-w-[70%] mb-4 lg:mb-0 text-center">
              Total: {totalPrice.toFixed(2)} €
            </p>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="text-md tracking-tight mb-2 bg-gradient-to-r from-[#BFD962] to-[#DEF2B3] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#b6d058] hover:to-[#d1f08e] hover:text-black transition duration-600 ease-in-out"
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
