"use client"

import { Code, Database, Cloud, BarChartIcon as ChartBar, Book, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const skills = [
  { name: "Programming Languages", level: 90, icon: Code },
  { name: "Cloud/Databases", level: 85, icon: Database },
  { name: "Tools and Frameworks", level: 80, icon: Cloud },
  { name: "Libraries", level: 85, icon: ChartBar },
  { name: "Technical Skills", level: 90, icon: Book },
  { name: "Other", level: 75, icon: Terminal },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const chartData = {
    labels: skills.map((skill) => skill.name),
    datasets: [
      {
        label: "Skill Level",
        data: skills.map((skill) => skill.level),
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    indexAxis: "y" as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Skill Levels",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">My Skills</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <Bar data={chartData} options={chartOptions} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

