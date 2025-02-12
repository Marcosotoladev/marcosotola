"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';
import Link from 'next/link';
import ProjectCarousel from '../ProyectCarousel/ProyectCarousel';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900/90 rounded-xl overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800"
          onClick={e => e.stopPropagation()}
        >
          {/* Header fijo */}
          <div className="sticky top-0 bg-slate-900/95 p-4 border-b border-slate-700/50 backdrop-blur-sm">
            <h2 className="text-xl font-bold pr-8">{project.title}</h2>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contenido scrolleable */}
          <div className="p-4">
            <ProjectCarousel images={project.images} title={project.title} />

            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-lg font-semibold">Descripción</h3>
                <p className="text-slate-300 text-sm mt-2">{project.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Tecnologías</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.url && (
                <Link
                  href={project.url}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Visitar sitio
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;