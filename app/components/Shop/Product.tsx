'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductProps {
  image: { src: string; hover: string };
  name: string;
  price: string;
  onAddToCart?: () => void;
}

const Product = ({ image, name, price, onAddToCart }: ProductProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-2 border-[0.01px] border-black/10 w-[350px] h-[530px] lg:w-[400px] mx-auto lg:mx-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-[440px] overflow-hidden">
        <Image
          src={`/products/${image.src}.jpg`}
          alt={name}
          fill
          sizes="(max-width: 768px) 350px, 400px"
          style={{ objectFit: 'cover' }}
          className={`transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <Image
          src={`/products/${image.hover}.jpg`}
          alt={`${name} hover`}
          fill
          sizes="(max-width: 768px) 350px, 400px"
          style={{ objectFit: 'cover', cursor: 'pointer' }}
          className={`absolute top-0 left-0 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <div className="mt-2 flex justify-between text-sm items-center">
        <span className="font-medium tracking-tighter text-md text-black/80">{name}</span>
        <span className="bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-1 font-medium tracking-tighter text-md">
          {price}
        </span>
      </div>
      <div
        className={`mt-1 text-center font-normal text-sm tracking-tighter transition-opacity duration-500 py-2 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ cursor: 'pointer' }}
        onClick={(e) => {
          if (onAddToCart) {
            e.stopPropagation();
            e.preventDefault();
            onAddToCart();
          }
        }}
      >
        <span className="bg-gradient-to-r from-[#d9d9d9ae] to-[#e6e6e6a1] rounded-[10px] p-2 text-black/70 hover:bg-gradient-to-r hover:from-[#d9d9d9] hover:to-[#e6e6e6] hover:text-black transition duration-600 ease-in-out">
          ADD TO CART
        </span>
      </div>
    </div>
  );
};

export default Product;
