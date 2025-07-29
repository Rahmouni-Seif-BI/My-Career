"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Code, User, GraduationCap, FolderOpen, Wrench, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTranslations, useLocale } from "@/lib/i18n-client"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { locale } = useLocale()
  const { t } = useTranslations(locale)

  const navItems = [
    { name: t('nav.experience'), href: "#experience", icon: User, color: "from-blue-500 to-cyan-400" },
    { name: t('nav.education'), href: "#education", icon: GraduationCap, color: "from-blue-500 to-cyan-400" },
    { name: t('nav.projects'), href: "#projects", icon: FolderOpen, color: "from-blue-500 to-cyan-400" },
    { name: t('nav.skills'), href: "#skills", icon: Wrench, color: "from-blue-500 to-cyan-400" },
    { name: t('nav.cv'), href: "#cv", icon: FileText, color: "from-blue-500 to-cyan-400" },
    { name: t('nav.contact'), href: "#contact", icon: Mail, color: "from-blue-500 to-cyan-400" },
  ]

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl sticky top-0 z-50 border-b border-gray-700/50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-110">
              <Code className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full w-3 h-3 animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-1 -left-1 bg-pink-400 rounded-full w-2 h-2 animate-bounce shadow-lg"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-blue-400/30 rounded-xl"
            ></motion.div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              Seif Rahmouni
            </span>
            <span className="text-xs text-gray-400 font-medium group-hover:text-blue-400 transition-colors duration-300">Software Engineer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white rounded-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className={`relative p-1.5 rounded-lg bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-4 w-4 text-white" />
                    <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="font-medium group-hover:scale-105 transition-transform duration-300">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <motion.div
                    className="absolute inset-0 border border-transparent group-hover:border-blue-400/30 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                </Link>
              </motion.div>
            )
          })}
          
          {/* Language Switcher */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Menu Button and Language Switcher */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <Button 
            variant="ghost" 
            className="text-white hover:bg-gray-700/50 rounded-xl p-2 transition-all duration-300 group" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-800/95 backdrop-blur-sm border-t border-gray-700/50"
        >
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className={`relative p-2 rounded-lg bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-5 w-5 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="font-medium group-hover:scale-105 transition-transform duration-300">{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 right-20 w-2 h-2 bg-blue-400 rounded-full blur-sm"
        ></motion.div>
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 30, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-6 right-40 w-1 h-1 bg-purple-400 rounded-full blur-sm"
        ></motion.div>
      </div>
    </header>
  )
}

