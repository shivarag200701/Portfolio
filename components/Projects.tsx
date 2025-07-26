"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
  {
    title: "AI Resume Analyzer – RESUMID	",
    description: [
      "Engineered a full-stack AI resume analysis platform using React 19, TypeScript, and Claude AI, delivering real-time feedback on tone, structure, and ATS compatibility — resulting in up to 60% improvement in resume quality during internal testing.",
      "Integrated Puter.js cloud services (Auth, AI, Storage, Key-Value DB) with a pay-as-you-go “User Pays” model, eliminating backend server costs and enabling 100% free, scalable deployment for developers.",
    ],
    image: "resumid.png",
    details:
      "An AI-powered tool that tailors resumes and cover letters using job descriptions via LLMs, RAG, and embeddings.",
  },
  {
    title: "Satellite Collision Prediction Platform ",
    description: [
      "Engineered a full-stack satellite collision risk dashboard using FastAPI, Skyfield, and PostgreSQL, visualizing real-time orbit data via CesiumJS.",
      "Scaled backend to analyze 11,643 satellites and 135M+ orbit pairings, reducing collision scan time by 85% through optimized spatial computation and batch processing.",
      "Integrated APScheduler for automated 6-hour TLE updates and continuous background collision detection.",
    ],
    image: "SatelliteCollisionPredictor.png",
    details:
      "Visual dashboard to predict close approaches between orbiting satellites with real-time updates and 3D visualization.",
  },
  {
    title: "Real-Time Messaging Platform",
    description: [
      "Built a scalable chat system with React, Express, MongoDB, and Socket.IO, supporting 1:1 messaging, read receipts, and persistent history.",
      "Enabled secure payments using Stripe Checkout and Webhooks, reducing transaction time by ~40% and allowing in-chat digital purchases.",
      "Designed RESTful APIs for seamless frontend-backend communication and robust message persistence.",
    ],
    image: "MessagingApp.png",
    details:
      "A full-featured messaging app with instant delivery, user authentication, and payment integration.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
          My Projects
        </h2>
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.details}
                </p>
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
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
              </div>
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title + " dashboard screenshot"}
                width={800}
                height={600}
                className="w-full max-h-[70vh] object-contain rounded-lg border-2 border-blue-200 shadow-xl mb-4 bg-white"
              />
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {selectedProject.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
