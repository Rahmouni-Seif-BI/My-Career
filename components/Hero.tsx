"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations, useLocale } from "@/lib/i18n-client"

const images = [
  "/images/Banner/banner.png",
  "https://cdn.vectorstock.com/i/500p/59/83/abstract-background-on-technological-vector-43795983.avif",
  "https://cdn.vectorstock.com/i/500p/14/95/banner-software-ui-and-development-for-different-vector-37731495.avif",
  "/images/Banner/banner_1.png"
]

// Define types for the circle props
interface BouncingCircleProps {
  size: number;
  color: string;
  opacity: number;
  speed: number;
  initialPosition: { x: number; y: number };
  initialDirection: { x: number; y: number };
  containerRef: React.RefObject<HTMLElement>;
}

// Define type for circle configuration
interface CircleConfig {
  id: number;
  size: number;
  color: string;
  opacity: number;
  speed: number;
  initialPosition: { x: number; y: number };
  initialDirection: { x: number; y: number };
}

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const containerRef = useRef<HTMLElement | null>(null)
  const { locale } = useLocale()
  const { t } = useTranslations(locale)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Bouncing circles configuration
  const circles: CircleConfig[] = [
    { 
      id: 1, 
      size: 60, 
      color: "cyan", 
      opacity: 0.2, 
      speed: 3,
      initialPosition: { x: 50, y: 30 },
      initialDirection: { x: 1, y: 1 }
    },
    { 
      id: 2, 
      size: 40, 
      color: "blue", 
      opacity: 0.3, 
      speed: 2.5,
      initialPosition: { x: 120, y: 80 },
      initialDirection: { x: -1, y: 1 }
    },
    { 
      id: 3, 
      size: 25, 
      color: "cyan", 
      opacity: 0.4, 
      speed: 3.5,
      initialPosition: { x: 200, y: 150 },
      initialDirection: { x: -1, y: -1 }
    }
  ]

  const pulseArc = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const orbitArc = {
    animate: {
      rotate: 360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden rounded-lg" ref={containerRef}>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src || "/placeholder.svg"}
          alt={`Hero image ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className={`transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      
      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bouncing circles that change direction when hitting edges */}
        {circles.map((circle) => (
          <BouncingCircle 
            key={circle.id}
            size={circle.size}
            color={circle.color}
            opacity={circle.opacity}
            speed={circle.speed}
            initialPosition={circle.initialPosition}
            initialDirection={circle.initialDirection}
            containerRef={containerRef}
          />
        ))}
        
        {/* Medium pulsing circle */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4"
          variants={pulseArc}
          animate="animate"
        >
        </motion.div>
        
        {/* Orbital path with dot */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2"
          variants={orbitArc}
          animate="animate"
        >
          <div className="relative w-full h-full border border-blue-300 rounded-full opacity-0">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          </div>
        </motion.div>
        
        {/* Tech-inspired decorative lines */}
        <motion.div 
          className="absolute top-0 left-0 w-32 h-32"
          initial={{ opacity: 0.4 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            x: [5, 15, 5],
            y: [5, 15, 5]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="w-full h-full border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 right-0 w-32 h-32"
          initial={{ opacity: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            x: [-5, -15, -5],
            y: [-5, -15, -5]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="w-full h-full border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
        </motion.div>
        
        {/* Floating code-like elements */}
        <motion.div 
          className="absolute top-1/4 right-1/4"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.7, 1, 0.7] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <div className="text-white opacity-30 text-xl">&lt;/&gt;</div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 left-1/4"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.6, 0.9, 0.6] 
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="text-blue-400 opacity-30 text-xl">{"{}"}</div>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center z-10 px-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]">
          {t('hero.title')}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 max-w-2xl mx-auto text-cyan-100 drop-shadow-[0_0_8px_rgba(207,250,254,0.5)]">
          {t('hero.subtitle')}
        </p>
        <p className="text-base md:text-lg mb-4 md:mb-6 max-w-xl mx-auto text-gray-300">
          {t('hero.description')}
        </p>
        <motion.a
          href="#contact"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-blue-600 transition-all duration-500"></div>
          
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Glowing effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          
          {/* Button content */}
          <span className="relative z-10 flex items-center space-x-2">
            <span>{t('hero.cta')}</span>
            <motion.svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </span>
          
          {/* Particle effects on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ 
                  x: "50%", 
                  y: "50%", 
                  opacity: 0,
                  scale: 0
                }}
                whileHover={{
                  x: `${20 + Math.random() * 60}%`,
                  y: `${20 + Math.random() * 60}%`,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  transition: {
                    duration: 1,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }
                }}
              />
            ))}
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ 
              scale: [0, 1.5, 0], 
              opacity: [0, 0.3, 0] 
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.a>
      </motion.div>
    </section>
  )
}

// Bouncing Circle Component
function BouncingCircle({ size, color, opacity, speed, initialPosition, initialDirection, containerRef }: BouncingCircleProps) {
  const [position, setPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(initialDirection)
  
  useEffect(() => {
    let animationFrameId: number
    let lastTime: number | null = null
    
    const animate = (time: number) => {
      if (lastTime === null) {
        lastTime = time
        animationFrameId = requestAnimationFrame(animate)
        return
      }
      
      const deltaTime = (time - lastTime) / 16 // normalize to ~60fps
      lastTime = time
      
      if (!containerRef.current) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }
      
      const container = containerRef.current.getBoundingClientRect()
      
      // Calculate new position
      let newX = position.x + direction.x * speed * deltaTime
      let newY = position.y + direction.y * speed * deltaTime
      
      // Check boundaries and change direction if needed
      let newDirectionX = direction.x
      let newDirectionY = direction.y
      
      // Right boundary
      if (newX + size >= container.width) {
        newX = container.width - size
        newDirectionX = -Math.abs(direction.x) * (0.8 + Math.random() * 0.4) // Random bounce factor
      }
      // Left boundary
      else if (newX <= 0) {
        newX = 0
        newDirectionX = Math.abs(direction.x) * (0.8 + Math.random() * 0.4)
      }
      
      // Bottom boundary
      if (newY + size >= container.height) {
        newY = container.height - size
        newDirectionY = -Math.abs(direction.y) * (0.8 + Math.random() * 0.4)
      }
      // Top boundary
      else if (newY <= 0) {
        newY = 0
        newDirectionY = Math.abs(direction.y) * (0.8 + Math.random() * 0.4)
      }
      
      // Occasionally add some randomness to direction even without hitting edges
      if (Math.random() < 0.005) {
        newDirectionX += (Math.random() - 0.5) * 0.5
        newDirectionY += (Math.random() - 0.5) * 0.5
      }
      
      // Update state
      setPosition({ x: newX, y: newY })
      setDirection({ x: newDirectionX, y: newDirectionY })
      
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animationFrameId = requestAnimationFrame(animate)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [position, direction, size, speed, containerRef])
  
  return (
    <motion.div
      className="absolute rounded-full border-2"
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
        borderColor: color === "cyan" ? "#06b6d4" : "#3b82f6",
        backgroundColor: color === "cyan" ? "rgba(6, 182, 212, 0.1)" : "rgba(59, 130, 246, 0.1)",
        opacity: opacity,
        boxShadow: `0 0 10px 2px ${color === "cyan" ? "rgba(6, 182, 212, 0.3)" : "rgba(59, 130, 246, 0.3)"}`
      }}
      animate={{
        boxShadow: [
          `0 0 10px 2px ${color === "cyan" ? "rgba(6, 182, 212, 0.3)" : "rgba(59, 130, 246, 0.3)"}`,
          `0 0 15px 3px ${color === "cyan" ? "rgba(6, 182, 212, 0.4)" : "rgba(59, 130, 246, 0.4)"}`,
          `0 0 10px 2px ${color === "cyan" ? "rgba(6, 182, 212, 0.3)" : "rgba(59, 130, 246, 0.3)"}`
        ],
        opacity: [opacity, opacity * 1.3, opacity]
      }}
      transition={{
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}