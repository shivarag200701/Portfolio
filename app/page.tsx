import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import FloatingActionButton from "@/components/FloatingActionButton"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <FloatingActionButton />
    </main>
  )
}

