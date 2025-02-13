'use client'
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Hero() {
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, x: 0, y: 0 });
  const spaContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (spaContainerRef.current) {
      const rect = spaContainerRef.current.getBoundingClientRect();
      setTooltip({ visible: true, x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0 });
  };

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6">
        <div>
          <motion.h4
            className="lg:text-5xl text-4xl lg:text-right text-center tracking-tighter mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            The Essence of Purity
          </motion.h4>
          <motion.p
            className="text-sm tracking-tight max-w-[70%] text-justify mb-6 mx-auto lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            True luxury is found in the purity of nature. At{" "}
            <span className="bg-gradient-to-r from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1">
              Monsjé 98
            </span>
            , we believe that the most exquisite beauty begins with carefully
            selected botanical ingredients, cultivated with precision and
            dedication. Our private gardens and glasshouses are home to rare and
            potent plants, grown without artificial interference, nurtured by
            expert hands, and harvested at their peak.{" "}
            <span className="bg-gradient-to-l from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1">
              Every extract we use is a tribute
            </span>{" "}
            to the authenticity and power of nature, ensuring that our skincare
            embodies the highest standard of purity and efficacy.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/philosophy/philosophy3.jpg"
              alt="purity"
              width={1000}
              height={600}
              className="p-2 lg:p-0 md:p-8"
            />
          </motion.div>
        </div>
        <div className="flex flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/philosophy/philosophy2.jpg"
              alt="purity"
              width={1000}
              height={600}
              className="mb-4 p-2 lg:p-0 md:p-8"
            />
          </motion.div>
          <motion.h4
            className="text-4xl md:text-7xl lg:text-5xl tracking-tighter px-2 lg:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Philosophy
          </motion.h4>
          <motion.h4
            className="text-6xl tracking-tighter text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            rooted
          </motion.h4>
          <motion.h4
            className="text-7xl tracking-tighter pl-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            in
          </motion.h4>
          <motion.h4
            className="lg:text-9xl text-7xl md:text-9xl tracking-tighter pl-40 lg:pt-8 pt-2 text-[#BFD962] mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            nature.
          </motion.h4>
        </div>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 h-auto md:h-screen py-6 md:py-12">
        <div className="flex flex-col">
          <motion.h2
            className="lg:text-5xl text-4xl lg:text-left mx-auto lg:mx-0 px-32 lg:px-0 tracking-tighter mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ingredients that create beauty
          </motion.h2>
          <motion.div
            className="flex flex-grow items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="max-w-md">
              <motion.p
                className="text-sm tracking-tight max-w-full lg:max-w-[70%] text-center lg:text-justify mb-6 mx-auto lg:mx-0 ml-2 p-2 lg:p-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                True beauty deserves only the finest. At Monsjé 98, nature is not just an inspiration—it is the very foundation of our formulas. Every ingredient we use is meticulously selected, ensuring its purity, potency, and effectiveness through rigorous testing.
              </motion.p>
              <br />
              <motion.p
                className="text-sm tracking-tight max-w-full lg:max-w-[70%] text-center lg:text-justify mb-6 ml-2 p-2 lg:p-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Our formulations are a{" "}
                <span className="bg-gradient-to-l from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1">
                  fusion of nature and precision
                </span>
                , completely free from synthetic additives, parabens, silicones, and any substances that could disrupt the skin natural balance. We source our botanical extracts exclusively from our certified gardens and sustainable plantations, where they mature at their own pace,{" "}
                <span className="bg-gradient-to-r from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1">
                  untouched by chemical interference
                </span>
                .
              </motion.p>
            </div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center md:col-span-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Image
              src="/philosophy/philosophy4.jpg"
              alt="purity"
              width={1000}
              height={600}
              className="p-2 lg:p-0"
            />
          </motion.div>
        </div>
        <div className="py-6 md:py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Image
              src="/philosophy/philosophy5.jpg"
              alt="purity"
              width={1000}
              height={600}
              className="p-2 lg:p-0"
            />
          </motion.div>
        </div>
        <div className="flex items-center justify-center h-auto md:h-screen">
          <motion.p
            className="text-sm tracking-tight max-w-[75%] text-center lg:text-justify mb-6 md:-mt-96 lg:mt-0 sm:mt-0 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Each drop of our elixirs is a pure essence of meticulously extracted plant-based ingredients—harmoniously blended to nourish, rejuvenate, and restore the skin at its deepest level. We harness the power of nature most potent botanicals, ensuring that every formula delivers maximum efficacy without compromise.{" "}
            <span className="bg-gradient-to-l from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1">
              From antioxidant-rich floral distillates to cold-pressed botanical oils
            </span>
            , each element is chosen for its ability to enhance skin vitality, strengthen its natural barrier, and reveal a luminous, youthful glow. Rooted in centuries-old botanical wisdom yet refined through modern expertise, our elixirs are a tribute to the purity and transformative power of nature.
          </motion.p>
        </div>
        <div className="py-20 md:py-80">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Image
              src="/philosophy/philosophy6.jpg"
              alt="purity"
              width={1000}
              height={600}
              className="p-2 lg:p-0"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Image
          src="/philosophy/philosophy7.jpg"
          alt="purity"
          width={700}
          height={600}
          className="pt-20 lg:pt-[600px] p-2 lg:p-0"
        />
      </motion.div>

      <div className="text-center py-12">
        <motion.h4
          className="text-5xl text-center tracking-tighter lg:mb-1 mb-12 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          Experts <span className="text-[#BFD962]">who</span> understand{" "}
        </motion.h4>
        <motion.h4
          className="text-7xl text-center tracking-tighter mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          nature deeply
        </motion.h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto py-12">
        <div className="flex justify-center flex-col">
          <motion.p
            className="text-sm tracking-tight lg:max-w-[75%] max-w-[80%] mx-auto lg:mx-0 p-2 lg:p-0 text-justify mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            Behind every drop of our extract lies the knowledge and expertise of our specialists. At Monsjé 98, we collaborate with the finest{" "}
            <span className="bg-gradient-to-l from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1">
              phytochemists, cosmetic botanists, and plant ecologists—visionaries
            </span>{" "}
            who dedicate their lives to studying, cultivating, and preserving nature most powerful botanicals. With an unwavering commitment to purity, they ensure that each ingredient retains its full potential, allowing our formulations to be both effective and profoundly luxurious.
          </motion.p>
          <br />
          <motion.p
            className="text-sm tracking-tight lg:max-w-[75%] max-w-[80%] mx-auto lg:mx-0 p-2 lg:p-0 text-justify mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Our laboratories and gardens are home to an extraordinary selection of rare and potent botanicals, carefully chosen for their{" "}
            <span className="bg-gradient-to-r from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1">
              regenerative, antioxidant, and nourishing properties
            </span>
            :
          </motion.p>
          <motion.div
            className="flex text-justify max-w-[90%] pl-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <ul className="list-disc marker:text-[#848484] text-sm tracking-tight max-w-[80%] space-1 mx-auto lg:mx-0">
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Rosa damascena
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.85 }}
              >
                Nelumbo nucifera (Sacred Lotus)
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Prunus domestica (French Plum Kernel Oil)
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.95 }}
              >
                Camellia sinensis (White Tea Extract)
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Jasminum grandiflorum (Royal Jasmine)
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 1.05 }}
              >
                Helichrysum italicum (Immortelle)
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                Opuntia ficus-indica (Prickly Pear Seed Oil)
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 1.15 }}
              >
                Boswellia sacra (Frankincense Resin Extract)
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Centaurea cyanus (Cornflower Extract)
              </motion.li>
              <motion.li
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 1.25 }}
                className="mb-4 lg:mb-0"
              >
                Lavandula angustifolia (Provence Lavender)
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/philosophy/philosophy8.jpg"
              alt="purity"
              width={700}
              height={600}
              className="mb-4 p-2 lg:p-0"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.85 }}
          >
            <Image
              src="/philosophy/philosophy9.jpg"
              alt="purity"
              width={700}
              height={600}
              className="mb-12 p-2 lg:p-0"
            />
          </motion.div>
        </div>
      </div>

      <div
        ref={spaContainerRef}
        className="flex items-center justify-center h-auto md:h-screen pt-12 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          initial="hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/spa">
            <Image
              src="/philosophy/philosophyspa.jpg"
              alt="purity"
              width={1200}
              height={600}
              className="cursor-pointer p-2 lg:p-0"
            />
          </Link>
        </motion.div>
        <AnimatePresence>
          {tooltip.visible && (
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              style={{ left: tooltip.x + 10, top: tooltip.y + 10 }}
              className="absolute pointer-events-none bg-gradient-to-r from-[#e5e5e55d] to-[#f2f2f2a241] rounded-lg p-1 font-medium tracking-tighter text-md text-white px-2 text-sm"
            >
              welcome
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
