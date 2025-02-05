"use client";

import React, { useState, useEffect } from 'react';

const NameDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const firstName = "Marco";
  const lastName = "Sotola";
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nameStyle = "inline-block hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-400 hover:text-transparent hover:bg-clip-text transition-all duration-300";

  return (
    <div className="py-20">
      <div className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-6xl font-bold text-center text-white flex justify-start items-center gap-4">
          <span className={nameStyle}>
            {firstName.split('').map((letter, idx) => (
              <span
                key={idx}
                className="inline-block hover:animate-pulse"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span className={nameStyle}>
            {lastName.split('').map((letter, idx) => (
              <span
                key={idx}
                className="inline-block hover:animate-pulse"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default NameDisplay;