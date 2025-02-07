"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          Seif Portfolio
        </Link>
        <div className="hidden md:flex space-x-4">
          {["Experience", "Education", "Projects", "Skills", "Testimonials", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <Button variant="ghost" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          {["Experience", "Projects", "Skills", "Testimonials", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-4 text-gray-300 hover:bg-gray-700"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

