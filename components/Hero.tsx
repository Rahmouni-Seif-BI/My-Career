// "use client"

// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"

// const images = [
//   "/images/Banner/banner.png",
//   "https://cdn.vectorstock.com/i/500p/59/83/abstract-background-on-technological-vector-43795983.avif",
//   "https://cdn.vectorstock.com/i/500p/14/95/banner-software-ui-and-development-for-different-vector-37731495.avif",
//   "/images/Banner/banner_1.png"
// ]

// export default function Hero() {
//   const [currentImage, setCurrentImage] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length)
//     }, 3000)
//     return () => clearInterval(timer)
//   }, [])

//   // Animation variants for the floating arcs
//   const floatingArc = {
//     animate: {
//       rotate: 360,
//       transition: {
//         duration: 20,
//         repeat: Infinity,
//         ease: "linear"
//       }
//     }
//   }

//   const pulseArc = {
//     animate: {
//       scale: [1, 1.05, 1],
//       opacity: [0.7, 0.9, 0.7],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   }

//   const orbitArc = {
//     animate: {
//       rotate: 360,
//       transition: {
//         duration: 15,
//         repeat: Infinity,
//         ease: "linear"
//       }
//     }
//   }

//   return (
//     <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden rounded-lg">
//       {images.map((src, index) => (
//         <Image
//           key={src}
//           src={src || "/placeholder.svg"}
//           alt={`Hero image ${index + 1}`}
//           fill
//           style={{ objectFit: "cover" }}
//           className={`transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}
//         />
//       ))}
//       <div className="absolute inset-0 bg-black bg-opacity-70" />
      
//       {/* Animated decorative elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Large rotating circle */}
//         <motion.div 
//           className="absolute w-full h-full"
//           variants={floatingArc}
//           animate="animate"
//         >
//           <div className="absolute top-0 left-0 w-60 h-60  border-4 border-cyan-500 rounded-full opacity-20"></div>
//         </motion.div>
        
//         {/* Medium pulsing circle */}
//         <motion.div 
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4"
//           variants={pulseArc}
//           animate="animate"
//         >
//         </motion.div>
        
//         {/* Orbital path with dot */}
//         <motion.div 
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2"
//           variants={orbitArc}
//           animate="animate"
//         >
//           <div className="relative w-full h-full border border-blue-300 rounded-full opacity-0">
//             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
//           </div>
//         </motion.div>
        
//         {/* Tech-inspired decorative lines */}
//         <motion.div 
//           className="absolute top-0 left-0 w-32 h-32"
//           initial={{ opacity: 0.4 }}
//           animate={{ 
//             opacity: [0.4, 0.8, 0.4],
//             x: [5, 15, 5],
//             y: [5, 15, 5]
//           }}
//           transition={{ 
//             duration: 5, 
//             repeat: Infinity,
//             ease: "easeInOut" 
//           }}
//         >
//           <div className="w-full h-full border-t-2 border-l-2 border-cyan-400 rounded-tl-lg"></div>
//         </motion.div>
        
//         <motion.div 
//           className="absolute bottom-0 right-0 w-32 h-32"
//           initial={{ opacity: 0.8 }}
//           animate={{ 
//             opacity: [0.4, 0.8, 0.4],
//             x: [-5, -15, -5],
//             y: [-5, -15, -5]
//           }}
//           transition={{ 
//             duration: 4, 
//             repeat: Infinity,
//             ease: "easeInOut" 
//           }}
//         >
//           <div className="w-full h-full border-b-2 border-r-2 border-cyan-400 rounded-br-lg"></div>
//         </motion.div>
        
//         {/* Floating code-like elements */}
//         <motion.div 
//           className="absolute top-1/4 right-1/4"
//           animate={{ 
//             y: [0, -10, 0],
//             opacity: [0.7, 1, 0.7] 
//           }}
//           transition={{ 
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut" 
//           }}
//         >
//           <div className="text-white opacity-30 text-xl">&lt;/&gt;</div>
//         </motion.div>
        
//         <motion.div 
//           className="absolute bottom-1/4 left-1/4"
//           animate={{ 
//             y: [0, -10, 0],
//             opacity: [0.6, 0.9, 0.6] 
//           }}
//           transition={{ 
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 1
//           }}
//         >
//           <div className="text-blue-400 opacity-30 text-xl">{"{}"}</div>
//         </motion.div>
//       </div>
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative text-center z-10 px-4"
//       >
//         <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.7)]">
//           Seif&rsquo;s Professional Career
//         </h1>
//         <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 max-w-2xl mx-auto text-cyan-100 drop-shadow-[0_0_8px_rgba(207,250,254,0.5)]">
//           Experienced software engineer specializing in mobile, web, and desktop applications
//         </p>
//         <a
//           href="#contact"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-full transition-colors text-sm md:text-base glow-button"
//         >
//           Get in Touch
//         </a>
        
//         <style jsx>{`
//           .glow-button {
//             box-shadow: 0 0 15px rgba(37, 99, 235, 0.7);
//             text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
//           }
//         `}</style>
//       </motion.div>
//     </section>
//   )
// }

"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  "/images/Banner/banner.png",
  "https://cdn.vectorstock.com/i/500p/59/83/abstract-background-on-technological-vector-43795983.avif",
  "https://cdn.vectorstock.com/i/500p/14/95/banner-software-ui-and-development-for-different-vector-37731495.avif",
  "/images/Banner/banner_1.png"
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Bouncing circles configuration
  const circles = [
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
          Seif&rsquo;s Professional Career
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 max-w-2xl mx-auto text-white drop-shadow-[0_0_8px_rgba(207,250,254,0.5)]">
          Experienced software engineer specializing in mobile, web, and desktop applications
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-full transition-colors text-sm md:text-base glow-button"
        >
          Get in Touch
        </a>
        
        <style jsx>{`
          .glow-button {
            box-shadow: 0 0 15px rgba(37, 99, 235, 0.7);
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
          }
        `}</style>
      </motion.div>
    </section>
  )
}

// Bouncing Circle Component
function BouncingCircle({ size, color, opacity, speed, initialPosition, initialDirection, containerRef }) {
  const [position, setPosition] = useState(initialPosition)
  const [direction, setDirection] = useState(initialDirection)
  
  useEffect(() => {
    let animationFrameId
    let lastTime = null
    
    const animate = (time) => {
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