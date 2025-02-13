"use client";

import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import Footer from "@/app/components/Footer";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: {
    src: string;
    hover: string;
    id?: string; 
  };
  short: string;
  description: string;
  ingredients: string[];
  type: string;
  order: number;
  benefits: string[];
  application: string[];
  subcategory: string;
}

export default function ProductPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState("");
  const effectContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const descRef = useRef<HTMLDivElement>(null);
  const [fullHeight, setFullHeight] = useState<number>(0);

  const { dispatch } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!slug) return;
    async function fetchProducts() {
      try {
        const q = query(collection(db, "products"), orderBy("order"));
        const snapshot = await getDocs(q);
        const productsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Product[];
        const found = productsList.find((p) => slugify(p.name) === slug);
        if (found) {
          setProduct(found);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Error fetching product");
      }
    }
    fetchProducts();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (effectContainerRef.current) {
        const rect = effectContainerRef.current.getBoundingClientRect();
        const totalScrollDistance = rect.height - window.innerHeight;
        const progress = Math.min(
          Math.max(-rect.top / totalScrollDistance, 0),
          1
        );
        setScrollProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (descRef.current) {
      setFullHeight(descRef.current.scrollHeight);
    }
  }, [showFullContent, product]);

  const handleToggleDescription = () => {
    if (!isExpanded) {
     
      setShowFullContent(true);
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
      setTimeout(() => {
        setShowFullContent(false);
      }, 500);
    }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: quantity,
          image: product.image,
          short: product.short,
        },
      });
      setQuantity(1);
      setAddedToCart(true);
    }
  };

  const handleProceedToPayment = () => {
    if (!addedToCart) {
      alert("Dodaj coś do koszyka!");
    } else {
      router.push("/checkout");
    }
  };

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading product...</p>;

  const imageToUse = product.image.id ? product.image.id : product.image.src;

  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <div>
        <Image
          src={`/products/${imageToUse}.jpg`}
          width={1200}
          height={800}
          alt={product.name}
        />
      </div>
      <div className="flex flex-col items-center mb-12 py-8">
        <h4 className="lg:text-5xl text-4xl text-center tracking-tighter mb-1">
          {product.name}
        </h4>
        <h4 className="lg:text-7xl text-5xl text-center tracking-tighter">
          {product.subcategory}
        </h4>
      </div>
      <div
        ref={effectContainerRef}
        style={{ height: isMobile ? "auto" : "220vh" }}
      >
        <div
          className={`sticky top-0 ${
            isMobile ? "" : "h-screen"
          } grid grid-cols-1 md:grid-cols-2`}
        >
          <div className="relative overflow-hidden">
            {isMobile ? (
              <Image
                src={`/products/${product.image.src}.jpg`}
                width={1200}
                height={800}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            ) : (
              <>
                <Image
                  src={`/products/${product.image.src}.jpg`}
                  width={1200}
                  height={800}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <img
                  src={`/products/${product.image.hover}.jpg`}
                  alt={`${product.name} Hover`}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-out"
                  style={{
                    transform: `translateY(${(1 - scrollProgress) * 100}%)`,
                  }}
                />
              </>
            )}
          </div>
          <div className="flex items-center justify-center h-full bg-white p-8">
            <div>
              <h4 className="text-lg tracking-tighter mb-4 text-black/80 text-center lg:text-left">
                Product Highlights
              </h4>
              <div className="mb-4">
                <div
                  className="overflow-hidden transition-[max-height] duration-500 ease-out"
                  style={{
                    maxHeight: isExpanded ? `${fullHeight}px` : "4rem",
                  }}
                >
                  <div ref={descRef} className="text-justify">
                    <p className="mb-2 text-sm tracking-tight max-w-[70%] ml-10 lg:ml-0">
                      {showFullContent ? product.description : product.short}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleToggleDescription}
                  className="text-gray-600 transition-all duration-500 ease-out tracking-tight ml-10 lg:ml-0"
                >
                  {isExpanded ? "Collapse -" : "More +"}
                </button>
              </div>
              <div className="flex items-center space-x-4 mb-8 ml-10 lg:ml-0">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleDecrement}
                    className="bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-1 text-md"
                  >
                    -
                  </button>
                  <span className="font-semibold">{quantity}</span>
                  <button
                    onClick={handleIncrement}
                    className="bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-1 text-md"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-[#d9d9d9ae] to-[#e6e6e6a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#d9d9d9] hover:to-[#e6e6e6] hover:text-black transition duration-600 ease-in-out"
                >
                  Add to cart
                </button>
              </div>
              <div className="mb-4">
                <h4 className="text-lg tracking-tighter mb-8 text-black/80 text-center lg:text-left">
                  Order Details
                </h4>
              </div>
              <div className="space-y-2 mb-8">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#e5e5e5] hover:to-[#f2f2f2] hover:text-black transition duration-600 ease-in-out lg:max-w-[40%] max-w-[70%] mx-auto lg:mx-0">
                  <Image
                    src="/deliveryicon.svg"
                    alt="Icon 1"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">Free Shipping over 99 €</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#e5e5e5] hover:to-[#f2f2f2] hover:text-black transition duration-600 ease-in-out lg:max-w-[40%] max-w-[70%] mx-auto lg:mx-0">
                  <Image
                    src="/paymenticon.svg"
                    alt="Icon 1"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">Visa, MasterCard</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#e5e5e5] hover:to-[#f2f2f2] hover:text-black transition duration-600 ease-in-out lg:max-w-[40%] max-w-[70%] mx-auto lg:mx-0">
                  <Image
                    src="/originicon.svg"
                    alt="Icon 1"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">Proudly made in France</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#e5e5e5] hover:to-[#f2f2f2] hover:text-black transition duration-600 ease-in-out lg:max-w-[40%] max-w-[70%] mx-auto lg:mx-0">
                  <Image
                    src="/returnicon.svg"
                    alt="Icon 1"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">30-day free returns</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-md tracking-tight mb-3 text-black/80 text-center lg:text-left">
                  Forgot something?
                </h4>
              </div>
              <div className="flex gap-2 items-center justify-center lg:justify-normal mb-4">
  <h4 className="text-md tracking-tight text-black/80">No problem,</h4>
  <Link
    href="/shop"
    className="flex gap-1 items-center text-md tracking-tighter bg-gradient-to-r from-[#d9d9d9ae] to-[#e6e6e6a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#d9d9d9] hover:to-[#e6e6e6] hover:text-black transition duration-600 ease-in-out"
  >
    <Image src="/backicon.svg" alt="Icon 1" width={20} height={20} />
    <h4 className="leading-none">Back shop</h4>
  </Link>
</div>

              <div className="items-center text-center">
                <button
                  onClick={handleProceedToPayment}
                  className=" text-md tracking-tight mb-2 bg-gradient-to-r from-[#BFD962] to-[#DEF2B3] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#b6d058] hover:to-[#d1f08e] hover:text-black transition duration-600 ease-in-out"
                >
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h4 className="text-5xl text-center tracking-tighter mb-1">
          {product.name}
        </h4>
        <h4 className="lg:text-7xl text-6xl text-center tracking-tighter mb-10 text-[#BFD962]">
          in details
        </h4>
        <div className="grid grid-cols-3 gap-4 p-2 lg:p-0">
          <div className="flex flex-col">
            <h4 className="lg:text-2xl text-xl  tracking-tighter mb-8">Ingredients</h4>
            <ul className="list-disc marker:text-[#848484] text-xs lg:text-sm tracking-tight max-w-[60%] space-y-1 justify-center">
              {product.ingredients.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="lg:text-2xl text-xl tracking-tighter mb-8">Benefits</h4>
            <ul className="list-disc marker:text-[#848484] text-xs lg:text-sm tracking-tight max-w-[80%] space-y-1 justify-center">
              {product.benefits.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="lg:text-2xl text-xl tracking-tighter mb-8">How to apply</h4>
            <ul className="list-disc marker:text-[#848484] text-xs lg:text-sm tracking-tight max-w-[80%] space-y-1 justify-center">
              {product.application.map((x, index) => (
                <li key={index}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
