'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'


export const Hero = () => {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 })
  const spaContainerRef = useRef<HTMLDivElement>(null)

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Updates the tooltip state to be visible and positions it based on the mouse
 * cursor's location within the referenced spa container.
 *
 * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} e - The mouse event
 * containing information about the cursor's position.
 */

/******  8ffc7c06-7158-4cfb-985e-2d0c8c3437ba  *******/
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (spaContainerRef.current) {
      const rect = spaContainerRef.current.getBoundingClientRect()
      setTooltip({
        visible: true,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0 })
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <div className="max-w-screen-lg mx-auto py-12">
      <section className="mb-16">
        <motion.h4
          className="text-4xl lg:text-5xl text-center tracking-tighter mb-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Escape into Tranquility
        </motion.h4>
        <motion.h4
          className="text-6xl lg:text-7xl tracking-tighter text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Monsjé SPA
        </motion.h4>
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/spa/spa1.jpg"
            alt="Spa Entrance"
            width={1000}
            height={600}
            className='p-2 lg:p-0'
            style={{ width: '100%', height: 'auto' }}

          />
        </motion.div>
      </section>

<section className="mb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
    <div className="flex flex-col items-center md:items-start">
      <motion.h4
        className="text-4xl lg:text-5xl text-center md:text-left tracking-tighter mb-2 md:px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Harmony of nature
      </motion.h4>
      <motion.h4
        className="text-6xl lg:text-7xl text-center md:text-left tracking-tighter mb-6 md:px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        and relaxation
      </motion.h4>
      <motion.p
        className="mb-2 text-sm tracking-tight  lg:max-w-[80%] max-w-[60%] mx-auto lg:mx-0 text-justify md:text-justify"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        At Monsjé SPA, every treatment is a journey into deep relaxation and rejuvenation, inspired by the purity of nature. Our therapies are crafted using only <span className="bg-gradient-to-r from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1">ingredients grown in our ecological gardens</span>, where each plant is nurtured and harvested in harmony with its natural cycle. From the hydrating power of Rosa damascena to the detoxifying properties of white tea, our rituals invite you to experience true serenity while enhancing your natural beauty.
      </motion.p>
    </div>
    <div>
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src="/spa/spa2.jpg"
          alt="Philosophy Image"
          width={1000}
          height={600}
          className='p-2 lg:p-0'
        />
      </motion.div>
    </div>
  </div>
</section>
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/spa/spa9.jpg"
              alt="Spa Treatment"
              width={1000}
              height={600}
              className='p-2 lg:p-0'
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h4
              className="text-4xl lg:text-5xl text-center lg:text-left tracking-tighter mb-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Experience
            </motion.h4>
            <motion.h4
              className="text-4xl lg:text-5xl text-center lg:text-left tracking-tighter mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              ultimate relaxation
            </motion.h4>
            <motion.p
              className="mb-2 text-sm tracking-tight max-w-[80%] text-justify mx-auto lg:mx-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our treatments are meticulously crafted to not only soothe your senses but also to <span className='bg-gradient-to-r from-[#BFD962] to-[#f2f2f2a1] rounded-lg p-1'>revitalize your mind, body, and spirit</span>. Each session is a harmonious blend of luxury and care, designed to provide a transformative experience that goes beyond ordinary relaxation. With every detail thoughtfully considered, from the finest botanical ingredients to the serene ambiance of our spa, we create an environment where stress melts away, and inner peace is restored.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 mx-auto py-12 gap-2">
          {[ "/spa/spa3.jpg", "/spa/spa4.jpg", "/spa/spa5.jpg", "/spa/spa6.jpg", "/spa/spa7.jpg" ].map((src, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden p-2 lg:p-0"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Image
                src={src}
                alt={`Spa Treatment ${idx + 3}`}
                width={1000}
                height={600}
                className={
                  idx === 0 ? "" :
                  idx === 1 ? "py-8" :
                  idx === 2 ? "py-16" :
                  idx === 3 ? "py-24" : "py-32 -mb-32"
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Hero
