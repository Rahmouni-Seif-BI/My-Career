"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Calendar, MapPin, Users, Award, TrendingUp, Lightbulb, Rocket } from "lucide-react"
import { useTranslations, useLocale } from "@/lib/i18n-client"

type BlogPost = {
  id: string
  title: string
  titleKey: string
  description: string
  descriptionKey: string
  image: string
  date: string
  category: 'achievement' | 'event' | 'project' | 'innovation'
  location?: string
  participants?: number
  technologies?: string[]
  linkedinUrl?: string
  externalUrl?: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Smart Tuni-Checks – Intelligent Bank Check Validator",
    titleKey: "smartTuniChecksTitle",
    description: "Built an AI-powered bank check validation system that automates the entire process with OCR, QR code scanning, and intelligent validation rules. Developed during 3rd year Company Mission at ESPRIT.",
    descriptionKey: "smartTuniChecksDescription",
    image: "/images/Smart/check.png",
    date: "2024-12-15",
    category: "innovation",
    technologies: ["Python", "OpenCV", "FastAPI", "Spring Boot", "Angular", "PostgreSQL", "Ollama"],
    linkedinUrl: "https://www.linkedin.com/posts/seif-rahmouni-0233711b4_ai-smartbanking-ocr-activity-7334942936863768576-nixL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADHjIdsBUtNF85pIgzjtupgUYcVja-6VdkI",
    featured: true
  },
  {
    id: "2",
    title: "Bal des Projets 2025 – ESB",
    titleKey: "balDesProjetsTitle",
    description: "Had the honor of presenting my project at the Bal des Projets at ESB, a landmark event that showcases a year of work, learning, and innovation.",
    descriptionKey: "balDesProjetsDescription",
    image: "/images/Banner/2banner.png",
    date: "2025-01-15",
    category: "event",
    location: "ESB, Tunisia",
    participants: 200,
    linkedinUrl: "https://linkedin.com/posts/your-profile_bal-des-projets-2025"
  },
  {
    id: "3",
    title: "YesREMS Enterprise Solution",
    titleKey: "yesREMSTitle",
    description: "Led development of a comprehensive Real Estate Management System serving 50+ clients across North Africa, improving operational efficiency by 40%.",
    descriptionKey: "yesREMSDescription",
    image: "/images/YesREMS/full_p0.png",
    date: "2024-10-15",
    category: "project",
    technologies: [".NET", "Angular", "SQL Server", "Azure"],
    linkedinUrl: "https://linkedin.com/posts/your-profile_yesrems-enterprise-solution"
  },
  {
    id: "4",
    title: "Innovation Award Winner",
    titleKey: "innovationAwardTitle",
    description: "Received the 'Most Innovative Developer' award at the Tunisian Tech Awards 2024 for contributions to AI and cloud computing solutions.",
    descriptionKey: "innovationAwardDescription",
    image: "/images/Banner/2banner.png",
    date: "2024-09-30",
    category: "achievement",
    location: "Tunis, Tunisia",
    linkedinUrl: "https://linkedin.com/posts/your-profile_innovation-award-2024"
  },
  {
    id: "5",
    title: "DevOps Best Practices Workshop",
    titleKey: "devopsWorkshopTitle",
    description: "Conducted a comprehensive workshop on DevOps best practices, CI/CD pipelines, and containerization for 100+ developers.",
    descriptionKey: "devopsWorkshopDescription",
    image: "/images/Banner/3banner.png",
    date: "2024-08-15",
    category: "event",
    location: "Online",
    participants: 100,
    linkedinUrl: "https://linkedin.com/posts/your-profile_devops-workshop"
  },
  {
    id: "6",
    title: "Microservices Migration Success",
    titleKey: "microservicesTitle",
    description: "Successfully migrated a monolithic application to microservices architecture, reducing deployment time by 70% and improving scalability.",
    descriptionKey: "microservicesDescription",
    image: "/images/SBCMicroservices/full_p0.png",
    date: "2024-07-20",
    category: "project",
    technologies: ["Docker", "Kubernetes", "Spring Boot", "MongoDB"],
    linkedinUrl: "https://linkedin.com/posts/your-profile_microservices-migration"
  }
]

const getCategoryIcon = (category: BlogPost['category']) => {
  switch (category) {
    case 'achievement': return <Award className="w-5 h-5" />
    case 'event': return <Calendar className="w-5 h-5" />
    case 'project': return <Rocket className="w-5 h-5" />
    case 'innovation': return <Lightbulb className="w-5 h-5" />
    default: return <TrendingUp className="w-5 h-5" />
  }
}

const getCategoryColor = (category: BlogPost['category']) => {
  switch (category) {
    case 'achievement': return 'from-yellow-500 to-orange-500'
    case 'event': return 'from-blue-500 to-purple-500'
    case 'project': return 'from-green-500 to-teal-500'
    case 'innovation': return 'from-pink-500 to-red-500'
    default: return 'from-gray-500 to-slate-500'
  }
}

const getCategoryLabel = (category: BlogPost['category'], locale: string) => {
  const labels = {
    en: {
      achievement: 'Achievement',
      event: 'Event',
      project: 'Project',
      innovation: 'Innovation'
    },
    fr: {
      achievement: 'Réussite',
      event: 'Événement',
      project: 'Projet',
      innovation: 'Innovation'
    }
  }
  return labels[locale as keyof typeof labels]?.[category] || category
}

export default function Blogs() {
  const { locale } = useLocale()
  const { t } = useTranslations(locale)
  const [selectedCategory, setSelectedCategory] = useState<BlogPost['category'] | 'all'>('all')

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const categories = ['all', 'achievement', 'event', 'project', 'innovation'] as const

  return (
    <section id="blogs" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 {t('blogs.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('blogs.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
              }`}
            >
              {category === 'all' ? '✨ All' : `${getCategoryIcon(category)} ${getCategoryLabel(category, locale)}`}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        ⭐ {t('blogs.featured')}
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1`}>
                      {getCategoryIcon(post.category)}
                      {getCategoryLabel(post.category, locale)}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={t(`blogs.${post.titleKey}`)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                      {post.location && (
                        <>
                          <MapPin className="w-4 h-4" />
                          {post.location}
                        </>
                      )}
                      {post.participants && (
                        <>
                          <Users className="w-4 h-4" />
                          {post.participants}+ participants
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                      {t(`blogs.${post.titleKey}`)}
                    </h3>

                    <p className="text-gray-300 mb-4">
                      {t(`blogs.${post.descriptionKey}`)}
                    </p>

                    {/* Technologies */}
                    {post.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {post.linkedinUrl && (
                        <a
                          href={post.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          LinkedIn
                        </a>
                      )}
                      {post.externalUrl && (
                        <a
                          href={post.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t('blogs.viewMore')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t('blogs.cta.title')}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('blogs.cta.description')}
            </p>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              {t('blogs.cta.button')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

