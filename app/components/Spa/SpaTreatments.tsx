'use client';
import React from "react";
import { motion } from "framer-motion";

const treatments = [
  {
    name: "Thermal Hydro Balance",
    description:
      "Replenish your body with a soothing water-based experience enriched with Monsjé signature rose and lavender oils. This treatment is designed to detoxify, reduce stress, and restore inner harmony.",
    duration: "60 minutes",
    price: "190 €",
  },
  {
    name: "Golden Elixir Experience",
    description:
      "Indulge in Monsjé luxurious warm elixir, crafted with prickly pear, jasmine, and immortelle extracts. This session deeply relaxes muscles, rejuvenates the skin, and leaves you with a radiant glow.",
    duration: "75 minutes",
    price: "220 €",
  },
  {
    name: "Volcanic Stone Harmony",
    description:
      "Feel the tension melt away as volcanic basalt stones, combined with Monsjé oils like frankincense and sacred lotus, ease muscle stiffness and improve blood circulation while deeply nourishing your skin.",
    duration: "90 minutes",
    price: "230 €",
  },
  {
    name: "Herbal Revitalization",
    description:
      "Using heated herbal compresses filled with turmeric, ginger, and lemongrass, this treatment combines traditional techniques with Monsjé essential oils for a restorative experience that reduces muscle soreness and soothes the senses.",
    duration: "75 minutes",
    price: "210 €",
  },
  {
    name: "Lavender Serenity Wrap",
    description:
      "Unwind with Monsjé lavender-infused body wrap. Starting with an exfoliation, followed by a warm lavender mask, this treatment deeply hydrates and softens the skin while calming the mind.",
    duration: "90 minutes",
    price: "200 €",
  },
  {
    name: "Rose Bliss Facial",
    description:
      "Rejuvenate your skin with Monsjé signature rose cream, known for its antioxidant properties. This facial brightens and hydrates the skin, leaving you with a natural glow and renewed softness.",
    duration: "60 minutes",
    price: "160 €",
  },
  {
    name: "Jasmine Dream Massage",
    description:
      "A deeply relaxing full-body massage that uses Monsjé jasmine oil to calm the senses, reduce tension, and nourish the skin with its natural restorative properties.",
    duration: "90 minutes",
    price: "220 €",
  },
  {
    name: "Immortelle Glow Ritual",
    description:
      "Restore your skin elasticity and vitality with Monsjé immortelle-infused treatment. This therapy focuses on improving skin texture and promoting cellular renewal, leaving you refreshed and radiant.",
    duration: "75 minutes",
    price: "240 €",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SpaTreatments = () => {
  const displayTreatments = treatments.slice(0, 8);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h4 className="text-4xl lg:text-5xl md:text-5xl text-center tracking-tighter mb-1">You deserve</h4>
      <h4 className="text-6xl lg:text-7xl md:text-7xl text-center tracking-tighter mb-12">
        to <span className="text-[#BFD962]">relax</span>
      </h4>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {displayTreatments.map((treatment, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-r from-[#e5e5e5ae] to-[#f2f2f2a1] rounded-lg p-4 shadow-md flex flex-col h-full"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg tracking-tighter mb-4 text-black/80">
              {treatment.name}
            </h3>
            <p className="mb-2 text-sm tracking-tight text-justify flex-1">
              {treatment.description}
            </p>
            <div className="mt-4 flex justify-between text-sm font-medium">
              <span className="border border-white/70 rounded-full py-1 px-2">
                {treatment.duration}
              </span>
              <span className="bg-gradient-to-r from-[#bfd962a7] to-[#f2f2f2a1] rounded-lg">
                {treatment.price}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SpaTreatments;
