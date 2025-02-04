"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/1.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png'
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl">
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: index * 0.2,
              type: "spring",
              stiffness: 300
            }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image 
              src={src} 
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={200}
              className="rounded-lg transition-transform group-hover:scale-105 group-hover:rotate-3 shadow-lg"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Full screen image" 
                width={1200} 
                height={800}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}