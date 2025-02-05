"use client";

import React from 'react';
import styles from './Name.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Name = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Link href="#about" onClick={handleClick}>
        <div className='flex '>
          <Image src="/images/logo.png" alt="logo" width={80} height={80} className={styles.name} />
          <h2 className={styles.name}>arco Sotola</h2>
        </div>
      </Link>
    </>
  );
};

export default Name;
