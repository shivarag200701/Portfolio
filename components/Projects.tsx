"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const projects = [
  {
    title: "Microservices-Based Time-Series Forecasting Platform",
    description:
      "Built and deployed a forecasting application with 95% accuracy, using TensorFlow/Keras, Prophet, and StatsModel. Leveraged CI/CD pipelines with Docker and Google Cloud to cut deployment time by 30%.",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "This project involved developing a scalable microservices architecture for time-series forecasting. Key features included real-time data processing, model training, and result visualization. The use of Docker and Google Cloud enabled efficient deployment and scaling of the application.",
  },
  {
    title: "Toxic Tweets Dataset: NLP Problem",
    description:
      "Devised NLP methods to analyze and predict the toxicity levels of tweets, achieving a 90% accuracy in classification. Applied dimensionality reduction to textual data using Tf-Idf.",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "This project focused on developing a machine learning model to classify toxic tweets. The process involved data preprocessing, feature engineering using TF-IDF, and implementing various NLP techniques. The final model achieved high accuracy in identifying different levels of toxicity in social media content.",
  },
  {
    title: "YouTube Data Harvesting And Warehousing",
    description:
      "Developed a project that enables users to access and analyze data from multiple YouTube channels. Acquired in-depth knowledge of Python scripting and API integration through the Google Developer Console.",
    image: "/placeholder.svg?height=300&width=400",
    details:
      "This project involved creating a system to collect, process, and analyze data from YouTube channels. Key components included API integration with the YouTube Data API, data warehousing solutions, and the development of analytics tools to derive insights from the collected data.",
  },
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>
              <p className="text-gray-700 dark:text-gray-200">{selectedProject.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects

