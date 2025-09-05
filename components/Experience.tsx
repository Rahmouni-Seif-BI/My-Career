"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
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

  // Refs for scroll animations
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })


  // InView hooks for staggered animations with mobile-optimized margins
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" })
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" })
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperience(calculateExactExperience("2022-06-01"))
    }, 1000)

    // Calculate total experience
    setTotalExperience(calculateTotalExperience())

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="py-12 md:py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Title Section with enhanced animations */}
      <motion.div 
        ref={titleRef}
        className="mb-8 md:mb-16 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2 
          className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-4 md:mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isTitleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          👨🏻‍💼 {t('experience.title')}
        </motion.h2>
        
        <motion.div
          className="text-base md:text-xl text-gray-300 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t('experience.subtitle')}
        </motion.div>
        {/* Enhanced Stats Section - Mobile Optimized */}
        <motion.div
          ref={statsRef}
          className="inline-block"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div className="relative group">
            {/* Animated background glow - reduced for mobile */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl md:rounded-2xl blur-md md:blur-lg opacity-50 md:opacity-70"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                ease: "easeInOut",
              }}
            />
            
            {/* Main stats container - mobile optimized */}
            <motion.div
              className="relative px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-blue-500/90 rounded-xl md:rounded-2xl border border-blue-400/30 shadow-xl md:shadow-2xl backdrop-blur-sm flex items-center gap-2 md:gap-4"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Experience counter with mobile-optimized animation */}
              <motion.div
                className="flex items-center justify-center min-w-[100px] md:min-w-[140px]"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0 }}
                animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <motion.span 
                  className="text-lg md:text-2xl font-bold text-white"
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  +
                </motion.span>
                <motion.span 
                  className="text-2xl md:text-5xl font-bold text-white mx-1"
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 300 }}
                >
                  {totalExperience.years}
                </motion.span>
                <span className="ml-1 md:ml-2 text-blue-100 font-medium text-sm md:text-2xl">
                  {t('experience.years')}
                </span>
              </motion.div>

              {/* Animated pulse indicator - mobile optimized */}
              <motion.div
                className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7],
                  boxShadow: [
                    "0 0 0 0 rgba(250, 204, 21, 0.5)",
                    "0 0 0 8px rgba(250, 204, 21, 0)",
                    "0 0 0 0 rgba(250, 204, 21, 0.5)",
                  ],
                }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Timeline Section */}
      <motion.div 
        ref={timelineRef}
        className="max-w-6xl mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={isTimelineInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Timeline line - mobile optimized */}
        <motion.div 
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full"
          initial={{ scaleY: 0 }}
          animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          style={{ transformOrigin: "top" }}
        />

        {experiences.map((exp, index) => {
          const [, end] = exp.period.split(" - ")
          const isCurrent = end === "Present"
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={index}
              className="relative mb-8 md:mb-16"
              initial={{ opacity: 0, x: 0, y: 30 }}
              animate={isTimelineInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.15),
                ease: "easeOut"
              }}
            >
              {/* Timeline dot - mobile optimized */}
              <motion.div
                className="absolute left-5 md:left-1/2 top-6 md:top-8 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 md:border-4 border-gray-900 z-10"
                initial={{ scale: 0 }}
                animate={isTimelineInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + (index * 0.15) }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />

              {/* Experience card - mobile optimized */}
              <motion.div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}
                whileHover={{ 
                  scale: 1.01,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="p-4 md:p-8 bg-gradient-to-r from-gray-800/90 to-gray-700/90 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl backdrop-blur-sm border border-gray-600/30 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isTimelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.15) }}
                >
                  {/* Animated background gradient - reduced for mobile */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/3 to-blue-500/3"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Content - mobile optimized layout */}
                  <div className="relative z-10 flex flex-col gap-3 md:gap-4">
                    {/* Company info - mobile optimized */}
                    <div className="flex-1">
                      <motion.h3 
                        className="text-lg md:text-2xl font-bold text-blue-400 mb-1 md:mb-2 flex items-center justify-between"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.4 + (index * 0.15) }}
                      >
                        <span className="flex-1">{exp.company}</span>
                        <motion.button
                          onClick={() => setSelectedImage(exp.attachedFile)}
                          className="ml-2 p-1.5 md:p-2 bg-gray-700/50 rounded-full shadow-md hover:bg-gray-600/50 transition-all duration-300 backdrop-blur-sm"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          📜
                        </motion.button>
                      </motion.h3>
                      
                      <motion.p 
                        className="text-base md:text-xl text-gray-300 mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.5 + (index * 0.15) }}
                      >
                        {exp.role}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-col sm:flex-row sm:items-center gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isTimelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.4, delay: 0.6 + (index * 0.15) }}
                      >
                        <span className="text-sm md:text-base text-gray-400">{exp.period}</span>
                        {isCurrent ? (
                          <motion.span
                            className="font-mono bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-2 py-1 rounded-full text-yellow-400 shadow-lg border border-yellow-500/30 text-xs md:text-sm"
                            animate={{ 
                              opacity: [0.6, 1, 0.6], 
                              scale: [1, 1.02, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(250, 204, 21, 0.3)",
                                "0 0 0 4px rgba(250, 204, 21, 0)",
                                "0 0 0 0 rgba(250, 204, 21, 0.3)"
                              ]
                            }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
                          >
                            ⏰ {currentExperience}
                          </motion.span>
                        ) : (
                          // Only show "Present" text for the current Yasmine Engineering Systems experience
                          exp.company === "Yasmine Engineering Systems" && exp.role === "Software Engineer (CDI)" ? (
                            <span className="font-mono bg-gray-700/50 px-2 py-1 rounded-full text-gray-400 border border-gray-600/30 text-xs md:text-sm">
                              {t('experience.current')}
                            </span>
                          ) : null
                        )}
                      </motion.div>
                    </div>

                    {/* Company logo - mobile optimized */}
                    <motion.div 
                      className="flex justify-center md:justify-end mt-2 md:mt-0"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isTimelineInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + (index * 0.15) }}
                    >
                      {exp.company === "Yasmine Engineering Systems" ? (
                        <div className="relative group">
                          <motion.div 
                            className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"
                            whileHover={{ scale: 1.05 }}
                          />
                          <a
                            href="https://www.yasminees.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 transform"
                            title="Visit Yasmine Engineering Systems website"
                          >
                            <Image
                              src={exp.image || "/placeholder.svg"}
                              alt={exp.company}
                              width={60}
                              height={60}
                              className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover shadow-lg md:shadow-xl border-2 border-blue-400/30 hover:border-blue-400 transition-all duration-300"
                            />
                            <motion.div 
                              className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                              whileHover={{ scale: 1.1 }}
                            >
                              <span className="text-white text-xs">🔗</span>
                            </motion.div>
                          </a>
                        </div>
                      ) : exp.company === "ISIE" ? (
                        <div className="relative group">
                          <motion.div 
                            className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"
                            whileHover={{ scale: 1.05 }}
                          />
                          <a
                            href="https://www.isie.tn/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 transform"
                            title="Visit ISIE website"
                          >
                            <Image
                              src={exp.image || "/placeholder.svg"}
                              alt={exp.company}
                              width={60}
                              height={60}
                              className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover shadow-lg md:shadow-xl border-2 border-green-400/30 hover:border-green-400 transition-all duration-300"
                            />
                            <motion.div 
                              className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                              whileHover={{ scale: 1.1 }}
                            >
                              <span className="text-white text-xs">🔗</span>
                            </motion.div>
                          </a>
                        </div>
                      ) : exp.company === "Tunisair" ? (
                        <div className="relative group">
                          <motion.div 
                            className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"
                            whileHover={{ scale: 1.05 }}
                          />
                          <a
                            href="https://www.tunisair.com/fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 transform"
                            title="Visit Tunisair website"
                          >
                            <Image
                              src={exp.image || "/placeholder.svg"}
                              alt={exp.company}
                              width={60}
                              height={60}
                              className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover shadow-lg md:shadow-xl border-2 border-red-400/30 hover:border-red-400 transition-all duration-300"
                            />
                            <motion.div 
                              className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                              whileHover={{ scale: 1.1 }}
                            >
                              <span className="text-white text-xs">🔗</span>
                            </motion.div>
                          </a>
                        </div>
                      ) : (
                        <Image
                          src={exp.image || "/placeholder.svg"}
                          alt={exp.company}
                          width={60}
                          height={60}
                          className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover shadow-lg md:shadow-xl border-2 border-gray-600/30"
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Enhanced Full-Screen Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage("")}
        >
          <motion.div
            className="relative max-w-[95%] max-h-[95vh]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-full rounded-2xl shadow-2xl object-contain border border-gray-600/30"
              whileHover={{ scale: 1.02 }}
            />
            <motion.button
              className="absolute top-4 right-4 w-10 h-10 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
              onClick={() => setSelectedImage("")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}