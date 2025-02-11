"use client";

import React from "react";
import styles from "./Buttons.module.css";
import Link from "next/link";

const Buttons = () => {
  return (
    <div className={styles.btnContainer}>
      <Link href="/works" className={styles.btn1}>
        my works
      </Link>
      <Link href="/certifications" className={styles.btn2}>
        certifications
      </Link>
    </div>
  );
};

export default Buttons;