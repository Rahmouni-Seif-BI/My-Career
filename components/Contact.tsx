"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="mb-4">
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Send Message
        </Button>
      </form>
    </section>
  )
}

