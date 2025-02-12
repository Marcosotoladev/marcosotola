"use client";

import React from "react";
import styles from "./Buttons.module.css";
import Link from "next/link";

const Buttons = () => {
  return (
    <div className={styles.btnContainer}>
      <Link href="/certifications" className={styles.btn1}>
        Certifications
      </Link>
      <Link href="/skills" className={styles.btn2}>
        Skills
      </Link>
    </div>
  );
};

export default Buttons;