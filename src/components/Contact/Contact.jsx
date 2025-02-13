"use client";

import React, { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.contact} ${isVisible ? styles.entrada : ""}`}>
        <div className={styles.phone}>
          <Phone size={20} className="mr-2" color="#00ffff" />
          <p>+54 351 390 8198</p>
        </div>
        <div className={styles.gmail}>
          <Mail size={20} className="mr-2" color="#00ffff" />
          <p>marcosotoladev@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

