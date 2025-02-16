"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-semibold text-gray-800 dark:text-white">
            Shiva Raghav
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Experience
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white mr-4"
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
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
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

