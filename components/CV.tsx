"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, Eye, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CV() {
  const [showCVModal, setShowCVModal] = useState(false)

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
    setShowCVModal(true)
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
          <h2 className="text-3xl font-bold mb-4 text-blue-400">📄 Curriculum Vitae</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Download or view my comprehensive CV to learn more about my professional background, 
            skills, and achievements in software engineering.
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
                  <p className="text-gray-400">Software Engineer</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Last Updated</p>
                <p className="text-white font-semibold">January 2025</p>
              </div>
            </div>

            {/* CV Summary */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Professional Summary</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Experienced software engineer with expertise in mobile, web, and desktop applications. 
                  Specialized in .NET, Flutter, Angular, and Spring boot development with a strong focus on 
                  delivering high-quality, scalable solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Highlights</h4>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    3+ years of professional experience
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Full-stack development expertise
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Mobile app development with Flutter
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Database design and management
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    
                    International clients: 
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
                <Eye className="h-5 w-5" />
                <span>View CV</span>
              </Button>
              <Button
                onClick={handleDownload}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download PDF</span>
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
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Experience</h4>
              <p className="text-gray-300 text-sm">
                Software Engineer at Yasmine Engineering Systems with expertise in enterprise applications 
                and international client projects across 
                <span className="inline-flex items-left space-x-2 ml-2">
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
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Education</h4>
              <p className="text-gray-300 text-sm">
                Engineering Program in Software Engineering and Information Systems at ESPRIT.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-3">Skills</h4>
              <p className="text-gray-300 text-sm">
                C#, .NET, Flutter, Angular, React, SQL Server, Docker, and more.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* CV Modal */}
      {showCVModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowCVModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Seif Rahmouni - CV</h3>
              <button
                onClick={() => setShowCVModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="h-[calc(90vh-80px)]">
              <iframe
                src="/documents/Seif_Rahmouni_CV.pdf"
                className="w-full h-full"
                title="CV Preview"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
} 