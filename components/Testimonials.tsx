"use client"

import { useState, useEffect } from "react"
//import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager",
    content: "Seif is an exceptional developer. His attention to detail and problem-solving skills are outstanding.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    content:
      "Working with Seif has been a pleasure. He consistently delivers high-quality work and is always eager to learn.",
  },
  {
    name: "Mike Johnson",
    role: "Senior Developer",
    content: "Seif's expertise in both front-end and back-end development makes him an invaluable asset to any team.",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Testimonials</h2>
      <div className="max-w-4xl mx-auto px-4 relative">
        <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            {/* <Image
              src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
              alt={testimonials[currentTestimonial].name}
              width={64}
              height={64}
              className="rounded-full mr-4"
            /> */}
            <div>
              <h3 className="font-semibold text-white">{testimonials[currentTestimonial].name}</h3>
              <p className="text-gray-300">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
          <p className="text-gray-100 italic">&ldquo;{testimonials[currentTestimonial].content}&rdquo;</p>
        </div>
        <Button
          variant="outline"
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white"
          onClick={prevTestimonial}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white"
          onClick={nextTestimonial}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

