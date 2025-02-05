"use client";

import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const BgMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(error => {
        console.log("Error al reproducir audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  if (!isClient) return null;

  return (
    <div className="w-full flex justify-end items-start fixed top-4 right-0 z-50">
      <audio ref={audioRef} src="/audios/bgMusic.mp3" loop />
      <button 
        onClick={toggleAudio}
        className="mr-8 bg-transparent text-white text-sm px-5 py-2.5 rounded border border-white cursor-pointer opacity-0 animate-slideIn hover:scale-90 hover:shadow-neon hover:bg-neon-blue transition-all duration-300"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s 0.5s forwards;
        }
        
        .shadow-neon {
          box-shadow: 0 0 20px rgba(194, 233, 235, 0.8);
        }
        
        .bg-neon-blue {
          background-color: rgba(6, 232, 244, 0.2);
        }
      `}</style>
    </div>
  );
};

export default BgMusic;