"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations, useLocale } from "@/lib/i18n-client"

type Experience = {
  company: string
  role: string
  period: string
  image: string
  attachedFile: string
}

const experiences: Experience[] = [
  {
    company: "Yasmine Engineering Systems",
    role: "Software Engineer (CDI)",
    period: "01/06/2022 - Present",
    image: "https://lh3.googleusercontent.com/p/AF1QipPh77heXzFa26ay65gXmidUgWb3nV1nC1iQjCrg=s680-w680-h510",
    attachedFile: "https://www.rdacell.com/newimages/coming-soon.jpg",
  },
  {
    company: "Yasmine Engineering Systems",
    role: "Software Developer (Intern)",
    period: "Feb 2022 - Juin 2022",
    image: "https://lh3.googleusercontent.com/p/AF1QipPh77heXzFa26ay65gXmidUgWb3nV1nC1iQjCrg=s680-w680-h510",
    attachedFile: "https://www.rdacell.com/newimages/coming-soon.jpg",
  },
  {
    company: "ISIE",
    role: "Voting Process Member",
    period: "2022 - 2022",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-9okODzJNq6I03dKSEJrso569lGGMkNQLg&s",
    attachedFile: "https://www.rdacell.com/newimages/coming-soon.jpg",
  },
  {
    company: "Tunisair",
    role: "Web Application Developer (Intern)",
    period: "28/06/2021 - 31/07/2021",
    image: "https://pbs.twimg.com/profile_images/1251261871/tunisair_400x400.jpg",
    attachedFile: "/images/experience/tunisair.jpg",
  },
]

