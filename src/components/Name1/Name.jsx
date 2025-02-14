"use client";

import React from 'react';
import styles from './Name.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Name = () => {
  return (
    <Link href="/">
      <motion.div 
        className='flex items-center group'
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/logo/logo.webp" 
            alt="logo" 
            width={80} 
            height={80} 
            className={`${styles.name} transition-all duration-300 group-hover:brightness-125`}
          />
        </motion.div>
        <motion.h2 
          className={`${styles.name} relative overflow-hidden`}
          style={{
            background: 'linear-gradient(to right, #FFFFFF, #E5E5E5)',            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 100%',
            backgroundPosition: '100%'
          }}
          whileHover={{
            backgroundPosition: '0%',
            transition: { duration: 0.4 }
          }}
        >
          arco Sotola
          <motion.span
            className="absolute bottom-0 left-0 w-full h-[2px] transform origin-left"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.h2>
      </motion.div>
    </Link>
  );
};

export default Name;
