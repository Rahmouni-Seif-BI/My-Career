"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    company: "Tunisaire",
    role: "Web Application Developer (Intern)",
    period: "2021 - 2021",
    image: "https://pbs.twimg.com/profile_images/1251261871/tunisair_400x400.jpg",
  },
];
const calculateExactExperience = (startDate: any) => {
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
  // Updated the start date to "2022-06-01" to match the new period
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
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0" />
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
      👨🏻‍💼 Work Experience
      </h2>
      <div className="max-w-4xl mx-auto relative z-10">
        {experiences.map((exp, index) => {
          const [start, end] = exp.period.split(" - ");
          // Now check if the experience is ongoing by checking if end === "Present"
          const experienceDuration =
            end === "Present" ? "⏰ " + currentExperience : "Past experience";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="mb-10 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">
                  {exp.company}
                </h3>
                <p className="text-lg text-gray-300 mb-1">{exp.role}</p>
                <p className="text-md text-gray-400">
                  {exp.period}{" "}
                  <motion.span
                    className="font-mono bg-gray-800 px-2 py-1 rounded text-yellow-400 shadow-lg"
                    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    {experienceDuration}
                  </motion.span>
                </p>
              </div>
              <img
                src={exp.image}
                alt={exp.company}
                className="w-20 h-20 ml-6 rounded object-cover shadow-md"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}