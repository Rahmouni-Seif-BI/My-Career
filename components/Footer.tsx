import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Seif RAHMOUNI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

