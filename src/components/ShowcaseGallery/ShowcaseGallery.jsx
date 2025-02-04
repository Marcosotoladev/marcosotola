"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Code, Link } from 'lucide-react';

const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio showcasing skills and projects",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    image: "/images/project1.png",
    githubLink: "https://github.com/your-portfolio",
    liveLink: "https://yourportfolio.com"
  },
  {
    name: "E-Commerce Platform", 
    description: "Full-stack e-commerce solution with payment integration",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/project2.png",
    githubLink: "https://github.com/your-ecommerce",
    liveLink: "https://yourecommerce.com"
  }
  // Add more projects
];

export default function ProjectAlbum() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-16 px-8">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Project Showcase
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.2, 
              type: "spring", 
              stiffness: 100 
            }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.name} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full grid md:grid-cols-2 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[500px]">
                <Image 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4">{selectedProject.name}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
                  >
                    <Code className="mr-2" /> GitHub
                  </a>
                  <a 
                    href={selectedProject.liveLink} 
                    target="_blank" 
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    <Link className="mr-2" /> Live Site
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}