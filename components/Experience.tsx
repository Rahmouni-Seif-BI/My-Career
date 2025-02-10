"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
const experiences = [
  {
    company: "Yasmine Engineering Systems",
    role: "Software Engineer (CDI)",
    period: "01/06/2022 - Present",
    image: "https://lh3.googleusercontent.com/p/AF1QipPh77heXzFa26ay65gXmidUgWb3nV1nC1iQjCrg=s680-w680-h510",
  },
  {
    company: "Yasmine Engineering Systems",
    role: "Software Developer (Intern)",
    period: "Feb 2022 - Juin 2022",
    image: "https://lh3.googleusercontent.com/p/AF1QipPh77heXzFa26ay65gXmidUgWb3nV1nC1iQjCrg=s680-w680-h510",
  },
  {
    company: "ISIE",
    role: "Voting Process Member",
    period: "2022 - 2022",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-9okODzJNq6I03dKSEJrso569lGGMkNQLg&s",
  },
  {
    company: "Tunisair",
    role: "Web Application Developer (Intern)",
    period: "2021 - 2021",
    image: "https://pbs.twimg.com/profile_images/1251261871/tunisair_400x400.jpg",
  },
];
const calculateExactExperience = (startDate: string) => {
  const now = new Date();
  const start = new Date(startDate);

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  // Adjust seconds and minutes if needed
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }

  // Adjust days and months if needed
  if (days < 0) {
    // Get the number of days in the previous month
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  return `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default function Experience() {
  const [currentExperience, setCurrentExperience] = useState(
    calculateExactExperience("2022-06-01")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperience(calculateExactExperience("2022-06-01"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="experience"
      className="py-12 md:py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0" />
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-blue-400">
        👨🏻‍💼 Work Experience
      </h2>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {experiences.map((exp, index) => {
          const [, end] = exp.period.split(" - ");
          const isCurrent = end === "Present";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="mb-6 md:mb-10 p-4 md:p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col md:flex-row items-start md:items-center"
            >
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-blue-400">
                  {exp.company}
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-1">
                  {exp.role}
                </p>
                <p className="text-sm md:text-base text-gray-400">
                  {exp.period}{" "}
                  {isCurrent ? (
                    <motion.span
                      className="font-mono bg-gray-800 px-2 py-1 rounded text-yellow-400 shadow-lg inline-block mt-1 md:mt-0 ml-1"
                      animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      ⏰ {currentExperience}
                    </motion.span>
                  ) : (
                    <span className="font-mono bg-gray-800 px-2 py-1 rounded text-gray-400 inline-block mt-1 md:mt-0 ml-1">
                      Past experience
                    </span>
                  )}
                </p>
              </div>
              <div className="order-1 md:order-2 mb-4 md:mb-0 md:ml-6">
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={64}
                  height={64}
                  className="w-16 h-16 md:w-20 md:h-20 rounded object-cover shadow-md"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}