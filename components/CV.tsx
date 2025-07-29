"use client"

import { motion } from "framer-motion"
import { Download, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTranslations, useLocale } from "@/lib/i18n-client"

export default function CV() {
  const { locale } = useLocale()
  const { t } = useTranslations(locale)
  
  const handleDownload = () => {
    // Replace with your actual CV file path
    const cvUrl = "/documents/Seif_Rahmouni_CV.pdf"
    
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = "Seif_Rahmouni_CV.pdf"
    link.target = "_blank"
    
    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleViewCV = () => {
    // Open PDF in new tab/window for better mobile compatibility
    const cvUrl = "/documents/Seif_Rahmouni_CV.pdf"
    window.open(cvUrl, '_blank')
  }

  return (
    <section id="cv" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-400">📄 {t('cv.title')}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('cv.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* CV Preview Card */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Seif Rahmouni</h3>
                  <p className="text-gray-400">{t('hero.title')}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">{t('cv.lastUpdated')}</p>
                <p className="text-white font-semibold">January 2025</p>
              </div>
            </div>

            {/* CV Summary */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{t('cv.professionalSummary')}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('cv.summaryText')}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{t('cv.keyHighlights')}</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {t('cv.experienceYears')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {t('cv.fullStackExpertise')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {t('cv.mobileDevelopment')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {t('cv.databaseDesign')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {t('cv.internationalClients')}
                    <span className="inline-flex items-center space-x-2 ml-2">
                      <div className="flex items-center space-x-1">
                        <Image 
                          src="/flags/morocco.png" 
                          alt="Morocco Flag" 
                          width={20} 
                          height={15}
                          className="rounded-sm"
                        />
                        <span className="text-xs">Morocco</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Image 
                          src="/flags/cote-divoire.png" 
                          alt="Côte d&apos;Ivoire Flag" 
                          width={20} 
                          height={15}
                          className="rounded-sm"
                        />
                        <span className="text-xs">Côte d&apos;Ivoire</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Image 
                          src="/flags/tunisia.png" 
                          alt="Tunisia Flag" 
                          width={20} 
                          height={15}
                          className="rounded-sm"
                        />
                        <span className="text-xs">Tunisia</span>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleViewCV}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span>{t('cv.viewCV')}</span>
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>{t('cv.downloadPDF')}</span>
              </Button>
            </div>
          </div>

          {/* CV Sections Preview */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-3">{t('nav.experience')}</h4>
              <p className="text-gray-300 text-sm">
                {t('cv.experienceText')}
                <span className="inline-flex items-center space-x-2 ml-2">
                  <div className="flex items-center space-x-1">
                    <Image 
                      src="/flags/morocco.png" 
                      alt="Morocco Flag" 
                      width={16} 
                      height={12}
                      className="rounded-sm"
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image 
                      src="/flags/cote-divoire.png" 
                      alt="Côte d&apos;Ivoire Flag" 
                      width={16} 
                      height={12}
                      className="rounded-sm"
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Image 
                      src="/flags/tunisia.png" 
                      alt="Tunisia Flag" 
                      width={16} 
                      height={12}
                      className="rounded-sm"
                    />
                  </div>
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-3">{t('nav.education')}</h4>
              <p className="text-gray-300 text-sm">
                {t('education.espritDegree')} {t('cv.atESPRIT')}.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-3">{t('nav.skills')}</h4>
              <p className="text-gray-300 text-sm">
                {t('cv.skillsText')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 