import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-10 relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="w-[128px] h-[128px] md:mb-10 mx-auto lg:mx-0 md:mx-0">
            <Image
              src="/logo.svg"
              alt="Monsje98 Logo"
              width={128}
              height={128}
            />
          </div>

          <p className="text-sm tracking-tight max-w-[40%] md:max-w-[60%] text-justify mx-auto lg:mx-0 md:mx-0 mb-6">
            Monsje98 is a luxury skincare brand that combines nature with modern
            technology.
          </p>
          <p className="text-sm tracking-tight lg:max-w-[50%] mx-auto lg:mx-0 md:mx-0 text-left sm:hidden">
            Discover the essence of nature in every product.
          </p>
        </div>

        <div className="flex flex-col h-full">
          <div className="flex-grow  flex items-center justify-center">
            <p className="text-sm tracking-tight text-center max-w-[40%]">
              This website is a portfolio showcasing my front-end expertise.
              Every image and graphic is entirely my own work.
            </p>
          </div>
          <div className="text-center text-xs tracking-tight text-white/60 ">
            crafted by{" "}
            <Link
              href="https://www.finsky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#e5e5e527] to-[#f2f2f216] rounded-lg p-1 hover:text-white"
            >
              finsky
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="text-sm text-center">
            <h4 className="text-lg font-medium tracking-tighter text-white mb-2">
              Address
            </h4>
            <p className=" text-sm tracking-tight">123 Street</p>
            <p className="mb-6 text-sm tracking-tight">567 City, Country</p>
            <h4 className="text-lg font-medium tracking-tighter text-white mb-2">
              Phone
            </h4>
            <p className="mb-6 text-sm tracking-tight">+(12) 345 - 567 - 890</p>
            <h4 className="text-lg font-medium tracking-tighter text-white mb-4">
              SPA Hours
            </h4>
            <p className="text-sm tracking-tight">Mon-Fri: 9:00 - 22:00</p>
            <p className="text-sm tracking-tight">Saturday: 10:00 - 23:00</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="text-center text-xs tracking-tight text-white/60 md:hidden">
          crafted by{" "}
          <Link
            href="https://www.finsky.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#e5e5e527] to-[#f2f2f216] rounded-lg p-1 hover:text-white"
          >
            finsky
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
