import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import FloatingActionButton from "@/components/FloatingActionButton"
import Education from "@/components/Education"

export default function Home() {
  return (
    <main className="min-h-screen bg-peach dark:bg-warm-brown">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <FloatingActionButton />
    </main>
  )
}


