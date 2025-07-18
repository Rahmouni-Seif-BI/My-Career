import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Education from "@/components/Education"
import Statistics from "@/components/Statistics"
import CV from "@/components/CV"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Statistics />
        <Experience />
        <Education />
        <Projects />
        <Skills/>
        <CV />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

