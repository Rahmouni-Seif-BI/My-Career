"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

const educations = [
  {
    institution: "Esprit",
    degree: "Engineering Program in Software Engineering and Information Systems",
    period: "2022 – 01/06/2026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIz35xRMeDZwRhvFLDuLK_-AG8SkBsDsx_bg&s",
    isCountdown: true,       // Marks this entry to use a countdown timer
    endDate: "2026-06-01",     // Target end date (ISO format)
  },
  {
    institution: "FSEGN",
    degree:
      "National Bachelor's in Management Informatics (Specialization: Business Intelligence)",
    period: "2019 – 2022",
    image:
      "https://fsegn.rnu.tn/images/social-networks-integrations/og_image_default.jpg",
  }
];

const calculateCountdown = (endDate: string) => {
  const now = new Date();
  const end = new Date(endDate);
  const diff = end.getTime() - now.getTime();

  // If the end date has passed, return a completed message.
  if (diff <= 0) return "Terminé";

  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  let days = Math.floor(totalHours / 24);

  // If the remaining time exceeds a year (365 days), calculate years.
  if (days >= 365) {
    const years = Math.floor(days / 365);
    days = days % 365;
    return `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default function Education() {
  // Set up the countdown timer for the Esprit entry.
  const [countdown, setCountdown] = useState(
    calculateCountdown("2026-06-01")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown("2026-06-01"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="education"
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0" />
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
      🎓 Education
      </h2>
      <div className="max-w-4xl mx-auto relative z-10">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            className="mb-10 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                {edu.institution}
              </h3>
              <p className="text-lg text-gray-300 mb-1">{edu.degree}</p>
              <p className="text-md text-gray-400">
                {edu.period}{" "}
                {edu.isCountdown && (
                  <motion.span
                    className="font-mono bg-gray-800 px-2 py-1 rounded text-yellow-400 shadow-lg"
                    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    {"⏰ " + countdown}
                  </motion.span>
                )}
              </p>
            </div>
            <Image
              src={edu.image}
              alt={edu.institution}
              width={80} // Ajuste selon ton besoin
              height={80}
              className="w-20 h-20 ml-6 rounded object-cover shadow-md"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
