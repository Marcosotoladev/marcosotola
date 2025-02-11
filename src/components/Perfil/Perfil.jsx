"use client";

import React, { useState, useEffect } from 'react';
import styles from './Perfil.module.css';
import imgPerfil from './imgPerfil.webp';
import Image from 'next/image';
import Link from "next/link";


const Perfil = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cambia el estado después de 2 segundos para mostrar el efecto de fadeIn
    const showPerfilAfterDelay = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Limpieza: cancelar el temporizador si el componente se desmonta antes de 2 segundos
    return () => clearTimeout(showPerfilAfterDelay);
  }, []);

  return (
    <div className={styles.container}>
      <Link href="/about">
    <Image
      src={imgPerfil}
      alt="perfil"
      className={`${styles.perfil} ${isVisible ? styles.fadeIn : ''}`}
      style={{ cursor: 'pointer' }} // Indica que la imagen es clickeable
    />
    <p className={styles.text}>About me</p>
    </Link>
    </div>
  );
};

export default Perfil;


