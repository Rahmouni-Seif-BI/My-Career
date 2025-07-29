"use client"

import { useState } from "react"
import { useLocale } from "@/lib/i18n-client"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: 'English', flag: '/flags/etats-unis.png' },
    { code: 'fr', name: 'Français', flag: '/flags/france.png' },
  ]

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="flex items-center space-x-2 text-white hover:bg-gray-700/50 rounded-xl px-3 py-2 transition-all duration-300 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image 
          src={currentLanguage.flag} 
          alt={currentLanguage.code} 
          width={20}
          height={20}
          unoptimized
          className="w-5 h-5 rounded-full border border-gray-400" 
        />
        <span className="hidden sm:block font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown 
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-gray-800/95 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden z-50"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  changeLocale(language.code as 'en' | 'fr')
                  setIsOpen(false)
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-gray-700/50 transition-colors duration-200 ${
                  locale === language.code ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                <Image 
                  src={language.flag} 
                  alt={language.code} 
                  width={20}
                  height={20}
                  unoptimized
                  className="w-5 h-5 rounded-full border border-gray-400" 
                />
                <span className="font-medium">{language.name}</span>
                {locale === language.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
} 