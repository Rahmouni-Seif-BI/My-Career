// Translation types
export interface Translations {
  [key: string]: string | Translations
}

// Available locales
export const locales = ['en', 'fr'] as const
export type Locale = typeof locales[number]

// Translation data
export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      skills: 'Skills',
      cv: 'CV',
      contact: 'Contact',
    },
    hero: {
      title: 'Software Engineer',
      subtitle: 'Full Stack Developer & Cloud Architect',
      description: 'Passionate about creating innovative solutions and building scalable applications',
      cta: 'Get In Touch',
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'My journey in software development',
      current: 'Present',
      months: 'months',
      years: 'years',
      year: 'year',
    },
    education: {
      title: 'Education',
      subtitle: 'My academic background',
      degree: 'Degree',
      university: 'University',
      period: 'Period',
      espritDegree: 'Engineering Program in Software Engineering and Information Systems',
      fsegnDegree: 'National Bachelor\'s in Management Informatics (Specialization: Business Intelligence)',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of my recent work',
      viewProject: 'View Project',
      technologies: 'Technologies',
      description: 'Description',
      completedIn: 'Completed in',
      overview: 'Project Overview',
      keyFeatures: 'Key Features',
      noFeatures: 'No specific features listed for this project.',
      web: 'Web',
      mobile: 'Mobile',
      desktop: 'Desktop',
      cloud: 'Cloud',
      dashboard: 'Dashboard',
      webApplication: 'Web Application',
      mobileApplication: 'Mobile Application',
      desktopApplication: 'Desktop Application',
      cloudApplication: 'Cloud Application',
      'webapplication': 'Web Application',
      'mobileapplication': 'Mobile Application',
      'desktopapplication': 'Desktop Application',
      'cloudapplication': 'Cloud Application',
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'Technologies I work with',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      cloud: 'Cloud & DevOps',
      tools: 'Tools & Others',
      developmentEnvironment: 'Development Environment',
      programmingLanguages: 'Programming Languages',
      frameworks: 'Frameworks',
      databases: 'Databases',
      applicationServers: 'Application Servers',
      toolsAndTesting: 'Tools & Testing',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s work together',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      placeholder: {
        name: 'Your name',
        email: 'your.email@example.com',
        message: 'Your message...',
      },
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    },
    footer: {
      rights: 'All rights reserved',
      madeWith: 'Made with',
    },
    cv: {
      title: 'Resume',
      subtitle: 'Download my CV',
      download: 'Download CV',
      lastUpdated: 'Last Updated',
      professionalSummary: 'Professional Summary',
      summaryText: 'Experienced software engineer with expertise in mobile, web, and desktop applications. Specialized in .NET, Flutter, Angular, and Spring boot development with a strong focus on delivering high-quality, scalable solutions.',
      keyHighlights: 'Key Highlights',
      experienceYears: '3+ years of professional experience',
      fullStackExpertise: 'Full-stack development expertise',
      mobileDevelopment: 'Mobile app development with Flutter',
      databaseDesign: 'Database design and management',
      internationalClients: 'International clients:',
      viewCV: 'View CV',
      downloadPDF: 'Download PDF',
      experienceText: 'Software Engineer at Yasmine Engineering Systems with expertise in enterprise applications and international client projects across',
      atESPRIT: 'at ESPRIT',
      skillsText: 'C#, .NET, Flutter, Angular, React, SQL Server, Docker, and more.',
    },
    statistics: {
      title: 'Statistics',
      experience: 'Years of Experience',
      projects: 'Projects Completed',
      clients: 'Happy Clients',
      skills: 'Skills Mastered',
    },
    blogs: {
      title: 'Blogs & Achievements',
      subtitle: 'Latest accomplishments, events, and innovative projects that showcase my professional journey',
      featured: 'Featured',
      viewMore: 'View More',
      cta: {
        title: 'Let\'s Connect on LinkedIn',
        description: 'Follow my professional journey and stay updated with my latest achievements, technical insights, and industry contributions.',
        button: 'Connect on LinkedIn'
      },
      // Blog post titles
      smartTuniChecksTitle: 'Smart Tuni-Checks – Intelligent Bank Check Validator',
      balDesProjetsTitle: 'Bal des Projets 2025 – ESB',
      yesREMSTitle: 'YesREMS Enterprise Solution',
      innovationAwardTitle: 'Innovation Award Winner',
      devopsWorkshopTitle: 'DevOps Best Practices Workshop',
      microservicesTitle: 'Microservices Migration Success',
      // Blog post descriptions
      balDesProjets2025Description: 'I had the honor of presenting my project at the Project Ball at ESB, a landmark event that showcases a year of work, learning, and innovation.💡 It was an enriching experience, full of exchanges with students, teachers, and professionals. I was able to highlight the skills acquired throughout the year and share a concrete solution developed with passion.',

      smartTuniChecksDescription: 'Built an AI-powered bank check validation system that automates the entire process with OCR, QR code scanning, and intelligent validation rules. Developed during 3rd year Company Mission at ESPRIT.',
      balDesProjetsDescription: 'Had the honor of presenting my project at the Bal des Projets at ESB, a landmark event that showcases a year of work, learning, and innovation.',
      yesREMSDescription: 'Led development of a comprehensive Real Estate Management System serving 50+ clients across North Africa, improving operational efficiency by 40%.',
      innovationAwardDescription: 'Received the \'Most Innovative Developer\' award at the Tunisian Tech Awards 2024 for contributions to AI and cloud computing solutions.',
      devopsWorkshopDescription: 'Conducted a comprehensive workshop on DevOps best practices, CI/CD pipelines, and containerization for 100+ developers.',
      microservicesDescription: 'Successfully migrated a monolithic application to microservices architecture, reducing deployment time by 70% and improving scalability.',
      // Category labels
      categories: {
        achievement: 'Achievement',
        event: 'Event',
        project: 'Project',
        innovation: 'Innovation'
      }
    },
  },
  fr: {
    nav: {
      experience: 'Expérience',
      education: 'Formation',
      projects: 'Projets',
      skills: 'Compétences',
      cv: 'CV',
      contact: 'Contact',
    },
    hero: {
      title: 'Ingénieur Logiciel',
      subtitle: 'Ingénieur logiciel expérimenté spécialisé dans les applications mobile, web et desktop',
      description: 'Passionné par la création de solutions innovantes et la construction d\'applications évolutives',
      cta: 'Me Contacter',
    },
    experience: {
      title: 'Expérience Professionnelle',
      subtitle: 'Mon parcours en développement logiciel',
      current: 'Présent',
      months: 'mois',
      years: 'ans',
      year: 'an',
    },
    education: {
      title: 'Formation',
      subtitle: 'Mon parcours académique',
      degree: 'Diplôme',
      university: 'Université',
      period: 'Période',
      espritDegree: 'Programme d\'ingénierie en Génie Logiciel et Systèmes d\'Information',
      fsegnDegree: 'Licence Nationale en Informatique de Gestion (Spécialisation : Business Intelligence)',
    },
    projects: {
      title: 'Projets',
      subtitle: 'Quelques-uns de mes travaux récents',
      viewProject: 'Voir le Projet',
      technologies: 'Technologies',
      description: 'Description',
      completedIn: 'Terminé en',
      overview: 'Aperçu du Projet',
      keyFeatures: 'Fonctionnalités Clés',
      noFeatures: 'Aucune fonctionnalité spécifique listée pour ce projet.',
      web: 'Web',
      mobile: 'Mobile',
      desktop: 'Bureau',
      cloud: 'Cloud',
      dashboard: 'Tableau de Bord',
      webApplication: 'Application Web',
      mobileApplication: 'Application Mobile',
      desktopApplication: 'Application Bureau',
      cloudApplication: 'Application Cloud',
      'webapplication': 'Application Web',
      'mobileapplication': 'Application Mobile',
      'desktopapplication': 'Application Bureau',
      'cloudapplication': 'Application Cloud',
      // Feature translations
      features: {
        // Yes REMS features
        'Request Management': 'Gestion des Demandes',
        'Detailed Request': 'Demande Détaillée',
        'Needs Management': 'Gestion des Besoins',
        'Movement Documents': 'Documents de Mouvement',
        'Entry Document': 'Document d\'Entrée',
        'Exit Document': 'Document de Sortie',
        'Stock Management': 'Gestion des Stocks',
        'Transfers': 'Transferts',
        'Inventories': 'Inventaires',
        'Movements': 'Mouvements',
        'Stock Status Global': 'État Global des Stocks',
        'Stock Status By Warehouse': 'État des Stocks par Entrepôt',
        'Stock Status By Item': 'État des Stocks par Article',
        'Warehouse Management': 'Gestion des Entrepôts',
        'Purchasing Module': 'Module d\'Achat',
        'Item Classification': 'Classification des Articles',
        'Categories': 'Catégories',
        'Subcategories': 'Sous-catégories',
        'Items': 'Articles',
        
        // Yes LIMS features
        'Sample Management': 'Gestion des Échantillons',
        'Data Acquisition & Storage': 'Acquisition et Stockage de Données',
        'Analysis & Reporting': 'Analyse et Rapports',
        'Result Distribution': 'Distribution des Résultats',
        'Resource Management': 'Gestion des Ressources',
        'Workflow Automation': 'Automatisation des Flux de Travail',
        'User Access Control': 'Contrôle d\'Accès Utilisateur',
        'Audit Trails & Compliance': 'Traçabilité et Conformité',
        'Inventory & Reagents Tracking': 'Suivi des Inventaires et Réactifs',
        'Equipment Management': 'Gestion des Équipements',
        'Integration with Lab Instruments': 'Intégration avec les Instruments de Laboratoire',
        
        // Yes STL features
        'Administration': 'Administration',
        'System Configuration': 'Configuration du Système',
        'Settlement Processing': 'Traitement des Règlements',
        'Invoice Credit/Debit': 'Crédit/Débit de Facture',
        'Certificate Credit/Debit': 'Crédit/Débit de Certificat',
        'Account Management': 'Gestion des Comptes',
        'Transaction Monitoring': 'Surveillance des Transactions',
        'Reporting & Auditing': 'Rapports et Audit',
        'Automated Workflows': 'Flux de Travail Automatisés',
        'XML Export for TEJ Platform': 'Export XML pour la Plateforme TEJ',
        'Dashboard & Analytics': 'Tableau de Bord et Analyses',
        
        // AI Dress Recommendation features
        'AI-Powered Dress Suggestions': 'Suggestions de Robes par IA',
        'User Preference Learning': 'Apprentissage des Préférences Utilisateur',
        'Outfit Matching & Styling': 'Assortiment et Styling d\'Ensembles',
        'Weather-Based Recommendations': 'Recommandations Basées sur la Météo',
        'Occasion-Based Suggestions': 'Suggestions Basées sur l\'Occasion',
        'Virtual Try-On Preview': 'Aperçu d\'Essayage Virtuel',
        'Trend Analysis & Updates': 'Analyse des Tendances et Mises à Jour',
        'Shopping Integration': 'Intégration Shopping',
        'Multi-Category Filtering': 'Filtrage Multi-Catégories',
        'Personalized Fashion Insights': 'Aperçus de Mode Personnalisés',
        
        // SBC features
        'Income & Expense Tracking': 'Suivi des Revenus et Dépenses',
        'Budget Planning & Allocation': 'Planification et Allocation du Budget',
        'Transaction Categorization': 'Catégorisation des Transactions',
        'Multi-Account Management': 'Gestion Multi-Comptes',
        'Financial Goal Setting': 'Définition d\'Objectifs Financiers',
        'Recurring Payment Reminders': 'Rappels de Paiements Récurrents',
        'Spending Analytics & Reports': 'Analyses et Rapports de Dépenses',
        'Real-Time Balance Updates': 'Mises à Jour de Solde en Temps Réel',
        'Secure Data Encryption': 'Chiffrement Sécurisé des Données',
        'OpenAPI Integration': 'Intégration OpenAPI',
        
        // Hotel Reservation features
        'Online Room Booking': 'Réservation de Chambres en Ligne',
        'Real-Time Availability Check': 'Vérification de Disponibilité en Temps Réel',
        'User Account Management': 'Gestion des Comptes Utilisateur',
        'Secure Payment Processing': 'Traitement de Paiement Sécurisé',
        'Reservation History & Management': 'Historique et Gestion des Réservations',
        'Automated Booking Confirmation': 'Confirmation de Réservation Automatisée',
        'Room Type & Pricing Management': 'Gestion des Types de Chambres et Tarifs',
        'Guest Reviews & Ratings': 'Avis et Évaluations des Clients',
        'Admin Dashboard & Reports': 'Tableau de Bord Admin et Rapports',
        'Multi-Language Support': 'Support Multi-Langues',
        
        // Real-time Chat features
        'Instant Messaging': 'Messagerie Instantanée',
        'User Authentication & Profiles': 'Authentification et Profils Utilisateur',
        'One-on-One & Group Chats': 'Chats Individuels et de Groupe',
        'Online/Offline Status Indicators': 'Indicateurs de Statut En Ligne/Hors Ligne',
        'Message Read & Delivery Receipts': 'Accusés de Réception et de Lecture',
        'File & Image Sharing': 'Partage de Fichiers et Images',
        'Real-Time Notifications': 'Notifications en Temps Réel',
        'Chat History & Search': 'Historique et Recherche de Chat',
        'Responsive UI for Mobile & Web': 'Interface Réactive pour Mobile et Web',
        
        // Center Camping MVC features
        'Booking & Reservations': 'Réservations et Réservations',
        'User Registration & Management': 'Inscription et Gestion des Utilisateurs',
        'Camping Spot Availability': 'Disponibilité des Emplacements de Camping',
        'Online Payment Integration': 'Intégration de Paiement en Ligne',
        'Event & Activity Scheduling': 'Planification d\'Événements et Activités',
        'Admin Dashboard for Management': 'Tableau de Bord Admin pour la Gestion',
        'Customer Feedback & Reviews': 'Retours et Avis Clients',
        'Dynamic Pricing & Discounts': 'Tarification Dynamique et Remises',
        'Responsive UI with CoreUI': 'Interface Réactive avec CoreUI',
        
        // Info-Vision-Covid features
        'Live COVID-19 Statistics': 'Statistiques COVID-19 en Direct',
        'Interactive Data Visualizations': 'Visualisations de Données Interactives',
        'Country-wise Case Tracking': 'Suivi des Cas par Pays',
        'Health & Safety Guidelines': 'Directives de Santé et Sécurité',
        'News & Updates Section': 'Section Actualités et Mises à Jour',
        'Vaccination Information': 'Informations sur la Vaccination',
        'User-Friendly Dashboard': 'Tableau de Bord Convivial',
        'Responsive Design': 'Design Réactif',
        
        // Mobile CRM features
        'Call Log Integration': 'Intégration du Journal d\'Appels',
        'Add Prospects from Recent Calls': 'Ajouter des Prospects depuis les Appels Récents',
        'Claims Management': 'Gestion des Réclamations',
        'Hierarchy Building Zone': 'Zone de Construction Hiérarchique',
        'Prospects and Prospections': 'Prospects et Prospections',
        'Invoices Deadlines Management': 'Gestion des Échéances de Factures',
        'Availability of property': 'Disponibilité des Biens',
        'Task and Meeting Management': 'Gestion des Tâches et Réunions',
        'Task Assignment and Scheduling': 'Attribution et Planification des Tâches',
        'Floor Plan Management': 'Gestion des Plans d\'Étage',
        'Time Tracking': 'Suivi du Temps',
        
        // Floor Plan features
        'Dynamic Zoning Management': 'Gestion Dynamique du Zonage',
        'Real-Time Problem Solving': 'Résolution de Problèmes en Temps Réel',
        'Team Collaboration': 'Collaboration d\'Équipe',
        'Interactive Project Visualization': 'Visualisation Interactive de Projet',
        'Geolocation Integration': 'Intégration de Géolocalisation',
        'Reporting and Analytics': 'Rapports et Analyses',
        'Document Management': 'Gestion de Documents',
        'Task Tracking': 'Suivi des Tâches',
        'User Roles and Permissions': 'Rôles et Permissions Utilisateur',
        'Notifications and Alerts': 'Notifications et Alertes',
        'Data Integration': 'Intégration de Données',
        
        // Food Delivery features
        'User-Friendly Interface': 'Interface Conviviale',
        'Easy navigation for users': 'Navigation Facile pour les Utilisateurs',
        'Restaurant Menu Integration': 'Intégration du Menu Restaurant',
        'Payment Integration': 'Intégration de Paiement',
        'Push Notifications': 'Notifications Push',
        'Track previous orders': 'Suivi des Commandes Précédentes',
        'Ratings and Reviews': 'Évaluations et Avis',
        'Admin Panel': 'Panneau d\'Administration',
        'Manage orders': 'Gérer les Commandes',
        'Manage users': 'Gérer les Utilisateurs',
      },
      // Project descriptions
      descriptions: {
        'ERP System for Request, Stock, Warehouse, and Purchasing Management.': 'Système ERP pour la Gestion des Demandes, Stocks, Entrepôts et Achats.',
        'A Laboratory Information Management System for efficient lab operations.': 'Un Système de Gestion d\'Informations de Laboratoire pour des opérations de laboratoire efficaces.',
        'A web application for managing and tracking shipments.': 'Une application web pour gérer et suivre les expéditions.',
        'An AI-powered dress recommendation system using Python.': 'Un système de recommandation de robes alimenté par l\'IA utilisant Python.',
        'Self budget control system': 'Système de contrôle budgétaire personnel',
        'A web-based hotel reservation system with booking management.': 'Un système de réservation d\'hôtel basé sur le web avec gestion des réservations.',
        'A web-based chat application with real-time messaging capabilities.': 'Une application de chat basée sur le web avec des capacités de messagerie en temps réel.',
        'An MVC version of the Camping center project.': 'Une version MVC du projet Centre de Camping.',
        'A website providing COVID-19 information and statistics.': 'Un site web fournissant des informations et statistiques COVID-19.',
        'A mobile app for real estate management and property listings.': 'Une application mobile pour la gestion immobilière et les listes de propriétés.',
        'We offer a mobile application for dynamic zoning and problem-solving in real estate projects.': 'Nous proposons une application mobile pour le zonage dynamique et la résolution de problèmes dans les projets immobiliers.',
        'A food delivery app with real-time tracking and order management.': 'Une application de livraison de nourriture avec suivi en temps réel et gestion des commandes.',
        'Cloud-based Virtual Machine management system.': 'Système de gestion de machines virtuelles basé sur le cloud.',
        'Cloud-based Virtual network management system.': 'Système de gestion de réseau virtuel basé sur le cloud.',
        'Our dashboard provides insightful visualizations, tracking channel performance metrics, estimating revenue, analyzing growth over time.': 'Notre tableau de bord fournit des visualisations perspicaces, suit les métriques de performance des canaux, estime les revenus et analyse la croissance dans le temps.',
      },
    },
    skills: {
      title: 'Compétences & Technologies',
      subtitle: 'Technologies avec lesquelles je travaille',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Base de Données',
      cloud: 'Cloud & DevOps',
      tools: 'Outils & Autres',
      developmentEnvironment: 'Environnement de Développement',
      programmingLanguages: 'Langages de Programmation',
      frameworks: 'Frameworks',
      databases: 'Bases de Données',
      applicationServers: 'Serveurs d\'Applications',
      toolsAndTesting: 'Outils & Tests',
    },
    contact: {
      title: 'Me Contacter',
      subtitle: 'Travaillons ensemble',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le Message',
      placeholder: {
        name: 'Votre nom',
        email: 'votre.email@exemple.com',
        message: 'Votre message...',
      },
      success: 'Message envoyé avec succès !',
      error: 'Échec de l\'envoi du message. Veuillez réessayer.',
    },
    footer: {
      rights: 'Tous droits réservés',
      madeWith: 'Fait avec',
    },
    cv: {
      title: 'CV',
      subtitle: 'Télécharger mon CV',
      download: 'Télécharger CV',
      lastUpdated: 'Dernière Mise à Jour',
      professionalSummary: 'Résumé Professionnel',
      summaryText: 'Ingénieur logiciel expérimenté avec expertise dans les applications mobiles, web et de bureau. Spécialisé dans le développement .NET, Flutter, Angular et Spring boot avec un fort accent sur la livraison de solutions de haute qualité et évolutives.',
      keyHighlights: 'Points Clés',
      experienceYears: '3+ années d\'expérience professionnelle',
      fullStackExpertise: 'Expertise en développement full-stack',
      mobileDevelopment: 'Développement d\'applications mobiles avec Flutter',
      databaseDesign: 'Conception et gestion de bases de données',
      internationalClients: 'Clients internationaux :',
      viewCV: 'Voir le CV',
      downloadPDF: 'Télécharger PDF',
      experienceText: 'Ingénieur logiciel chez Yasmine Engineering Systems avec expertise dans les applications d\'entreprise et les projets clients internationaux à travers',
      atESPRIT: 'à ESPRIT',
      skillsText: 'C#, .NET, Flutter, Angular, React, SQL Server, Docker, et plus.',
    },
    statistics: {
      title: 'Statistiques',
      experience: 'Années d\'Expérience',
      projects: 'Projets Réalisés',
      clients: 'Clients Satisfaits',
      skills: 'Compétences Maîtrisées',
    },
    blogs: {
      title: 'Blogs & Réalisations',
      subtitle: 'Dernières réalisations, événements et projets innovants qui illustrent mon parcours professionnel',
      featured: 'À la Une',
      viewMore: 'Voir Plus',
      cta: {
        title: 'Connectons-nous sur LinkedIn',
        description: 'Suivez mon parcours professionnel et restez informé de mes dernières réalisations, insights techniques et contributions à l\'industrie.',
        button: 'Se Connecter sur LinkedIn'
      },
      // Blog post titles
      smartTuniChecksTitle: 'Smart Tuni-Checks – Validateur Intelligent de Chèques Bancaires',
      balDesProjetsTitle: 'Bal des Projets 2025 – ESB',
      yesREMSTitle: 'Solution Entreprise YesREMS',
      innovationAwardTitle: 'Lauréat du Prix d\'Innovation',
      devopsWorkshopTitle: 'Atelier des Meilleures Pratiques DevOps',
      microservicesTitle: 'Succès de Migration Microservices',
      // Blog post descriptions
      balDesProjets2025Description: 'J’ai eu l’honneur de présenter mon projet lors du Bal des Projets à l’ESB, un événement marquant qui valorise une année de travail, d’apprentissage et d’innovation.💡 Ce fut une expérience enrichissante, pleine d’échanges avec des étudiants, enseignants et professionnels. J’ai pu mettre en avant les compétences acquises tout au long de l’année et partager une solution concrète développée avec passion.',
      smartTuniChecksDescription: 'Construit un système de validation de chèques bancaires alimenté par l\'IA qui automatise l\'ensemble du processus avec OCR, scan de codes QR et règles de validation intelligentes. Développé lors de la Mission Entreprise de 3ème année à ESPRIT.',
      balDesProjetsDescription: 'Revivez les temps forts de la 12ème édition du Bal des Projets à ESPRIT ! Plus de 1200 étudiants participants, plus de 80 entreprises et plus de 250 stands mettant en avant les projets et le savoir-faire de nos étudiants. ',
      yesREMSDescription: 'Dirigé le développement d\'un système complet de gestion immobilière desservant plus de 50 clients à travers l\'Afrique du Nord, améliorant l\'efficacité opérationnelle de 40%.',
      innovationAwardDescription: 'Reçu le prix \'Développeur le Plus Innovant\' aux Tech Awards Tunisiens 2024 pour les contributions aux solutions d\'IA et de cloud computing.',
      devopsWorkshopDescription: 'Conduit un atelier complet sur les meilleures pratiques DevOps, les pipelines CI/CD et la conteneurisation pour plus de 100 développeurs.',
      microservicesDescription: 'Migré avec succès une application monolithique vers une architecture microservices, réduisant le temps de déploiement de 70% et améliorant la scalabilité.',
      // Category labels
      categories: {
        achievement: 'Réussite',
        event: 'Événement',
        project: 'Projet',
        innovation: 'Innovation'
      }
    },
  },
}

// Server-side translation function
export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: string | Record<string, unknown> = translations[locale]
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k] as string | Record<string, unknown>
    } else {
      // Fallback to English if translation not found
      value = translations.en
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey] as string | Record<string, unknown>
        } else {
          return key // Return key if translation not found
        }
      }
    }
  }
  
  return typeof value === 'string' ? value : key
} 