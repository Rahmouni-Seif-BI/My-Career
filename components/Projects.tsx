"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Code, Calendar, Maximize, Minimize, Globe } from "lucide-react"
import Slider from "react-slick"
import { Project, projects } from "../types/project"
import { useTranslations, useLocale } from "@/lib/i18n-client"
// Import CSS files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/slider-custom.css"

export default function Projects() {
  const { locale } = useLocale()
  const { t } = useTranslations(locale)
  
  const [activeCategory, setActiveCategory] = useState("Web")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null)

  // Helper function to translate project types
  const translateProjectType = (type: string) => {
    const normalizedType = type.toLowerCase().replace(/\s+/g, '')
    return t(`projects.${normalizedType}`) || type
  }

  // Helper function to translate project categories
  const translateCategory = (category: string) => {
    const categoryTranslations: Record<string, string> = {
      'Web': locale === 'fr' ? 'Web' : 'Web',
      'Mobile': locale === 'fr' ? 'Mobile' : 'Mobile',
      'Cloud': locale === 'fr' ? 'Cloud' : 'Cloud',
      'Dashboard': locale === 'fr' ? 'Tableau de Bord' : 'Dashboard'
    }
    return categoryTranslations[category] || category
  }

  // Helper function to translate project features
  const translateFeature = (feature: string) => {
    const featureTranslations: Record<string, string> = {
      // Yes REMS features
      'Request Management': locale === 'fr' ? 'Gestion des Demandes' : 'Request Management',
      'Detailed Request': locale === 'fr' ? 'Demande Détaillée' : 'Detailed Request',
      'Needs Management': locale === 'fr' ? 'Gestion des Besoins' : 'Needs Management',
      'Movement Documents': locale === 'fr' ? 'Documents de Mouvement' : 'Movement Documents',
      'Entry Document': locale === 'fr' ? 'Document d\'Entrée' : 'Entry Document',
      'Exit Document': locale === 'fr' ? 'Document de Sortie' : 'Exit Document',
      'Stock Management': locale === 'fr' ? 'Gestion des Stocks' : 'Stock Management',
      'Transfers': locale === 'fr' ? 'Transferts' : 'Transfers',
      'Inventories': locale === 'fr' ? 'Inventaires' : 'Inventories',
      'Movements': locale === 'fr' ? 'Mouvements' : 'Movements',
      'Stock Status Global': locale === 'fr' ? 'État Global des Stocks' : 'Stock Status Global',
      'Stock Status By Warehouse': locale === 'fr' ? 'État des Stocks par Entrepôt' : 'Stock Status By Warehouse',
      'Stock Status By Item': locale === 'fr' ? 'État des Stocks par Article' : 'Stock Status By Item',
      'Warehouse Management': locale === 'fr' ? 'Gestion des Entrepôts' : 'Warehouse Management',
      'Purchasing Module': locale === 'fr' ? 'Module d\'Achat' : 'Purchasing Module',
      'Item Classification': locale === 'fr' ? 'Classification des Articles' : 'Item Classification',
      'Categories': locale === 'fr' ? 'Catégories' : 'Categories',
      'Subcategories': locale === 'fr' ? 'Sous-catégories' : 'Subcategories',
      'Items': locale === 'fr' ? 'Articles' : 'Items',
      
      // Yes LIMS features
      'Sample Management': locale === 'fr' ? 'Gestion des Échantillons' : 'Sample Management',
      'Data Acquisition & Storage': locale === 'fr' ? 'Acquisition et Stockage de Données' : 'Data Acquisition & Storage',
      'Analysis & Reporting': locale === 'fr' ? 'Analyse et Rapports' : 'Analysis & Reporting',
      'Result Distribution': locale === 'fr' ? 'Distribution des Résultats' : 'Result Distribution',
      'Resource Management': locale === 'fr' ? 'Gestion des Ressources' : 'Resource Management',
      'Workflow Automation': locale === 'fr' ? 'Automatisation des Flux de Travail' : 'Workflow Automation',
      'User Access Control': locale === 'fr' ? 'Contrôle d\'Accès Utilisateur' : 'User Access Control',
      'Audit Trails & Compliance': locale === 'fr' ? 'Traçabilité et Conformité' : 'Audit Trails & Compliance',
      'Inventory & Reagents Tracking': locale === 'fr' ? 'Suivi des Inventaires et Réactifs' : 'Inventory & Reagents Tracking',
      'Equipment Management': locale === 'fr' ? 'Gestion des Équipements' : 'Equipment Management',
      'Integration with Lab Instruments': locale === 'fr' ? 'Intégration avec les Instruments de Laboratoire' : 'Integration with Lab Instruments',
      
      // Yes STL features
      'Administration': locale === 'fr' ? 'Administration' : 'Administration',
      'System Configuration': locale === 'fr' ? 'Configuration du Système' : 'System Configuration',
      'Settlement Processing': locale === 'fr' ? 'Traitement des Règlements' : 'Settlement Processing',
      'Invoice Credit/Debit': locale === 'fr' ? 'Crédit/Débit de Facture' : 'Invoice Credit/Debit',
      'Certificate Credit/Debit': locale === 'fr' ? 'Crédit/Débit de Certificat' : 'Certificate Credit/Debit',
      'Account Management': locale === 'fr' ? 'Gestion des Comptes' : 'Account Management',
      'Transaction Monitoring': locale === 'fr' ? 'Surveillance des Transactions' : 'Transaction Monitoring',
      'Reporting & Auditing': locale === 'fr' ? 'Rapports et Audit' : 'Reporting & Auditing',
      'Automated Workflows': locale === 'fr' ? 'Flux de Travail Automatisés' : 'Automated Workflows',
      'XML Export for TEJ Platform': locale === 'fr' ? 'Export XML pour la Plateforme TEJ' : 'XML Export for TEJ Platform',
      'Dashboard & Analytics': locale === 'fr' ? 'Tableau de Bord et Analyses' : 'Dashboard & Analytics',
      
      // AI Dress Recommendation features
      'AI-Powered Dress Suggestions': locale === 'fr' ? 'Suggestions de Robes par IA' : 'AI-Powered Dress Suggestions',
      'User Preference Learning': locale === 'fr' ? 'Apprentissage des Préférences Utilisateur' : 'User Preference Learning',
      'Outfit Matching & Styling': locale === 'fr' ? 'Assortiment et Styling d\'Ensembles' : 'Outfit Matching & Styling',
      'Weather-Based Recommendations': locale === 'fr' ? 'Recommandations Basées sur la Météo' : 'Weather-Based Recommendations',
      'Occasion-Based Suggestions': locale === 'fr' ? 'Suggestions Basées sur l\'Occasion' : 'Occasion-Based Suggestions',
      'Virtual Try-On Preview': locale === 'fr' ? 'Aperçu d\'Essayage Virtuel' : 'Virtual Try-On Preview',
      'Trend Analysis & Updates': locale === 'fr' ? 'Analyse des Tendances et Mises à Jour' : 'Trend Analysis & Updates',
      'Shopping Integration': locale === 'fr' ? 'Intégration Shopping' : 'Shopping Integration',
      'Multi-Category Filtering': locale === 'fr' ? 'Filtrage Multi-Catégories' : 'Multi-Category Filtering',
      'Personalized Fashion Insights': locale === 'fr' ? 'Aperçus de Mode Personnalisés' : 'Personalized Fashion Insights',
      
      // SBC features
      'Income & Expense Tracking': locale === 'fr' ? 'Suivi des Revenus et Dépenses' : 'Income & Expense Tracking',
      'Budget Planning & Allocation': locale === 'fr' ? 'Planification et Allocation du Budget' : 'Budget Planning & Allocation',
      'Transaction Categorization': locale === 'fr' ? 'Catégorisation des Transactions' : 'Transaction Categorization',
      'Multi-Account Management': locale === 'fr' ? 'Gestion Multi-Comptes' : 'Multi-Account Management',
      'Financial Goal Setting': locale === 'fr' ? 'Définition d\'Objectifs Financiers' : 'Financial Goal Setting',
      'Recurring Payment Reminders': locale === 'fr' ? 'Rappels de Paiements Récurrents' : 'Recurring Payment Reminders',
      'Spending Analytics & Reports': locale === 'fr' ? 'Analyses et Rapports de Dépenses' : 'Spending Analytics & Reports',
      'Real-Time Balance Updates': locale === 'fr' ? 'Mises à Jour de Solde en Temps Réel' : 'Real-Time Balance Updates',
      'Secure Data Encryption': locale === 'fr' ? 'Chiffrement Sécurisé des Données' : 'Secure Data Encryption',
      'OpenAPI Integration': locale === 'fr' ? 'Intégration OpenAPI' : 'OpenAPI Integration',
      
      // Hotel Reservation features
      'Online Room Booking': locale === 'fr' ? 'Réservation de Chambres en Ligne' : 'Online Room Booking',
      'Real-Time Availability Check': locale === 'fr' ? 'Vérification de Disponibilité en Temps Réel' : 'Real-Time Availability Check',
      'User Account Management': locale === 'fr' ? 'Gestion des Comptes Utilisateur' : 'User Account Management',
      'Secure Payment Processing': locale === 'fr' ? 'Traitement de Paiement Sécurisé' : 'Secure Payment Processing',
      'Reservation History & Management': locale === 'fr' ? 'Historique et Gestion des Réservations' : 'Reservation History & Management',
      'Automated Booking Confirmation': locale === 'fr' ? 'Confirmation de Réservation Automatisée' : 'Automated Booking Confirmation',
      'Room Type & Pricing Management': locale === 'fr' ? 'Gestion des Types de Chambres et Tarifs' : 'Room Type & Pricing Management',
      'Guest Reviews & Ratings': locale === 'fr' ? 'Avis et Évaluations des Clients' : 'Guest Reviews & Ratings',
      'Admin Dashboard & Reports': locale === 'fr' ? 'Tableau de Bord Admin et Rapports' : 'Admin Dashboard & Reports',
      'Multi-Language Support': locale === 'fr' ? 'Support Multi-Langues' : 'Multi-Language Support',
      
      // Real-time Chat features
      'Instant Messaging': locale === 'fr' ? 'Messagerie Instantanée' : 'Instant Messaging',
      'User Authentication & Profiles': locale === 'fr' ? 'Authentification et Profils Utilisateur' : 'User Authentication & Profiles',
      'One-on-One & Group Chats': locale === 'fr' ? 'Chats Individuels et de Groupe' : 'One-on-One & Group Chats',
      'Online/Offline Status Indicators': locale === 'fr' ? 'Indicateurs de Statut En Ligne/Hors Ligne' : 'Online/Offline Status Indicators',
      'Message Read & Delivery Receipts': locale === 'fr' ? 'Accusés de Réception et de Lecture' : 'Message Read & Delivery Receipts',
      'File & Image Sharing': locale === 'fr' ? 'Partage de Fichiers et Images' : 'File & Image Sharing',
      'Real-Time Notifications': locale === 'fr' ? 'Notifications en Temps Réel' : 'Real-Time Notifications',
      'Chat History & Search': locale === 'fr' ? 'Historique et Recherche de Chat' : 'Chat History & Search',
      'Responsive UI for Mobile & Web': locale === 'fr' ? 'Interface Réactive pour Mobile et Web' : 'Responsive UI for Mobile & Web',
      
      // Center Camping MVC features
      'Booking & Reservations': locale === 'fr' ? 'Réservations et Réservations' : 'Booking & Reservations',
      'User Registration & Management': locale === 'fr' ? 'Inscription et Gestion des Utilisateurs' : 'User Registration & Management',
      'Camping Spot Availability': locale === 'fr' ? 'Disponibilité des Emplacements de Camping' : 'Camping Spot Availability',
      'Online Payment Integration': locale === 'fr' ? 'Intégration de Paiement en Ligne' : 'Online Payment Integration',
      'Event & Activity Scheduling': locale === 'fr' ? 'Planification d\'Événements et Activités' : 'Event & Activity Scheduling',
      'Admin Dashboard for Management': locale === 'fr' ? 'Tableau de Bord Admin pour la Gestion' : 'Admin Dashboard for Management',
      'Customer Feedback & Reviews': locale === 'fr' ? 'Retours et Avis Clients' : 'Customer Feedback & Reviews',
      'Dynamic Pricing & Discounts': locale === 'fr' ? 'Tarification Dynamique et Remises' : 'Dynamic Pricing & Discounts',
      'Responsive UI with CoreUI': locale === 'fr' ? 'Interface Réactive avec CoreUI' : 'Responsive UI with CoreUI',
      
      // Info-Vision-Covid features
      'Live COVID-19 Statistics': locale === 'fr' ? 'Statistiques COVID-19 en Direct' : 'Live COVID-19 Statistics',
      'Interactive Data Visualizations': locale === 'fr' ? 'Visualisations de Données Interactives' : 'Interactive Data Visualizations',
      'Country-wise Case Tracking': locale === 'fr' ? 'Suivi des Cas par Pays' : 'Country-wise Case Tracking',
      'Health & Safety Guidelines': locale === 'fr' ? 'Directives de Santé et Sécurité' : 'Health & Safety Guidelines',
      'News & Updates Section': locale === 'fr' ? 'Section Actualités et Mises à Jour' : 'News & Updates Section',
      'Vaccination Information': locale === 'fr' ? 'Informations sur la Vaccination' : 'Vaccination Information',
      'User-Friendly Dashboard': locale === 'fr' ? 'Tableau de Bord Convivial' : 'User-Friendly Dashboard',
      'Responsive Design': locale === 'fr' ? 'Design Réactif' : 'Responsive Design',
      
      // Mobile CRM features
      'Call Log Integration': locale === 'fr' ? 'Intégration du Journal d\'Appels' : 'Call Log Integration',
      'Add Prospects from Recent Calls': locale === 'fr' ? 'Ajouter des Prospects depuis les Appels Récents' : 'Add Prospects from Recent Calls',
      'Claims Management': locale === 'fr' ? 'Gestion des Réclamations' : 'Claims Management',
      'Hierarchy Building Zone': locale === 'fr' ? 'Zone de Construction Hiérarchique' : 'Hierarchy Building Zone',
      'Prospects and Prospections': locale === 'fr' ? 'Prospects et Prospections' : 'Prospects and Prospections',
      'Invoices Deadlines Management': locale === 'fr' ? 'Gestion des Échéances de Factures' : 'Invoices Deadlines Management',
      'Availability of property': locale === 'fr' ? 'Disponibilité des Biens' : 'Availability of property',
      'Task and Meeting Management': locale === 'fr' ? 'Gestion des Tâches et Réunions' : 'Task and Meeting Management',
      'Task Assignment and Scheduling': locale === 'fr' ? 'Attribution et Planification des Tâches' : 'Task Assignment and Scheduling',
      'Floor Plan Management': locale === 'fr' ? 'Gestion des Plans d\'Étage' : 'Floor Plan Management',
      'Time Tracking': locale === 'fr' ? 'Suivi du Temps' : 'Time Tracking',
      
      // Floor Plan features
      'Dynamic Zoning Management': locale === 'fr' ? 'Gestion Dynamique du Zonage' : 'Dynamic Zoning Management',
      'Real-Time Problem Solving': locale === 'fr' ? 'Résolution de Problèmes en Temps Réel' : 'Real-Time Problem Solving',
      'Team Collaboration': locale === 'fr' ? 'Collaboration d\'Équipe' : 'Team Collaboration',
      'Interactive Project Visualization': locale === 'fr' ? 'Visualisation Interactive de Projet' : 'Interactive Project Visualization',
      'Geolocation Integration': locale === 'fr' ? 'Intégration de Géolocalisation' : 'Geolocation Integration',
      'Reporting and Analytics': locale === 'fr' ? 'Rapports et Analyses' : 'Reporting and Analytics',
      'Document Management': locale === 'fr' ? 'Gestion de Documents' : 'Document Management',
      'User Roles and Permissions': locale === 'fr' ? 'Rôles et Permissions Utilisateur' : 'User Roles and Permissions',
      'Notifications and Alerts': locale === 'fr' ? 'Notifications et Alertes' : 'Notifications and Alerts',
      'Data Integration': locale === 'fr' ? 'Intégration de Données' : 'Data Integration',
      
      // Food Delivery features
      'User-Friendly Interface': locale === 'fr' ? 'Interface Conviviale' : 'User-Friendly Interface',
      'Easy navigation for users': locale === 'fr' ? 'Navigation Facile pour les Utilisateurs' : 'Easy navigation for users',
      'Restaurant Menu Integration': locale === 'fr' ? 'Intégration du Menu Restaurant' : 'Restaurant Menu Integration',
      'Payment Integration': locale === 'fr' ? 'Intégration de Paiement' : 'Payment Integration',
      'Push Notifications': locale === 'fr' ? 'Notifications Push' : 'Push Notifications',
      'Track previous orders': locale === 'fr' ? 'Suivi des Commandes Précédentes' : 'Track previous orders',
      'Ratings and Reviews': locale === 'fr' ? 'Évaluations et Avis' : 'Ratings and Reviews',
      'Admin Panel': locale === 'fr' ? 'Panneau d\'Administration' : 'Admin Panel',
      'Manage orders': locale === 'fr' ? 'Gérer les Commandes' : 'Manage orders',
      'Manage users': locale === 'fr' ? 'Gérer les Utilisateurs' : 'Manage users',
    }
    return featureTranslations[feature] || feature
  }

  // Helper function to translate project descriptions
  const translateDescription = (description: string) => {
    const descriptionTranslations: Record<string, string> = {
      'ERP System for Request, Stock, Warehouse, and Purchasing Management.': locale === 'fr' ? 'Système ERP pour la Gestion des Demandes, Stocks, Entrepôts et Achats.' : 'ERP System for Request, Stock, Warehouse, and Purchasing Management.',
      'A Laboratory Information Management System for efficient lab operations.': locale === 'fr' ? 'Un Système de Gestion d\'Informations de Laboratoire pour des opérations de laboratoire efficaces.' : 'A Laboratory Information Management System for efficient lab operations.',
      'A web application for managing and tracking shipments.': locale === 'fr' ? 'Une application web pour gérer et suivre les expéditions.' : 'A web application for managing and tracking shipments.',
      'An AI-powered dress recommendation system using Python.': locale === 'fr' ? 'Un système de recommandation de robes alimenté par l\'IA utilisant Python.' : 'An AI-powered dress recommendation system using Python.',
      'Self budget control system': locale === 'fr' ? 'Système de contrôle budgétaire personnel' : 'Self budget control system',
      'A web-based hotel reservation system with booking management.': locale === 'fr' ? 'Un système de réservation d\'hôtel basé sur le web avec gestion des réservations.' : 'A web-based hotel reservation system with booking management.',
      'A web-based chat application with real-time messaging capabilities.': locale === 'fr' ? 'Une application de chat basée sur le web avec des capacités de messagerie en temps réel.' : 'A web-based chat application with real-time messaging capabilities.',
      'An MVC version of the Camping center project.': locale === 'fr' ? 'Une version MVC du projet Centre de Camping.' : 'An MVC version of the Camping center project.',
      'A website providing COVID-19 information and statistics.': locale === 'fr' ? 'Un site web fournissant des informations et statistiques COVID-19.' : 'A website providing COVID-19 information and statistics.',
      'A mobile app for real estate management and property listings.': locale === 'fr' ? 'Une application mobile pour la gestion immobilière et les listes de propriétés.' : 'A mobile app for real estate management and property listings.',
      'We offer a mobile application for dynamic zoning and problem-solving in real estate projects.': locale === 'fr' ? 'Nous proposons une application mobile pour le zonage dynamique et la résolution de problèmes dans les projets immobiliers.' : 'We offer a mobile application for dynamic zoning and problem-solving in real estate projects.',
      'A food delivery app with real-time tracking and order management.': locale === 'fr' ? 'Une application de livraison de nourriture avec suivi en temps réel et gestion des commandes.' : 'A food delivery app with real-time tracking and order management.',
      'Cloud-based Virtual Machine management system.': locale === 'fr' ? 'Système de gestion de machines virtuelles basé sur le cloud.' : 'Cloud-based Virtual Machine management system.',
      'Cloud-based Virtual network management system.': locale === 'fr' ? 'Système de gestion de réseau virtuel basé sur le cloud.' : 'Cloud-based Virtual network management system.',
      'Our dashboard provides insightful visualizations, tracking channel performance metrics, estimating revenue, analyzing growth over time.': locale === 'fr' ? 'Notre tableau de bord fournit des visualisations perspicaces, suit les métriques de performance des canaux, estime les revenus et analyse la croissance dans le temps.' : 'Our dashboard provides insightful visualizations, tracking channel performance metrics, estimating revenue, analyzing growth over time.',
    }
    return descriptionTranslations[description] || description
  }


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

  // ← Add this useEffect for keyboard nav →
  useEffect(() => {
    if (!fullScreenImage || !selectedProject) return;

    // derive the array we'll navigate
    const fullImages = selectedProject?.fullImages?.length
      ? selectedProject.fullImages
      : selectedProject?.images || [];

    if (!fullImages.length) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeFullScreenImage();
        return;
      }
      const currentIndex = fullImages.findIndex(img => img === fullScreenImage);
      if (currentIndex === -1) return;

      if (e.key === "ArrowLeft") {
        const prev = fullImages[(currentIndex - 1 + fullImages.length) % fullImages.length];
        setFullScreenImage(prev);
      } else if (e.key === "ArrowRight") {
        const next = fullImages[(currentIndex + 1) % fullImages.length];
        setFullScreenImage(next);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullScreenImage, selectedProject]);


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
        {t('projects.title')}
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
            {translateCategory(category)}
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
              <p className="text-gray-300 text-sm">{t('projects.viewProject')}</p>
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-0 md:p-4 z-50 overflow-y-auto"
            onClick={closeProjectDetails}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 rounded-lg max-w-6xl w-full mx-2 md:mx-auto my-4 md:my-0 overflow-hidden"
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
                      <span>{translateProjectType(selectedProject.type)}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Code className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      <span>{t('projects.technologies')}: {selectedProject.technologies}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                      <span>{t('projects.completedIn')} {selectedProject.completedDate}</span>
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="mt-4 md:mt-6">
                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-blue-300">
                      {t('projects.overview')}
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {translateDescription(selectedProject.description)}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mt-4 md:mt-6">
                    <h4 className="text-lg md:text-xl font-semibold mb-2 text-blue-300">
                      {t('projects.keyFeatures')}
                    </h4>
                    {selectedProject.features && selectedProject.features?.length > 0 ? (
                      <div className="max-h-48 md:max-h-80 overflow-y-auto border border-gray-600 rounded-lg custom-scrollbar">
                        {selectedProject.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center text-white p-3 text-sm md:text-base hover:bg-gray-700 transition-colors"
                          >
                            <span className="text-yellow-500 mr-2">✔️</span>
                            {translateFeature(feature)}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm md:text-base">
                        {t('projects.noFeatures')}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Full-screen Image Modal */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Added padding so the image modal doesn't overflow on mobile
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
