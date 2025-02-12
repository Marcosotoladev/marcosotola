"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ClipboardList, MessageSquare, Radio, Calendar, FolderGit } from 'lucide-react';import Image from 'next/image';
import ProjectModal from '../../components/ProyectModal/ProyectModal';
import Logo from '../../components/Logo/Logo';
import Buttons from './Buttons';

const MyWorksPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Peludopolis Veterinaria",
      description: "Autenticación de usuarios, Chatbot, Catálogo de servicios, Tips de cuidados, comunidad: post y comentarios, registro de turnos, integración con Mercadopago.",
      icon: <MessageSquare className="w-6 h-6" />,
      images: [
        "/projects/peludopolis1.webp",
        "/projects/peludopolis2.webp",
        "/projects/peludopolis3.webp",
        "/projects/peludopolis4.webp"
      ],
      technologies: ["Next.js", "Tailwind", "Nest", "PHP"],
      url: "https://peludopolis.vercel.app"
    },
    {
      title: "Dhermica Estética Unisex",
      description: "Página web dinámica y app móvil con autenticación de usuarios, catálogo de servicios, registro de turnos de citas y profesionales.",
      icon: <ShoppingCart className="w-6 h-6" />,
      images: [
        "/projects/dhermica1.webp",
        "/projects/dhermica2.webp",
        "/projects/dhermica3.webp",
        "/projects/dhermica4.webp"
      ],
      technologies: ["React", "CSS Module", "Firebase"],
      url: "https://dhermicaestetica.web.app"
    },
    {
      title: "Obras Twins",
      description: "Web con Seguimiento de diario de obra con posibilidad de entrega de remitos con firma digital, registro de tareas diarias, asistencia de personal, agenda de proveedores, fotos por sector, pedido de materiales, recordatorios.",
      icon: <ClipboardList className="w-6 h-6" />,
      images: [
        "/projects/obras1.webp",
        "/projects/obras2.webp",
        "/projects/obras3.webp",
        "/projects/obras4.webp"
      ],
      technologies: ["React", "Bootstrap", "Firebase"],
      url: "https://obras-twins.web.app"
    },
    {
      title: "Iglesia Monte Santo",
      description: "Web y app con Autenticación de usuarios, Catálogo de servicios, Radio Online, Testimonios y sistema de gestión de contenidos.",
      icon: <Radio className="w-6 h-6" />,
      images: [
        "/projects/iglesia1.webp",
        "/projects/iglesia2.webp",
        "/projects/iglesia3.webp",
        "/projects/iglesia4.webp"
      ],
      technologies: ["React", "Bootstrap", "Firebase"],
      url: "https://casamontesanto.web.app"
    },
    {
      title: "Mantenimiento de Incendio",
      description: "Aplicación móvil con Agenda, Calendario, Registro de clientes recurrentes, Recordatorios y sistema de notificaciones programadas.",
      icon: <Calendar className="w-6 h-6" />,
      images: [
        "/projects/mant1.webp",
        "/projects/mant2.webp",
        "/projects/mant3.webp",
        "/projects/mant4.webp"
      ],
      technologies: ["React", "Bootswatch", "Firebase"],
      url: "https://mantenimiento-incendio.web.app"
    },
    {
      title: "Otros Proyectos",
      description: "Diversos proyectos incluyendo Registro de Cuentas, Agenda, Manual de Procedimientos, Web infantil, entre otras...",
      icon: <FolderGit className="w-6 h-6" />,
      images: [
        "/projects/otros1.webp",
        "/projects/otros2.webp",
        "/projects/otros3.webp",
        "/projects/otros4.webp"
      ],
      technologies: ["React", "Next.js", "Firebase", "Node.js"],
      url: "/projects/otros"
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
        <h1 className="text-4xl font-bold mb-4">Mis Proyectos</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Una selección de los proyectos más destacados que he desarrollado, 
          demostrando mis habilidades en diferentes tecnologías y soluciones.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
      <Buttons />
    </div>
  );
};

export default MyWorksPage;