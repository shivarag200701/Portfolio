"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "A passionate Computer Science graduate student at Illinois Institute of Technology"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 50)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4"
        >
          Hello, I'm Shiva Raghav Rajasekar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-16"
        >
          {text}
        </motion.p>
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Learn More
          <ArrowDown className="ml-2" size={20} />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero

