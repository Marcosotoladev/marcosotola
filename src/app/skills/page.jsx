"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Palette, Globe, Layout, Terminal } from 'lucide-react';
import Logo from '../../components/Logo/Logo';
import Buttons from './Buttons'

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript/ES6", level: 88 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind", level: 85 },
        { name: "Bootstrap", level: 80 },
      ],
      bgColor: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Backend Development",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: "Express", level: 82 },
        { name: "PHP", level: 75 },
        { name: "Node.js", level: 85 },
        { name: "Nodemailer", level: 80 },
      ],
      bgColor: "from-emerald-500/20 to-cyan-500/20"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "PgAdmin", level: 80 },
        { name: "MongoDB", level: 78 },
        { name: "Firebase", level: 75 },
      ],
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Development Tools",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Vite", level: 85 },
        { name: "Git", level: 82 },
        { name: "Vercel", level: 88 },
      ],
      bgColor: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Design Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 80 },
        { name: "Canva", level: 85 },
        { name: "Capcut", level: 75 },
        { name: "Inshot", level: 70 },
      ],
      bgColor: "from-pink-500/20 to-rose-500/20"
    },
    {
      title: "Web Platforms",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "WordPress", level: 75 },
        { name: "Wix", level: 70 },
        { name: "Google Sites", level: 80 },
      ],
      bgColor: "from-teal-500/20 to-green-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen w-full py-16 px-4">
      <Logo />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Habilidades Técnicas</h1>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Un conjunto completo de habilidades en desarrollo web full stack, 
          desde el frontend hasta el backend, bases de datos y herramientas de diseño.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`
              p-6 rounded-xl backdrop-blur-sm
              bg-gradient-to-br ${category.bgColor}
              hover:shadow-lg hover:shadow-white/5
              transition-all duration-300
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-white/30 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-16"
      >
        <p className="text-slate-400 italic">
          * Las habilidades se actualizan constantemente a través del aprendizaje continuo y la práctica
        </p>
      </motion.div>

      <Buttons />
    </div>
  );
};

export default SkillsPage;