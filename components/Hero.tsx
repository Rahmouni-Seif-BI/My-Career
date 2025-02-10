"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const images = ["https://www.simplilearn.com/ice9/free_resources_article_thumb/cyber_security_vs_software_engineering.jpg",

 "https://extension.harvard.edu/wp-content/uploads/sites/8/2022/11/how-to-become-a-software-engineer.jpg",

 "https://media.licdn.com/dms/image/v2/D4E12AQEnNKiiNUKz9Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693476739453?e=2147483647&v=beta&t=GJFkWsA-sWUOFI02Aied_XdQ1bALhfLS8j_rzNl-ZMQ"]

 export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden rounded-lg">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white z-10 px-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4">
          Seif&rsquo;s Professional Career
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 max-w-2xl mx-auto">
          Experienced software engineer specializing in mobile, web, and desktop applications
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-full transition-colors text-sm md:text-base"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  )
}
// export default function Hero() {
//   const [currentImage, setCurrentImage] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length)
//     }, 3000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <section className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-lg">
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
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative text-center text-white z-10"
//       >
//         <h1 className="text-7xl font-bold mb-4">Seif&rsquo;s Professional Career</h1>
//         <p className="text-2xl mb-8">
//           Experienced software engineer specializing in mobile, web, and desktop applications
//         </p>
//         <a
//           href="#contact"
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
//         >
//           Get in Touch
//         </a>
//       </motion.div>
//     </section>
//   )
// }

