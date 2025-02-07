"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Globe, Code, Calendar, Maximize, Minimize } from "lucide-react"
import Slider from "react-slick"
import type { Project, ProjectCategories } from "../types/project"
import { FixedSizeList as List } from "react-window";

// Import CSS files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/slider-custom.css"

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} z-10 before:content-[''] left-2`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronLeft className="w-8 h-8 text-white bg-gray-800 bg-opacity-50 rounded-full p-1" />
    </div>
  )
}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} z-10 before:content-[''] right-2`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronRight className="w-8 h-8 text-white bg-gray-800 bg-opacity-50 rounded-full p-1" />
    </div>
  )
}

const projects: ProjectCategories = {
  Web: [
    {
      name: "Yes REMS",
      images: [
        "/images/YesREMS/p0.png", "/images/YesREMS/p1.png", "/images/YesREMS/p2.png",
        "/images/YesREMS/p3.png", "/images/YesREMS/p4.png", "/images/YesREMS/p5.png",
        "/images/YesREMS/p6.png", "/images/YesREMS/p7.png", "/images/YesREMS/p8.png",
        "/images/YesREMS/p9.png", "/images/YesREMS/p10.png", "/images/YesREMS/p11.png",
        "/images/YesREMS/p12.png", "/images/YesREMS/p13.png", "/images/YesREMS/p14.png", "/images/YesREMS/p15.png"
      ],
      fullImages: [
        "/images/YesREMS/full_p0.png", "/images/YesREMS/full_p1.png", "/images/YesREMS/full_p2.png",
        "/images/YesREMS/full_p3.png", "/images/YesREMS/full_p4.png", "/images/YesREMS/full_p5.png",
        "/images/YesREMS/full_p6.png", "/images/YesREMS/full_p7.png", "/images/YesREMS/full_p8.png",
        "/images/YesREMS/full_p9.png", "/images/YesREMS/full_p10.png", "/images/YesREMS/full_p11.png",
        "/images/YesREMS/full_p12.png", "/images/YesREMS/full_p13.png", "/images/YesREMS/full_p14.png", "/images/YesREMS/full_p15.png"
      ],
      description: "ERP System for Request, Stock, Warehouse, and Purchasing Management.",
      type: "Web Application",
      technologies: "Angular, .Net, SQL Server",
      completedDate: "2024",
      features: [
        "Request Management",
        "  Detailed Request",
        "Needs Management",
        "Movement Documents",
        "  Entry Document",
        "  Exit Document",
        "Stock Management",
        "  Transfers",
        "  Inventories",
        "  Movements",
        "Stock Status Global",
        "Stock Status By Warehouse",
        "Stock Status By Item",
        "Warehouse Management",

        "Purchasing Module:",
        "Item Classification",
        "  Categories",
        "  Subcategories",
        "  Items"
      ]
    },
    {
      name: "Yes LIMS",
      images: [
        "/images/YesLIMS/p0.png", "/images/YesLIMS/p1.png", "/images/YesLIMS/p2.png",
        "/images/YesLIMS/p3.png", "/images/YesLIMS/p4.png", "/images/YesLIMS/p5.png",
        "/images/YesLIMS/p6.png", "/images/YesLIMS/p7.png", "/images/YesLIMS/p8.png", "/images/YesLIMS/p9.png"
      ],
      fullImages: [
        "/images/YesLIMS/full_p0.png", "/images/YesLIMS/full_p1.png", "/images/YesLIMS/full_p2.png",
        "/images/YesLIMS/full_p3.png", "/images/YesLIMS/full_p4.png", "/images/YesLIMS/full_p5.png",
        "/images/YesLIMS/full_p6.png", "/images/YesLIMS/full_p7.png", "/images/YesLIMS/full_p8.png", "/images/YesLIMS/full_p9.png"
      ],
      description: "A Laboratory Information Management System for efficient lab operations.",
      type: "Web Application",
      technologies: "React, Node.js, MongoDB",
      completedDate: "2023",
    },
    {
      name: "Yes STL",
      images: [
        "/images/YesSTL/p0.png", "/images/YesSTL/p1.png", "/images/YesSTL/p2.png",
        "/images/YesSTL/p3.png", "/images/YesSTL/p4.png", "/images/YesSTL/p5.png",
        "/images/YesSTL/p6.png", "/images/YesSTL/p7.png", "/images/YesSTL/p8.png",
        "/images/YesSTL/p9.png", "/images/YesSTL/p10.png", "/images/YesSTL/p11.png",
        "/images/YesSTL/p12.png", "/images/YesSTL/p13.png"
      ],
      fullImages: [
        "/images/YesSTL/full_p0.png", "/images/YesSTL/full_p1.png", "/images/YesSTL/full_p2.png",
        "/images/YesSTL/full_p3.png", "/images/YesSTL/full_p4.png", "/images/YesSTL/full_p5.png",
        "/images/YesSTL/full_p6.png", "/images/YesSTL/full_p7.png", "/images/YesSTL/full_p8.png",
        "/images/YesSTL/full_p9.png", "/images/YesSTL/full_p10.png", "/images/YesSTL/full_p11.png",
        "/images/YesSTL/full_p12.png", "/images/YesSTL/full_p13.png"
      ],
      description: "A web application for managing and tracking shipments.",
      type: "Web Application",
      technologies: "React, Node.js, MongoDB",
      completedDate: "2023",
    },
    {
      name: "AI dress recommendation",
      images: [
        "/images/AIDressRecommendation/p0.png",
        "/images/AIDressRecommendation/p1.png",
      ],
      fullImages: [
        "/images/AIDressRecommendation/full_p0.png",
        "/images/AIDressRecommendation/full_p1.png",
      ],
      description: "An AI-powered dress recommendation system using Python.",
      type: "Web Application",
      technologies: "Python, TensorFlow, React",
      completedDate: "2023",
    },
    {
      name: "SBC",
      images: ["/images/SBC/p0.png", "/images/SBC/p1.png", "/images/SBC/p2.png", "/images/SBC/p3.png"],
      fullImages: [
        "/images/SBC/full_p0.png",
        "/images/SBC/full_p1.png",
        "/images/SBC/full_p2.png",
        "/images/SBC/full_p3.png",
      ],
      description: "A Single Board Computer management interface.",
      type: "Web application",
      technologies: "React, Node.js",
      completedDate: "2023",
    },
    {
      name: "Hotel reservation",
      images: [
        "/images/HotelReservation/p0.png", "/images/HotelReservation/p1.png", "/images/HotelReservation/p2.png",
        "/images/HotelReservation/p3.png", "/images/HotelReservation/p4.png", "/images/HotelReservation/p5.png"
      ],
      fullImages: [
        "/images/HotelReservation/full_p0.png", "/images/HotelReservation/full_p1.png", "/images/HotelReservation/full_p2.png",
        "/images/HotelReservation/full_p3.png", "/images/HotelReservation/full_p4.png", "/images/HotelReservation/full_p5.png"
      ],
      description: "A web-based hotel reservation system with booking management.",
      type: "Web Application",
      technologies: "React, Node.js, MongoDB",
      completedDate: "2023",
    },
    {
      name: "Real-time chat application",
      images: ["/images/RealTimeChat/p0.png", "/images/RealTimeChat/p1.png", "/images/RealTimeChat/p2.png"],
      fullImages: [
        "/images/RealTimeChat/full_p0.png",
        "/images/RealTimeChat/full_p1.png",
        "/images/RealTimeChat/full_p2.png",
        "/images/RealTimeChat/full_p3.png",
      ],
      description: "A web-based chat application with real-time messaging capabilities.",
      type: "Web Application",
      technologies: "React, Socket.IO",
      completedDate: "2023",
    },
    {
      name: "Center camping MVC",
      images: ["/images/CenterCampingMVC/p0.png", "/images/CenterCampingMVC/p1.png", "/images/CenterCampingMVC/p2.png"],
      fullImages: [
        "/images/CenterCampingMVC/full_p0.png",
        "/images/CenterCampingMVC/full_p1.png",
        "/images/CenterCampingMVC/full_p2.png",
      ],
      description: "An MVC version of the Camping center project.",
      type: "Web Application",
      technologies: "React, Node.js, MongoDB",
      completedDate: "2023",
    },
    {
      name: "Info-Vision-Covid_Website",
      images: ["/images/InfoVisionCovid/p0.png",
        "/images/InfoVisionCovid/p1.png"],
      fullImages: [
        "/images/InfoVisionCovid/full_p0.png",
        "/images/InfoVisionCovid/full_p1.png",
      ],
      description: "A website providing COVID-19 information and statistics.",
      type: "Web Application",
      technologies: "React, Node.js",
      completedDate: "2023",
    },
  ],
  Mobile: [
    {
      name: "CRM OMRAN Mobile",
      images: [
        "/images/OmranCRM/p0.png",
        "/images/OmranCRM/p1.png",
        "/images/OmranCRM/p2.png",
        "/images/OmranCRM/p3.png",
        "/images/OmranCRM/p4.png",
        "/images/OmranCRM/p5.png",
      ],
      fullImages: [
        "/images/OmranCRM/full_p0.png",
        "/images/OmranCRM/full_p1.png",
        "/images/OmranCRM/full_p2.png",
        "/images/OmranCRM/full_p3.png",
        "/images/OmranCRM/full_p4.png",
        "/images/OmranCRM/full_p5.png",
      ],
      description: "A mobile app for real estate management and property listings.",
      type: "Mobile application",
      technologies: "Flutter, Dart, C#, .Net, OpenApi",
      completedDate: "2023",
      features: [
        "Call Log Integration",
        "Add Prospects from Recent Calls",
        "Claims Management",
        "Hierarchy Building Zone: A.1, A.2, ...",
        "Prospects and Prospections",
        "Invoices Deadlines Management",
        "Availability of property ",
        "Task and Meeting Management",
        "Task Assignment and Scheduling",
        "Floor Plan Management",
        "Time Tracking"
      ]
      
    },
    {
      name: "Application for Interaction with Architectural Plans of Real Estate Projects",
      images: ["/images/FloorPlan/p0.png", "/images/FloorPlan/p1.png", "/images/FloorPlan/p2.png"],
      fullImages: ["/images/FloorPlan/full_p0.png", "/images/FloorPlan/full_p1.png", "/images/FloorPlan/full_p2.png"],
      description: "We offer a mobile application for dynamic zoning and problem-solving in real estate projects.",
      type: "Mobile application",
      technologies: "Flutter, Dart, C#, .Net, OpenApi, REST API",
      completedDate: "2022",
      features: [
        "Dynamic Zoning Management",
        "Real-Time Problem Solving",
        "Team Collaboration",
        "Interactive Project Visualization",
        "Geolocation Integration",
        "Reporting and Analytics",
        "Document Management",
        "Task Tracking",
        "User Roles and Permissions",
        "Notifications and Alerts",
        "Data Integration"
      ]      
    },
    {
      name: "Seif-Delivery-Food",
      images: ["/images/Food/p0.png", "/images/Food/p1.png", "/images/Food/p2.png"],
      fullImages: ["/images/Food/full_p0.png", "/images/Food/full_p1.png", "/images/Food/full_p2.png"],
      description: "A food delivery app with real-time tracking and order management.",
      type: "Mobile application",
      technologies: "Android, SQL, PHP",
      completedDate: "2022",
      features: [
        "User-Friendly Interface",
        "Easy navigation for users",
        "Restaurant Menu Integration",
        "Payment Integration",
        "Push Notifications",
        "Track previous orders",
        "Ratings and Reviews",
        "Admin Panel",
        "Manage orders",
        "Manage users"
      ]
    },
  ],

  Desktop: [
    {
      name: "Yes API (BC)",
      images: ["/images/YesAPIBC/p0.png", "/images/YesAPIBC/p1.png", "/images/YesAPIBC/p2.png"],
      fullImages: ["/images/YesAPIBC/full_p0.png", "/images/YesAPIBC/full_p1.png", "/images/YesAPIBC/full_p2.png"],
      description: "A desktop application for managing APIs with BC integration.",
      type: "Desktop application",
      technologies: "Electron, Node.js",
      completedDate: "2023",
    },
    {
      name: "OMRAN Module stock",
      images: ["/images/OmranModuleStock/p0.png", "/images/OmranModuleStock/p1.png", "/images/OmranModuleStock/p2.png"],
      fullImages: [
        "/images/OmranModuleStock/full_p0.png",
        "/images/OmranModuleStock/full_p1.png",
        "/images/OmranModuleStock/full_p2.png",
      ],
      description: "A stock management module for the OMRAN system.",
      type: "Desktop Application",
      technologies: "Electron, Node.js",
      completedDate: "2023",
    },
    {
      name: "OMRAN Générateur",
      images: ["/images/OmranGenerateur/p0.png", "/images/OmranGenerateur/p1.png", "/images/OmranGenerateur/p2.png"],
      fullImages: [
        "/images/OmranGenerateur/full_p0.png",
        "/images/OmranGenerateur/full_p1.png",
        "/images/OmranGenerateur/full_p2.png",
      ],
      description: "A code generator for the OMRAN system.",
      type: "Desktop Application",
      technologies: "Electron, Node.js",
      completedDate: "2023",
    },
    {
      name: "YesBS",
      images: ["/images/YesBS/p0.png", "/images/YesBS/p1.png", "/images/YesBS/p2.png"],
      fullImages: ["/images/YesBS/full_p0.png", "/images/YesBS/full_p1.png", "/images/YesBS/full_p2.png"],
      description: "A Business Suite application for desktop environments.",
      type: "Desktop Application",
      technologies: "Electron, Node.js",
      completedDate: "2023",
    },
    {
      name: "Service generation automation",
      images: [
        "/images/ServiceGenerationAutomation/p0.png",
        "/images/ServiceGenerationAutomation/p1.png",
        "/images/ServiceGenerationAutomation/p2.png",
      ],
      fullImages: [
        "/images/ServiceGenerationAutomation/full_p0.png",
        "/images/ServiceGenerationAutomation/full_p1.png",
        "/images/ServiceGenerationAutomation/full_p2.png",
      ],
      description: "An automation tool for generating services for mobile and web.",
      type: "Desktop Application",
      technologies: "Python",
      completedDate: "2023",
    },
    {
      name: "YesBS server deployment automation",
      images: ["/images/YesBSDeployment/p0.png", "/images/YesBSDeployment/p1.png", "/images/YesBSDeployment/p2.png"],
      fullImages: [
        "/images/YesBSDeployment/full_p0.png",
        "/images/YesBSDeployment/full_p1.png",
        "/images/YesBSDeployment/full_p2.png",
      ],
      description: "An automation tool for deploying YesBS servers.",
      type: "Desktop Application",
      technologies: "Python",
      completedDate: "2023",
    },
    {
      name: "Client-side application deployment automation",
      images: [
        "/images/ClientDeploymentAutomation/p0.png",
        "/images/ClientDeploymentAutomation/p1.png",
        "/images/ClientDeploymentAutomation/p2.png",
      ],
      fullImages: [
        "/images/ClientDeploymentAutomation/full_p0.png",
        "/images/ClientDeploymentAutomation/full_p1.png",
        "/images/ClientDeploymentAutomation/full_p2.png",
      ],
      description: "An automation tool for deploying client-side applications.",
      type: "Desktop Application",
      technologies: "Python",
      completedDate: "2023",
    },
    {
      name: "IGNITE server",
      images: ["/images/IgniteServer/p0.png", "/images/IgniteServer/p1.png", "/images/IgniteServer/p2.png"],
      fullImages: [
        "/images/IgniteServer/full_p0.png",
        "/images/IgniteServer/full_p1.png",
        "/images/IgniteServer/full_p2.png",
      ],
      description: "A server application for the IGNITE platform.",
      type: "Desktop Application",
      technologies: "Node.js",
      completedDate: "2023",
    },
    {
      name: "YesLicense",
      images: ["/images/YesLicense/p0.png", "/images/YesLicense/p1.png", "/images/YesLicense/p2.png"],
      fullImages: [
        "/images/YesLicense/full_p0.png",
        "/images/YesLicense/full_p1.png",
        "/images/YesLicense/full_p2.png",
      ],
      description: "A license management system for Yes products.",
      type: "Desktop Application",
      technologies: "Electron, Node.js",
      completedDate: "2023",
    },
    {
      name: "Plan reservation",
      images: ["/images/PlanReservation/p0.png", "/images/PlanReservation/p1.png", "/images/PlanReservation/p2.png"],
      fullImages: [
        "/images/PlanReservation/full_p0.png",
        "/images/PlanReservation/full_p1.png",
        "/images/PlanReservation/full_p2.png",
      ],
      description: "A desktop application for managing plan reservations.",
      type: "Desktop Application",
      technologies: "Electron, Node.js",
      completedDate: "2023",
    },
    {
      name: "Form recognizer",
      images: ["/images/FormRecognizer/p0.png", "/images/FormRecognizer/p1.png", "/images/FormRecognizer/p2.png"],
      fullImages: [
        "/images/FormRecognizer/full_p0.png",
        "/images/FormRecognizer/full_p1.png",
        "/images/FormRecognizer/full_p2.png",
      ],
      description: "An invoice recognition system using Azure Form Recognizer API.",
      type: "Desktop Application",
      technologies: "Python, Azure",
      completedDate: "2023",
    },
    {
      name: "Camping reservation",
      images: [
        "/images/CampingReservation/p0.png",
        "/images/CampingReservation/p1.png",
        "/images/CampingReservation/p2.png",
      ],
      fullImages: [
        "/images/CampingReservation/full_p0.png",
        "/images/CampingReservation/full_p1.png",
        "/images/CampingReservation/full_p2.png",
      ],
      description: "A desktop application for managing camping reservations.",
      type: "Desktop Application",
      technologies: "Electron, Node.js",
      completedDate: "2023",
    },
  ],
  Cloud: [
    {
      name: "VMs",
      images: ["/images/VMs/p0.png", "/images/VMs/p1.png", "/images/VMs/p2.png"],
      fullImages: ["/images/VMs/full_p0.png", "/images/VMs/full_p1.png", "/images/VMs/full_p2.png"],
      description: "Cloud-based Virtual Machine management system.",
      type: "Cloud application",
      technologies: "AWS, Docker",
      completedDate: "2023",
    },
    {
      name: "SAAS / PAAS / IAAS / DAAS",
      images: ["/images/CloudServices/p0.png", "/images/CloudServices/p1.png", "/images/CloudServices/p2.png"],
      fullImages: [
        "/images/CloudServices/full_p0.png",
        "/images/CloudServices/full_p1.png",
        "/images/CloudServices/full_p2.png",
      ],
      description: "Various cloud service implementations.",
      type: "Cloud Application",
      technologies: "AWS, Azure, Google Cloud",
      completedDate: "2023",
    },
    {
      name: "LoadBalancer",
      images: ["/images/LoadBalancer/p0.png", "/images/LoadBalancer/p1.png", "/images/LoadBalancer/p2.png"],
      fullImages: [
        "/images/LoadBalancer/full_p0.png",
        "/images/LoadBalancer/full_p1.png",
        "/images/LoadBalancer/full_p2.png",
      ],
      description: "A cloud-based load balancing solution.",
      type: "Cloud Application",
      technologies: "AWS, Azure",
      completedDate: "2023",
    },
  ],
  Dashboard: [
    {
      name: "Seif analytics: PowerBI",
      images: ["/images/SeifAnalytics/p0.png", "/images/SeifAnalytics/p1.png", "/images/SeifAnalytics/p2.png"],
      fullImages: [
        "/images/SeifAnalytics/full_p0.png",
        "/images/SeifAnalytics/full_p1.png",
        "/images/SeifAnalytics/full_p2.png",
      ],
      description: "A PowerBI dashboard for analytics and data visualization.",
      type: "Dashboard",
      technologies: "PowerBI",
      completedDate: "2023",
    },
  ],
}

