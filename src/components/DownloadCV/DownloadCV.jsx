"use client";

import React, { useState } from 'react';
import { Download, CheckCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const DownloadCV = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    
    try {
      const response = await fetch('/cv/marco-sotola-fullstack-cv.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "MarcoSotolaFullstack-CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (error) {
      console.error('Error al descargar:', error);
      setDownloading(false);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      className={`
        flex items-center gap-2 px-6 py-3 
        rounded-full font-medium
        transition-all duration-300
        ${downloading ? 'bg-gray-400/30 cursor-wait' : 
          downloaded ? 'bg-green-500/30 hover:bg-green-600/40' : 
          'bg-slate-800/30 hover:bg-slate-700/40'}
        relative overflow-hidden group
        backdrop-blur-sm
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
      
      <motion.div className="relative flex items-center gap-2">
        {downloaded ? (
          <>
            <CheckCircle className="w-5 h-5" />
            <span>¡Discharged!</span>
          </>
        ) : downloading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <FileText className="w-5 h-5" />
            </motion.div>
            <span>Downloading...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            <span>Download CV</span>
          </>
        )}
      </motion.div>
      
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-blue-400/50"
        initial={{ width: 0 }}
        animate={{ width: downloading ? "100%" : 0 }}
        transition={{ duration: 1 }}
      />
    </motion.button>
  );
};

export default DownloadCV;