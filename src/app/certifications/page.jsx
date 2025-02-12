"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, X } from 'lucide-react';
import Image from 'next/image';
import Buttons from '../../components/Buttons/Buttons';
import Logo from '../../components/Logo/Logo';

const CertificateModal = ({ isOpen, onClose, certificate }) => {
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
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900/90 rounded-xl p-4 overflow-auto"
  onClick={e => e.stopPropagation()}
>
  <button
    onClick={onClose}
    className="absolute top-4 right-4 text-white/60 hover:text-white z-10"
  >
    <X className="w-6 h-6" />
  </button>
  
  <div className="mt-8 flex justify-center">
    <Image
      src={certificate.certificateUrl}
      alt={`Certificado de ${certificate.title}`}
      width={1200}
      height={800}
      className="w-full max-w-full max-h-[80vh] object-contain rounded-lg"
      priority
      quality={85}
      loading="eager"
    />
  </div>

  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
    <h3 className="text-lg font-semibold">{certificate.title}</h3>
    <p className="text-sm text-slate-300">{certificate.institution}</p>
  </div>
</motion.div>

      </motion.div>
    </AnimatePresence>
  );
};

const CertificationsPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certifications = [
    {
      title: "Desarrollador Web Fullstack - Especialización Frontend",
      institution: "Academia Henry",
      date: "Enero 2025",
      description: "Especialización en desarrollo frontend con enfoque en React.js, Next.js y tecnologías modernas de desarrollo web.",
      location: "Remote",
      type: "Título",
      certificateUrl: "/certificates/SoyHenry.webp"
    },
    {
      title: "Desarrollador Web Fullstack",
      institution: "Universidad Tecnológica Nacional BA",
      date: "Junio 2023",
      description: "Desarrollo de aplicaciones web completas utilizando tecnologías modernas como React, Node.js y bases de datos SQL/NoSQL.",
      location: "Buenos Aires, Argentina",
      type: "Título",
      certificateUrl: "/certificates/fullStackUTN.webp"
    },
    {
      title: "Desarrollador Web Front-End",
      institution: "Universidad Tecnológica Nacional BA",
      date: "Diciembre 2022",
      description: "Desarrollo de aplicaciones web completas utilizando tecnologías modernas como React, Node.js y bases de datos SQL/NoSQL.",
      location: "Buenos Aires, Argentina",
      type: "Título",
      certificateUrl: "/certificates/frontEndUTN.webp"
    },
    {
      title: "Front End Developer",
      institution: "Mimo",
      date: "Mayo 2024",
      description: "Curso especializado en fundamentos de desarrollo web y backend.",
      location: "Online",
      type: "Certificación",
      certificateUrl: "/certificates/frontEndMimo.webp"
    },
    {
      title: "CSS",
      institution: "Mimo",
      date: "Mayo 2024",
      description: "Curso especializado en fundamentos de desarrollo web y backend.",
      location: "Online",
      type: "Certificación",
      certificateUrl: "/certificates/cssMimo.webp"
    },
    {
      title: "JavaScript",
      institution: "Mimo",
      date: "Mayo 2024",
      description: "Curso especializado en fundamentos de desarrollo web y backend.",
      location: "Online",
      type: "Certificación",
      certificateUrl: "/certificates/jsMimo.webp"
    },
    {
      title: "SQL",
      institution: "Mimo",
      date: "Mayo 2024",
      description: "Curso especializado en fundamentos de desarrollo web y backend.",
      location: "Online",
      type: "Certificación",
      certificateUrl: "/certificates/sqlMimo.webp"
    },
    {
      title: "HTML",
      institution: "Mimo",
      date: "Mayo 2024",
      description: "Curso especializado en fundamentos de desarrollo web y backend.",
      location: "Online",
      type: "Certificación",
      certificateUrl: "/certificates/htmlMimo.webp"
    },
    {
      title: "Marketing y Redes Sociales",
      institution: "Google Activate",
      date: "2023",
      description: "Formación en marketing digital y gestión de redes sociales.",
      location: "Online",
      type: "Certificación",
      certificateUrl: "/certificates/google-cert.webp"
    }
  ];

  return (
    <div className="min-h-screen w-full py-16 px-4">
      <Logo />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Educación y Certificaciones</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Formación académica y certificaciones profesionales en desarrollo web y tecnologías digitales.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white/80 shadow-glow" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`
                  ml-8 md:ml-0 w-full md:w-[calc(50%-2rem)]
                  ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                  p-6 rounded-xl
                  bg-gradient-to-br from-slate-800/50 to-slate-900/50
                  hover:shadow-lg hover:shadow-white/5
                  transition-all duration-300
                `}
              >
                <div className="flex items-center gap-2 mb-2">
                  {cert.type === "Título" ? 
                    <GraduationCap className="w-5 h-5 text-blue-400" /> :
                    <BookOpen className="w-5 h-5 text-purple-400" />
                  }
                  <span className="text-sm font-medium text-blue-400/80">
                    {cert.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-slate-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {cert.location}
                  </div>
                </div>

                <p className="text-slate-400 mb-4">{cert.description}</p>
                <p className="text-slate-500 text-sm mb-4">{cert.institution}</p>

                {cert.certificateUrl && (
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Award className="w-4 h-4" />
                    Ver certificado
                  </button>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        certificate={selectedCertificate}
      />
      <Buttons />
    </div>
  );
};

export default CertificationsPage;