'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, BookOpen, Share2 } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: "Desarrollo Web Fullstack", date: "2022", place: "UTN Buenos Aires" },
    { icon: <Palette className="w-6 h-6" />, title: "UX/UI Design", date: "2023" },
    { icon: <Code2 className="w-6 h-6" />, title: "Frontend Specialist", date: "2025", place: "Henry" },
    { icon: <Share2 className="w-6 h-6" />, title: "Marketing & Social Media", date: "En curso" }
  ];

  return (
    <div className="min-h-screen  text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Sobre Mí</h1>
          <div className="w-24 h-1 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative flex items-center space-x-4 bg-slate-800/50 p-4 rounded-lg hover:bg-slate-700/50 transition-all"
              >
                <div className="p-3 bg-blue-500/20 rounded-full">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                  <p className="text-slate-400">{skill.date}</p>
                  {skill.place && (
                    <p className="text-sm text-slate-500">{skill.place}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Description */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-slate-300 leading-relaxed">
                Me recibí de Desarrollador Web Fullstack en Octubre de 2022 en la Universidad Tecnológica Nacional de Buenos Aires, Argentina. Desde entonces me dediqué a trabajar de manera freelance.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-slate-300 leading-relaxed">
                Seguí perfeccionándome en otros cursos afines de diseño UX/UI y realicé una especialización en Frontend en academia Henry, finalizando en Enero de 2025.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-slate-300 leading-relaxed">
                Actualmente estoy cursando en la carrera Marketing, especializadome en redes sociales.
              </p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Ver Proyectos
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;