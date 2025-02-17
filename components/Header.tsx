"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Logo from "./Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-peach dark:bg-warm-brown bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm text-gray-800 dark:text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <Logo />
          </a>
          <div className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
            >
              About
            </a>
            <a
              href="#education"
              className="text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
            >
              Education
            </a>
            <a
              href="#experience"
              className="text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-soft-teal dark:bg-muted-lavender text-warm-brown dark:text-peach mr-4"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a
              href="#about"
              className="block text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#education"
              className="block text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
              onClick={toggleMenu}
            >
              Education
            </a>
            <a
              href="#experience"
              className="block text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block text-warm-brown dark:text-soft-teal hover:text-muted-lavender dark:hover:text-muted-lavender"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

