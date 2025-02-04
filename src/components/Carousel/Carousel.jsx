"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const creativeImages = [
  '/images/fsUtn.png',
  '/images/feUtn.png',
  '/images/fsHenry.png',
  '/images/jsMimo.png',
  '/images/sqlMimo.png',
  '/images/cssMimo.png',
  '/images/htmlMimo.png'
];

export default function CreativeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % creativeImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + creativeImages.length) % creativeImages.length);
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000 overflow-hidden">
      {creativeImages.map((image, index) => {
        const offset = index - activeIndex;
        const translateX = offset * 100;
        const scale = 1 - Math.abs(offset) * 0.2;
        const zIndex = creativeImages.length - Math.abs(offset);

        return (
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{
              opacity: Math.abs(offset) <= 1 ? 1 : 0,
              scale: scale,
              x: translateX,
              zIndex: zIndex
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className="absolute w-[400px] h-[300px] rounded-2xl shadow-2xl cursor-pointer"
          >
            <Image 
              src={image} 
              alt={`Creative image ${index + 1}`} 
              fill
              className="object-cover rounded-2xl transform transition-transform hover:scale-105"
            />
          </motion.div>
        );
      })}

      <div className="absolute bottom-10 flex space-x-4 z-50">
        <button 
          onClick={handlePrev} 
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
        >
          ← Previous
        </button>
        <button 
          onClick={handleNext} 
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}