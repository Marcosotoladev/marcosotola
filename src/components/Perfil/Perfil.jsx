"use client";

import React, { useState, useEffect } from 'react';
import styles from './Perfil.module.css';
import imgPerfil from './imgPerfil.webp';
import Image from 'next/image';

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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Image
      src={imgPerfil}
      alt="perfil"
      className={`${styles.perfil} ${isVisible ? styles.fadeIn : ''}`}
      onClick={scrollToAbout}
      style={{ cursor: 'pointer' }} // Indica que la imagen es clickeable
    />
  );
};

export default Perfil;


