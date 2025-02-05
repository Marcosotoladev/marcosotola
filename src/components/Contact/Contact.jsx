"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react"; // Importamos los íconos
import styles from "./Contact.module.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Después de 3000 milisegundos (3 segundos), cambiamos isVisible a true
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Limpiamos el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className={styles.container}>
      <div className={`${styles.contact} ${isVisible ? styles.entrada : ""}`}>
        <div className={styles.phone}>
          <Phone size={24} className="mr-4 " color="#00ffff"/> {/* Usamos el ícono de teléfono */}
          <p> +54 351 390 8198</p>
        </div>
        <div className={styles.gmail}>
          <Mail size={24} className="mr-4 " color="#00ffff" /> {/* Usamos el ícono de correo */}
          <p>marcosotoladev@gmail.com</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;

