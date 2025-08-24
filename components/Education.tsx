"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useTranslations, useLocale } from "@/lib/i18n-client";

const educations = [
  {
    institution: "Esprit",
    degree: "Engineering Program in Software Engineering and Information Systems",
    period: "2022 – 01/06/2026",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIz35xRMeDZwRhvFLDuLK_-AG8SkBsDsx_bg&s",
    attachedFile: "https://www.rdacell.com/newimages/coming-soon.jpg",
    isCountdown: true,       // Marks this entry to use a countdown timer
    endDate: "2026-06-01",     // Target end date (ISO format)
    degreeKey: "espritDegree", // Key for translation
  },
  {
    institution: "FSEGN",
    degree:
      "National Bachelor's in Management Informatics (Specialization: Business Intelligence)",
    attachedFile: "/images/Education/Licence.png",
    period: "2019 – 2022",
    image:
      "https://ccsav.ca/wp-content/uploads/2024/02/logo-FSEG.png",
    degreeKey: "fsegnDegree", // Key for translation
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
  const { locale } = useLocale()
  const { t } = useTranslations(locale)
  
  // Set up the countdown timer for the Esprit entry.
  const [countdown, setCountdown] = useState(
    calculateCountdown("2026-06-01")
  );
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown("2026-06-01"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="education"
      className="py-6 md:py-6 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0" />
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-blue-400">
        🎓 {t('education.title')}
      </h2>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {educations.map((edu, index) => {
          const isCountdownActive = edu.isCountdown;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="mb-6 md:mb-10 p-4 md:p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col md:flex-row items-start md:items-center"
            >
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-blue-400 flex items-center">
                  {edu.institution}
                  <button
                    onClick={() => setSelectedImage(edu.attachedFile)}
                    className="ml-2 p-1 bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                  >
                    📜
                  </button>
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-1">
                  {t(`education.${edu.degreeKey}`)}</p>
                <p className="text-md text-gray-400">
                  {edu.period}{" "}
                  {isCountdownActive && (
                    <motion.span
                      className="font-mono bg-gray-800 px-2 py-1 rounded text-yellow-400 shadow-lg inline-block mt-1 md:mt-0 ml-1"
                      animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                      {"⏰ " + countdown}
                    </motion.span>


                  )}
                </p>
              </div>
              <div className="order-1 md:order-2 mb-4 md:mb-0 md:ml-6">
                {edu.institution === "Esprit" ? (
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                    <a
                      href="https://www.esprit.tn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 transform"
                      title="Visit ESPRIT website"
                    >
                      <Image
                        src={edu.image}
                        alt={edu.institution}
                        width={64}
                        height={64}
                        className="w-16 h-16 md:w-20 md:h-20 rounded object-cover shadow-md border-2 border-purple-400/30 md:border-transparent md:hover:border-purple-400 transition-all duration-300"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-lg">
                        <span className="text-white text-xs">🔗</span>
                      </div>
                      <div className="absolute inset-0 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </a>
                  </div>
                ) : edu.institution === "FSEGN" ? (
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                    <a
                      href="https://fsegn.rnu.tn/fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 transform"
                      title="Visit FSEGN website"
                    >
                      <Image
                        src={edu.image}
                        alt={edu.institution}
                        width={64}
                        height={64}
                        className="w-16 h-16 md:w-20 md:h-20 rounded object-cover shadow-md border-2 border-blue-400/30 md:border-transparent md:hover:border-blue-400 transition-all duration-300"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-lg">
                        <span className="text-white text-xs">🔗</span>
                      </div>
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </a>
                  </div>
                ) : (
                  <Image
                    src={edu.image}
                    alt={edu.institution}
                    width={64}
                    height={64}
                    className="w-16 h-16 md:w-20 md:h-20 rounded object-cover shadow-md"
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage("")}
        >
          <motion.img
            src={selectedImage}
            alt="Certificate"
            className="max-w-[90%] max-h-[90vh] rounded-lg shadow-xl object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </section>
  );
}
