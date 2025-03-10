export interface Project {
  name: string
  images: string[]
  fullImages?: string[]
  description: string
  type: string
  technologies: string
  completedDate: string
  features?: string[];

}

export interface ProjectCategories {
  [key: string]: Project[]
}




export const projects: ProjectCategories = {
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
      technologies: "Angular, .Net, SQL Server",
      completedDate: "2023",
      features: [
        "Sample Management",
        "Data Acquisition & Storage",
        "Analysis & Reporting",
        "Result Distribution",
        "Resource Management",
        "Workflow Automation",
        "User Access Control",
        "Audit Trails & Compliance",
        "Inventory & Reagents Tracking",
        "Equipment Management",
        "Integration with Lab Instruments"
      ]
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
      technologies: "Angular, .Net, SQL Server",
      completedDate: "2023",
      features: [
        "Administration",
        "System Configuration",
        "Settlement Processing",
        "Invoice Credit/Debit",
        "Certificate Credit/Debit",
        "Account Management",
        "Transaction Monitoring",
        "Reporting & Auditing",
        "User Access Control",
        "Automated Workflows",
        "XML Export for TEJ Platform",
        "Dashboard & Analytics"
      ]

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
      technologies: "Python, TensorFlow, Angular",
      completedDate: "2025",
      features: [
        "AI-Powered Dress Suggestions",
        "User Preference Learning",
        "Outfit Matching & Styling",
        "Weather-Based Recommendations",
        "Occasion-Based Suggestions",
        "Virtual Try-On Preview",
        "Trend Analysis & Updates",
        "Shopping Integration",
        "Multi-Category Filtering",
        "Personalized Fashion Insights"
      ]
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
      description: "Self budget control system",
      type: "Web application",
      technologies: "Angular, Node.js, Spring boot, SQL, OpenApi",
      completedDate: "2024",
      features: [
        "Income & Expense Tracking",
        "Budget Planning & Allocation",
        "Transaction Categorization",
        "Multi-Account Management",
        "Financial Goal Setting",
        "Recurring Payment Reminders",
        "Spending Analytics & Reports",
        "Real-Time Balance Updates",
        "Secure Data Encryption",
        "OpenAPI Integration"
      ]

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
      technologies: "PHP, Bootstrap, SQL",
      completedDate: "2021",
      features: [
        "Online Room Booking",
        "Real-Time Availability Check",
        "User Account Management",
        "Secure Payment Processing",
        "Reservation History & Management",
        "Automated Booking Confirmation",
        "Room Type & Pricing Management",
        "Guest Reviews & Ratings",
        "Admin Dashboard & Reports",
        "Multi-Language Support"
      ]
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
      technologies: "PHP, Bootstrap, SQL",
      completedDate: "2021",
      features: [
        "Instant Messaging",
        "User Authentication & Profiles",
        "One-on-One & Group Chats",
        "Online/Offline Status Indicators",
        "Message Read & Delivery Receipts",
        "File & Image Sharing",
        "Real-Time Notifications",
        "Chat History & Search",
        "Responsive UI for Mobile & Web"
      ]
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
      technologies: "PHP, Laravel, SQL, HTML, CoreUI template",
      completedDate: "2022",
      features: [
        "Booking & Reservations",
        "User Registration & Management",
        "Camping Spot Availability",
        "Online Payment Integration",
        "Event & Activity Scheduling",
        "Admin Dashboard for Management",
        "Customer Feedback & Reviews",
        "Dynamic Pricing & Discounts",
        "Real-Time Notifications",
        "Responsive UI with CoreUI"
      ]

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
      technologies: "HTML, JavaScript, CSS, PHP",
      completedDate: "2022",
      features: [
        "Live COVID-19 Statistics",
        "Interactive Data Visualizations",
        "Country-wise Case Tracking",
        "Health & Safety Guidelines",
        "News & Updates Section",
        "Vaccination Information",
        "User-Friendly Dashboard",
        "Multi-Language Support",
        "Responsive Design"
      ]
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

  // Desktop: [
  //   {
  //     name: "Yes API (BC)",
  //     images: ["/images/YesAPIBC/p0.png", "/images/YesAPIBC/p1.png", "/images/YesAPIBC/p2.png"],
  //     fullImages: ["/images/YesAPIBC/full_p0.png", "/images/YesAPIBC/full_p1.png", "/images/YesAPIBC/full_p2.png"],
  //     description: "A desktop application for managing APIs with BC integration.",
  //     type: "Desktop application",
  //     technologies: "Electron, Node.js",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "OMRAN Module stock",
  //     images: ["/images/OmranModuleStock/p0.png", "/images/OmranModuleStock/p1.png", "/images/OmranModuleStock/p2.png"],
  //     fullImages: [
  //       "/images/OmranModuleStock/full_p0.png",
  //       "/images/OmranModuleStock/full_p1.png",
  //       "/images/OmranModuleStock/full_p2.png",
  //     ],
  //     description: "A stock management module for the OMRAN system.",
  //     type: "Desktop Application",
  //     technologies: "Electron, Node.js",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "OMRAN Générateur",
  //     images: ["/images/OmranGenerateur/p0.png", "/images/OmranGenerateur/p1.png", "/images/OmranGenerateur/p2.png"],
  //     fullImages: [
  //       "/images/OmranGenerateur/full_p0.png",
  //       "/images/OmranGenerateur/full_p1.png",
  //       "/images/OmranGenerateur/full_p2.png",
  //     ],
  //     description: "A code generator for the OMRAN system.",
  //     type: "Desktop Application",
  //     technologies: "Electron, Node.js",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "YesBS",
  //     images: ["/images/YesBS/p0.png", "/images/YesBS/p1.png", "/images/YesBS/p2.png"],
  //     fullImages: ["/images/YesBS/full_p0.png", "/images/YesBS/full_p1.png", "/images/YesBS/full_p2.png"],
  //     description: "A Business Suite application for desktop environments.",
  //     type: "Desktop Application",
  //     technologies: "Electron, Node.js",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "Service generation automation",
  //     images: [
  //       "/images/ServiceGenerationAutomation/p0.png",
  //       "/images/ServiceGenerationAutomation/p1.png",
  //       "/images/ServiceGenerationAutomation/p2.png",
  //     ],
  //     fullImages: [
  //       "/images/ServiceGenerationAutomation/full_p0.png",
  //       "/images/ServiceGenerationAutomation/full_p1.png",
  //       "/images/ServiceGenerationAutomation/full_p2.png",
  //     ],
  //     description: "An automation tool for generating services for mobile and web.",
  //     type: "Desktop Application",
  //     technologies: "Python",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "YesBS server deployment automation",
  //     images: ["/images/YesBSDeployment/p0.png", "/images/YesBSDeployment/p1.png", "/images/YesBSDeployment/p2.png"],
  //     fullImages: [
  //       "/images/YesBSDeployment/full_p0.png",
  //       "/images/YesBSDeployment/full_p1.png",
  //       "/images/YesBSDeployment/full_p2.png",
  //     ],
  //     description: "An automation tool for deploying YesBS servers.",
  //     type: "Desktop Application",
  //     technologies: "Python",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "Client-side application deployment automation",
  //     images: [
  //       "/images/ClientDeploymentAutomation/p0.png",
  //       "/images/ClientDeploymentAutomation/p1.png",
  //       "/images/ClientDeploymentAutomation/p2.png",
  //     ],
  //     fullImages: [
  //       "/images/ClientDeploymentAutomation/full_p0.png",
  //       "/images/ClientDeploymentAutomation/full_p1.png",
  //       "/images/ClientDeploymentAutomation/full_p2.png",
  //     ],
  //     description: "An automation tool for deploying client-side applications.",
  //     type: "Desktop Application",
  //     technologies: "Python",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "IGNITE server",
  //     images: ["/images/IgniteServer/p0.png", "/images/IgniteServer/p1.png", "/images/IgniteServer/p2.png"],
  //     fullImages: [
  //       "/images/IgniteServer/full_p0.png",
  //       "/images/IgniteServer/full_p1.png",
  //       "/images/IgniteServer/full_p2.png",
  //     ],
  //     description: "A server application for the IGNITE platform.",
  //     type: "Desktop Application",
  //     technologies: "Node.js",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "YesLicense",
  //     images: ["/images/YesLicense/p0.png", "/images/YesLicense/p1.png", "/images/YesLicense/p2.png"],
  //     fullImages: [
  //       "/images/YesLicense/full_p0.png",
  //       "/images/YesLicense/full_p1.png",
  //       "/images/YesLicense/full_p2.png",
  //     ],
  //     description: "A license management system for Yes products.",
  //     type: "Desktop Application",
  //     technologies: "Electron, Node.js",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "Plan reservation",
  //     images: ["/images/PlanReservation/p0.png", "/images/PlanReservation/p1.png", "/images/PlanReservation/p2.png"],
  //     fullImages: [
  //       "/images/PlanReservation/full_p0.png",
  //       "/images/PlanReservation/full_p1.png",
  //       "/images/PlanReservation/full_p2.png",
  //     ],
  //     description: "A desktop application for managing plan reservations.",
  //     type: "Desktop Application",
  //     technologies: "Electron, Node.js",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "Form recognizer",
  //     images: ["/images/FormRecognizer/p0.png", "/images/FormRecognizer/p1.png", "/images/FormRecognizer/p2.png"],
  //     fullImages: [
  //       "/images/FormRecognizer/full_p0.png",
  //       "/images/FormRecognizer/full_p1.png",
  //       "/images/FormRecognizer/full_p2.png",
  //     ],
  //     description: "An invoice recognition system using Azure Form Recognizer API.",
  //     type: "Desktop Application",
  //     technologies: "Python, Azure",
  //     completedDate: "2023",
  //   },
  //   {
  //     name: "Camping reservation",
  //     images: [
  //       "/images/CampingReservation/p0.png",
  //       "/images/CampingReservation/p1.png",
  //       "/images/CampingReservation/p2.png",
  //     ],
  //     fullImages: [
  //       "/images/CampingReservation/full_p0.png",
  //       "/images/CampingReservation/full_p1.png",
  //       "/images/CampingReservation/full_p2.png",
  //     ],
  //     description: "A desktop application for managing camping reservations.",
  //     type: "Desktop Application",
  //     technologies: "Electron, Node.js",
  //     completedDate: "2023",
  //   },
  // ],
  Cloud: [
    {
      name: "Azure virtual machine",
      images: ["/images/VMs/p0.png", "/images/VMs/p1.png", "/images/VMs/p2.png"],
      fullImages: ["/images/VMs/full_p0.png", "/images/VMs/full_p1.png", "/images/VMs/full_p2.png"],
      description: "Cloud-based Virtual Machine management system.",
      type: "Cloud application",
      technologies: "Azure, IIS",
      completedDate: "2024",
      features: [
        "Scalable Cloud Infrastructure",
        "Automated VM Deployment",
        "Remote Access & Management",
        "Integrated Security & Compliance",
        "High Availability & Load Balancing",
        "Backup & Disaster Recovery",
        "Performance Monitoring & Alerts",
        "Customizable VM Configurations"

      ]
    },
    {
      name: "Azure Virtual network",
      images: ["/images/VNet/p0.png", "/images/VNet/p1.png", "/images/VNet/p2.png", "/images/VNet/p3.png"],
      fullImages: ["/images/VNet/full_p0.png", "/images/VNet/full_p1.png", "/images/VNet/full_p2.png", "/images/VNet/full_p2.png"],
      description: "Cloud-based Virtual network management system.",
      type: "Cloud application",
      technologies: "Azure, vNet, Vms",
      completedDate: "2024",
      features: [
        "Secure & Scalable Networking",
        "Custom Subnet Configuration",
        "Private & Public IP Addressing",
        "Virtual Machine Connectivity",
        "Network Traffic Filtering (NSG)",
        "VPN Gateway & Hybrid Connectivity",
        "Load Balancing & Routing",
        "DDoS Protection & Security Policies"

      ]
    },


    {
      "name": "SaaS - Software as a Service",
      "images": ["/images/SaaS/p0.png", "/images/SaaS/p1.png"],
      "fullImages": [
        "/images/SaaS/full_p0.png",
        "/images/SaaS/full_p1.png",
      ],
      "description": "Cloud-based software applications accessible via the internet.",
      "type": "Cloud Application",
      "technologies": "AWS, Azure, Google Cloud",
      "completedDate": "2023",
      "features": [
        "On-Demand Software Access",
        "Automatic Updates & Maintenance",
        "Multi-Tenant Architecture",
        "Scalability & Elasticity",
        "Seamless Integration with APIs",
        "Data Security & Compliance",
        "Subscription-Based Pricing",
        "Cross-Platform Accessibility"
      ]
    },
    {
      "name": "PaaS - Platform as a Service",
      "images": ["/images/PaaS/p0.png", "/images/PaaS/p1.png", "/images/PaaS/p2.png"],
      "fullImages": [
        "/images/PaaS/full_p0.png",
        "/images/PaaS/full_p1.png",
        "/images/PaaS/full_p2.png"
      ],
      "description": "Cloud-based platform for developing, managing, and deploying applications.",
      "type": "Cloud Application",
      "technologies": "AWS, Azure, Google Cloud",
      "completedDate": "2023",
      "features": [
        "Managed Development Environment",
        "Pre-Configured Application Stacks",
        "Automated Infrastructure Management",
        "Scalability & Load Balancing",
        "Continuous Integration & Deployment",
        "Database & Storage Integration",
        "High Availability & Fault Tolerance",
        "Security & Access Control"
      ]
    },
    // {
    //   "name": "IaaS - Infrastructure as a Service",
    //   "images": ["/images/IaaS/p0.png", "/images/IaaS/p1.png", "/images/IaaS/p2.png"],
    //   "fullImages": [
    //     "/images/IaaS/full_p0.png",
    //     "/images/IaaS/full_p1.png",
    //     "/images/IaaS/full_p2.png"
    //   ],
    //   "description": "Cloud-based virtualized computing resources, including storage and networking.",
    //   "type": "Cloud Application",
    //   "technologies": "AWS, Azure, Google Cloud",
    //   "completedDate": "2023",
    //   "features": [
    //     "On-Demand Virtual Machines",
    //     "Customizable Compute Resources",
    //     "Scalable Storage Solutions",
    //     "High-Performance Networking",
    //     "Disaster Recovery & Backup",
    //     "Security & Identity Management",
    //     "Pay-As-You-Go Pricing",
    //     "Multi-Region Availability"
    //   ]
    // },
    // {
    //   "name": "DaaS - Desktop as a Service",
    //   "images": ["/images/DaaS/p0.png", "/images/DaaS/p1.png", "/images/DaaS/p2.png"],
    //   "fullImages": [
    //     "/images/DaaS/full_p0.png",
    //     "/images/DaaS/full_p1.png",
    //     "/images/DaaS/full_p2.png"
    //   ],
    //   "description": "Cloud-hosted virtual desktops for remote access and management.",
    //   "type": "Cloud Application",
    //   "technologies": "AWS, Azure, Google Cloud",
    //   "completedDate": "2023",
    //   "features": [
    //     "Cloud-Based Virtual Desktops",
    //     "Secure Remote Access",
    //     "Multi-Device Compatibility",
    //     "Centralized Management & Monitoring",
    //     "Scalability & Flexibility",
    //     "Data Encryption & Security",
    //     "Cost-Effective Subscription Model",
    //     "High Availability & Performance"
    //   ]
    // },
    // {
    //   name: "LoadBalancer",
    //   images: ["/images/LoadBalancer/p0.png", "/images/LoadBalancer/p1.png", "/images/LoadBalancer/p2.png"],
    //   fullImages: [
    //     "/images/LoadBalancer/full_p0.png",
    //     "/images/LoadBalancer/full_p1.png",
    //     "/images/LoadBalancer/full_p2.png",
    //   ],
    //   description: "A cloud-based load balancing solution.",
    //   type: "Cloud Application",
    //   technologies: "AWS, Azure",
    //   completedDate: "2023",
    // },
  ],
  Dashboard: [
    {
      name: "Analytical youtube channels",
      images: ["/images/SeifAnalytics/p0.png", "/images/SeifAnalytics/p1.png", "/images/SeifAnalytics/p2.png"],
      fullImages: [
        "/images/SeifAnalytics/full_p0.png",
        "/images/SeifAnalytics/full_p1.png",
        "/images/SeifAnalytics/full_p2.png",
      ],
      description: "Our dashboard provides insightful visualizations, tracking channel performance metrics, estimating revenue, analyzing growth over time.",
      type: "Dashboard",
      technologies: "PowerBI, csv, charts",
      completedDate: "2022",
      features: [
        "Interactive Visualizations",
        "Real-Time Data Updates",
        "Channel Performance Metrics",
        "Customizable Filters",
        "Comparative Analysis",
        "Engagement Metrics",
        "Watch Time Insights",
        "Monetization Overview",
        "Geo-Analytics",
        "Trend Analysis",
        "Exportable Reports"

      ]
    },
  ],
}