"use client";

import { useState, useEffect } from "react";
import HomePage from "./home/page";

export default function Home() {
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return <div className="flex justify-center ">{showHome ? <HomePage /> : null}</div>;
}

