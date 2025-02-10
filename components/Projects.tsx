"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Code, Calendar, Maximize, Minimize, Globe } from "lucide-react"
import Slider from "react-slick"
import { Project, projects } from "../types/project"
// Import CSS files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/slider-custom.css"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Web")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
    setFullScreenImage(null)
  }

  const handleImageClick = (image: string, index: number) => {
    setFullScreenImage(selectedProject?.fullImages?.[index] || image)
  }

  const closeFullScreenImage = () => {
    setFullScreenImage(null)
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full mb-2 transition-colors ${activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-13xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projects[activeCategory].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer min-h-[500px]"
            onClick={() => handleProjectClick(project)}
          >
            <div className="relative min-h-[480px]">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm">Click to view details</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-start md:items-center justify-center p-0 md:p-4 z-50 overflow-y-auto"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg max-w-6xl w-full relative mx-2 md:mx-auto my-4 md:my-0 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Stays fixed on mobile */}
              <button
                className="fixed md:absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white text-lg z-50 bg-gray-800 rounded-full p-2"
                onClick={closeProjectDetails}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row bg-gray-700">
                {/* Image Slider Section */}
                <div className="md:w-2/3 p-2 md:p-6">
                  <Slider {...sliderSettings} className="custom-slider mb-4 md:mb-6">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-48 md:h-[500px] cursor-pointer"
                        onClick={() => handleImageClick(image, index)}
                      >
                        <Image
                          src={image}
                          alt={`${selectedProject.name} Image ${index + 1}`}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg"
                        />
                        <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-50 rounded-full p-1 md:p-2">
                          <Maximize className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Project Details Section */}
                <div className="md:w-1/3 p-4 md:p-6 bg-gray-800">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
                    {selectedProject.name}
                  </h3>

                  {/* Project Metadata */}
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                    <div className="flex items-center text-gray-300">
                      <Globe className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      <span>{selectedProject.type}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Code className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      <span>{selectedProject.technologies}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      <span>Completed in {selectedProject.completedDate}</span>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="mt-4 md:mt-6">
                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-blue-300">
                      Project Overview
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mt-4 md:mt-6">
                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-blue-300">
                      Key Features
                    </h4>
                    {selectedProject.features && selectedProject.features?.length > 0 ? (
                      <div className="max-h-48 md:max-h-80 overflow-y-auto border border-gray-600 rounded-lg custom-scrollbar">
                        {selectedProject.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center text-white p-3 text-sm md:text-base hover:bg-gray-700 transition-colors" 
                          >
                            <span className="text-yellow-500 mr-2">✔️</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm md:text-base">
                        No specific features listed for this project.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Added overflow-auto and padding so modal is scrollable on mobile
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg max-w-6xl w-full relative overflow-hidden"
              // className="bg-gray-800 rounded-lg max-w-3xl w-full relative  h-96" 

              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg z-10"
                onClick={closeProjectDetails}
              >
                <X size={28} />
              </button>
              <div className="flex flex-col md:flex-row  bg-gray-700">
              <div className="md:w-2/3 p-6">
                  <Slider {...sliderSettings} className="custom-slider mb-6">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        // Use responsive height: smaller on mobile, larger on md and up
                        className="relative h-64 md:h-[600px] cursor-pointer"
                        onClick={() => handleImageClick(image, index)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${selectedProject.name} Image ${index + 1}`}
                          layout="fill"
                          objectFit="contain"
                          className="rounded-lg"
                        />
                        <div className="absolute top-4 right-4 bg-gray-800 bg-opacity-50 rounded-full p-2">
                          <Maximize className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="md:w-1/3 p-6 bg-gray-800 rounded-r-lg">
                  <h3 className="text-3xl font-bold mb-4 text-blue-400">{selectedProject.name}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <Globe className="mr-2 h-5 w-5" />
                      <span>{selectedProject.type}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Code className="mr-2 h-5 w-5" />
                      <span>{selectedProject.technologies}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="mr-2 h-5 w-5" />
                      <span>Completed in {selectedProject.completedDate}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">
                      Project Overview
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">
                      Key Features
                    </h4>
                    {selectedProject.features &&
                    selectedProject.features.length > 0 ? (
                      <div className="h-80 overflow-hidden border border-gray-600 rounded-lg">
                        <List
                          height={320}
                          itemCount={selectedProject.features.length}
                          itemSize={50}
                          width="100%"
                          className="custom-scrollbar"
                        >
                          {({ index, style }) => (
                            <div
                              style={style}
                              className="flex items-center text-white p-4 last:border-none transition-transform transform hover:bg-gray-600 hover:shadow-xl cursor-pointer custom-hover-bg"
                            >
                              <span className="text-yellow-500 mr-3">✔️</span>
                              {selectedProject.features[index] ||
                                "No feature available"}
                            </div>
                          )}
                        </List>
                      </div>
                    ) : (
                      <p className="text-gray-400">
                        No specific features listed for this project.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Added padding so the image modal doesn’t overflow on mobile
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeFullScreenImage}
          >
            <div className="relative w-full h-screen max-h-full">
              <Image
                src={fullScreenImage || "/placeholder.svg"}
                alt="Full-screen image"
                layout="fill"
                objectFit="contain"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-lg"
                onClick={closeFullScreenImage}
              >
                <Minimize size={28} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
