"use client"

import { motion } from "framer-motion"
import { FaCode, FaDatabase, FaTools, FaServer, FaLaptopCode, FaProjectDiagram } from "react-icons/fa"
import { useTranslations, useLocale } from "@/lib/i18n-client"

const skillsData = [
  {
    categoryKey: "developmentEnvironment",
    icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
    skills: ["Git & SVN", "Windows & Linux", "Visual Studio", "IntelliJ IDEA", "Mantis Tracker", "MS Project"],
  },
  {
    categoryKey: "programmingLanguages",
    icon: <FaCode className="text-yellow-400 text-3xl" />,
    skills: ["C#", "Node.js", "Dart", "JavaScript", "TypeScript"],
  },
  {
    categoryKey: "frameworks",
    icon: <FaProjectDiagram className="text-green-400 text-3xl" />,
    skills: ["Entity Framework", ".NET & .NET Core", "Flutter", "Angular", "React"],
  },
  {
    categoryKey: "databases",
    icon: <FaDatabase className="text-purple-400 text-3xl" />,
    skills: ["SQL Server", "Oracle Database", "MySQL", "PostgreSQL"],
  },
  {
    categoryKey: "applicationServers",
    icon: <FaServer className="text-red-400 text-3xl" />,
    skills: ["IIS", "Apache Tomcat"],
  },
  {
    categoryKey: "toolsAndTesting",
    icon: <FaTools className="text-gray-400 text-3xl" />,
    skills: ["Postman", "Swagger", "Docker", "Kubernetes"],
  },
]

export default function Skills() {
  const { locale } = useLocale()
  const { t } = useTranslations(locale)

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 uppercase tracking-wide">
        {t('skills.title')}
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.categoryKey}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center space-x-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold">{t(`skills.${category.categoryKey}`)}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
