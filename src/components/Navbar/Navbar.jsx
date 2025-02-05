"use client";

import { useState, useEffect } from "react";
import React from "react";
import { FaGithub, FaLinkedin, FaSlack, FaDiscord } from "react-icons/fa";

const ContactMenu = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null; // No renderiza nada hasta que pase 1.5 segundos

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com",
      color: "hover:text-[#2b3137]",
      label: "GitHub",
      hoverBg: "group-hover:bg-[#2b3137]/20",
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com",
      color: "hover:text-[#0077b5]",
      label: "LinkedIn",
      hoverBg: "group-hover:bg-[#0077b5]/10",
    },
    {
      icon: FaSlack,
      href: "https://slack.com",
      color: "hover:text-[#E01E5A]",
      label: "Slack",
      hoverBg: "group-hover:bg-[#E01E5A]/10",
    },
    {
      icon: FaDiscord,
      href: "https://discord.com",
      color: "hover:text-[#5865F2]",
      label: "Discord",
      hoverBg: "group-hover:bg-[#5865F2]/10",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 mt-8 text-white">
        <div className="flex justify-center items-center gap-4 sm:gap-8">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative group
                  p-3 rounded-xl
                  text-foreground/60
                  ${item.color}
                  transition-all duration-500
                  hover:scale-110
                  perspective-1000
                  opacity-0 animate-slide-down
                `}
                style={{
                  transformStyle: "preserve-3d",
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Icon Container */}
                <div className="relative z-10 transition-transform duration-500 group-hover:rotate-y-180">
                  <Icon className="w-8 h-8 sm:w-8 sm:h-8" />
                </div>

                {/* Background Effect */}
                <div
                  className={`
                  absolute inset-0
                  rounded-xl
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  ${item.hoverBg}
                `}
                />

                {/* Tooltip */}
                <span
                  className="
                  absolute -bottom-8 left-1/2 -translate-x-1/2
                  px-2 py-1
                  bg-background
                  text-foreground
                  text-sm
                  rounded-md
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                  border border-foreground/10
                  whitespace-nowrap
                  z-20
                "
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default ContactMenu;