type Project = {
  name: string
  images: string[]
  description: string
  type: string
  technologies: string
  completedDate: string
  fullImages?: string[]
  features?: string[];

}

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
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Projects</h2>
      <div className="flex flex-wrap justify-center space-x-4 mb-8">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full mb-2 transition-colors ${activeCategory === category ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
              <h3 className="text-lg font-semibold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-300 text-sm">Click to view details</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg max-w-6xl w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg z-10"
                onClick={closeProjectDetails}
              >
                <X size={28} />
              </button>
              <div className="flex flex-col md:flex-row bg-gray-700">
                <div className="md:w-2/3 p-6">
                  <Slider {...sliderSettings} className="custom-slider mb-6">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-[600px] md:h-[600px] cursor-pointer"
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
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">Key Features</h4>
                    {selectedProject.features && selectedProject.features.length > 0 ? (
                      <div className="h-80 overflow-hidden border border-gray-600 rounded-lg">
                        <List
                          height={320}
                          itemCount={selectedProject.features.length}
                          itemSize={50}
                          width="100%"
                          className="custom-scrollbar" // Add custom scrollbar styles
                        >
                          {({ index, style }) => (
                            <div style={style}
                              className="flex items-center text-white   p-4  last:border-none
                            transition-transform transform  hover:bg-gray-600 hover:shadow-xl cursor-pointer custom-hover-bg"
                            >
                                <span className="text-yellow-500 mr-3">✔️</span>

                              {selectedProject.features[index]}
                            </div>
                          )}
                        </List>
                      </div>
                    ) : (
                      <p className="text-gray-400">No specific features listed for this project.</p>
                    )}
                  </div>
                  {/* <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-2 text-blue-300">Key Features</h4>
                    {selectedProject.features && selectedProject.features.length > 0 ? (
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400">No specific features listed for this project.</p>
                    )}
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={closeFullScreenImage}
          >
            <div className="relative w-full h-full">
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