const calculateExactExperience = (startDate: string): string => {
  const now = new Date()
  const start = new Date(startDate)

  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  let days = now.getDate() - start.getDate()
  let hours = now.getHours() - start.getHours()
  let minutes = now.getMinutes() - start.getMinutes()
  let seconds = now.getSeconds() - start.getSeconds()

  // Handle the minutes, hours, days, months, years adjustment
  if (seconds < 0) {
    seconds += 60
    minutes--
  }
  if (minutes < 0) {
    minutes += 60
    hours--
  }
  if (hours < 0) {
    hours += 24
    days--
  }

  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0)
    days += previousMonth.getDate()
    months--
  }
  if (months < 0) {
    months += 12
    years--
  }

  return `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
}

// Function to parse dates from different formats
const parseDate = (dateStr: string): Date => {
  // Handle different date formats
  if (dateStr === "Present") {
    return new Date() // Current date for "Present"
  }

  // Try DD/MM/YYYY format
  if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/").map(Number)
    return new Date(year, month - 1, day)
  }

  // Try Month YYYY format (e.g., "Feb 2022")
  if (dateStr.includes(" ")) {
    const [month, year] = dateStr.split(" ")
    const monthMap: Record<string, number> = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Juin: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    }
    return new Date(Number.parseInt(year), monthMap[month] || 0, 1)
  }

  // Just year
  return new Date(Number.parseInt(dateStr), 0, 1)
}

// Calculate total experience in months
const calculateTotalExperience = (): { years: number; months: number } => {
  let totalMonths = 0

  experiences.forEach((exp) => {
    const [start, end] = exp.period.split(" - ")
    const startDate = parseDate(start)
    const endDate = parseDate(end)

    // Calculate months between dates
    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())

    totalMonths += Math.max(0, months) // Ensure we don't add negative months
  })

  // Convert to years and months
  const years = Math.floor(totalMonths / 12)
  const remainingMonths = totalMonths % 12

  return { years, months: remainingMonths }
}

export default function Experience() {
  const { locale } = useLocale()
  const { t } = useTranslations(locale)
  
  const [currentExperience, setCurrentExperience] = useState<string>(calculateExactExperience("2022-06-01"))
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [totalExperience, setTotalExperience] = useState<{ years: number; months: number }>({ years: 0, months: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperience(calculateExactExperience("2022-06-01"))
    }, 1000)

    // Calculate total experience
    setTotalExperience(calculateTotalExperience())

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="experience" className="py-12 md:py-12 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0" />
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">👨🏻‍💼 {t('experience.title')}</h2>
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <motion.div className="relative group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-70"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative px-4 py-2 bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded-lg border border-blue-400/30 shadow-xl backdrop-blur-sm flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-blue-100 mr-1"></span>

              <div className="flex items-center">
                <motion.div
                  className="flex items-center justify-center min-w-[120px]"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(30, 64, 175, 0.7)" }}
                >
                  <span className="text-xl font-bold text-white">+</span>
                  <span className="text-xl font-bold text-white text-2xl md:text-3xl">{totalExperience.years}</span>
                  <span className="ml-1 text-blue-100 font-medium text-3xl md:text-2xl">{t('experience.years')}</span>

                </motion.div>

              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    "0 0 0 0 rgba(250, 204, 21, 0.7)",
                    "0 0 0 10px rgba(250, 204, 21, 0)",
                    "0 0 0 0 rgba(250, 204, 21, 0.7)",
                  ],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {experiences.map((exp, index) => {
          const [, end] = exp.period.split(" - ")
          const isCurrent = end === "Present"

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
                  {exp.company}
                  <button
                    onClick={() => setSelectedImage(exp.attachedFile)}
                    className="ml-2 p-1 bg-gray-700 rounded-full shadow-md hover:bg-gray-600 transition duration-200"
                  >
                    📜
                  </button>
                </h3>
                <p className="text-base md:text-lg text-gray-300 mb-1">{exp.role}</p>
                <p className="text-sm md:text-base text-gray-400">
                  {exp.period}{" "}
                  {isCurrent ? (
                    <motion.span
                      className="font-mono bg-gray-800 px-2 py-1 rounded text-yellow-400 shadow-lg inline-block mt-1 md:mt-0 ml-1"
                      animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    >
                      ⏰ {currentExperience}
                    </motion.span>
                  ) : (
                    <span className="font-mono bg-gray-800 px-2 py-1 rounded text-gray-400 inline-block mt-1 md:mt-0 ml-1">
                      {t('experience.current')}
                    </span>
                  )}
                </p>
              </div>
              <div className="order-1 md:order-2 mb-4 md:mb-0 md:ml-6">
                {exp.company === "Yasmine Engineering Systems" ? (
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                    <a
                      href="https://www.yasminees.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 transform"
                      title="Visit Yasmine Engineering Systems website"
                    >
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.company}
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
                ) : exp.company === "ISIE" ? (
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                    <a
                      href="https://www.isie.tn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 transform"
                      title="Visit ISIE website"
                    >
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="w-16 h-16 md:w-20 md:h-20 rounded object-cover shadow-md border-2 border-green-400/30 md:border-transparent md:hover:border-green-400 transition-all duration-300"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-lg">
                        <span className="text-white text-xs">🔗</span>
                      </div>
                      <div className="absolute inset-0 bg-green-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </a>
                  </div>
                ) : exp.company === "Tunisair" ? (
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                    <a
                      href="https://www.tunisair.com/fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300 transform"
                      title="Visit Tunisair website"
                    >
                      <Image
                        src={exp.image || "/placeholder.svg"}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="w-16 h-16 md:w-20 md:h-20 rounded object-cover shadow-md border-2 border-red-400/30 md:border-transparent md:hover:border-red-400 transition-all duration-300"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 shadow-lg">
                        <span className="text-white text-xs">🔗</span>
                      </div>
                      <div className="absolute inset-0 bg-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </a>
                  </div>
                ) : (
                  <Image
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="w-16 h-16 md:w-20 md:h-20 rounded object-cover shadow-md"
                  />
                )}
              </div>
            </motion.div>
          )
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
  )
}

