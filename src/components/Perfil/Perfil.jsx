"use client";

import React, { useState, useEffect } from 'react';
import styles from './Perfil.module.css';
import imgPerfil from './imgPerfil.webp';
import Image from 'next/image';
import Link from "next/link";

const Perfil = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showPerfilAfterDelay = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(showPerfilAfterDelay);
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/about">
        <Image
          src={imgPerfil}
          alt="perfil"
          width={200}
          height={200}
          className={`${styles.perfil} ${isVisible ? styles.fadeIn : ''}`}
          style={{ cursor: 'pointer' }}
        />
        <p className={styles.text}>About me</p>
      </Link>
    </div>
  );
};

export default Perfil;


