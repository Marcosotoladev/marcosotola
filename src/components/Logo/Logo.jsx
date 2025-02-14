"use client";

import React from 'react';
import styles from './Name.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
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

      </motion.div>
    </Link>
  );
};

export default Logo;