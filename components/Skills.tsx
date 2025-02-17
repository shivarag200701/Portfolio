"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  {
    category: "Programming Languages",
    techs: [
      {
        name: "Java",
        badge: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
      },
      {
        name: "Python",
        badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
      },
      {
        name: "JavaScript",
        badge:
          "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
      },
      {
        name: "HTML",
        badge: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      },
      {
        name: "SQL",
        badge: "https://img.shields.io/badge/sql-%2307405e.svg?style=for-the-badge&logo=postgresql&logoColor=white",
      },
      {
        name: "CSS",
        badge: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
      },
      {
        name: "SCSS",
        badge: "https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
      },
    ],
  },
  {
    category: "Frameworks",
    techs: [
      {
        name: "React",
        badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      },
      {
        name: "Flask",
        badge: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
      },
      {
        name: "Express.js",
        badge:
          "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
      },
      {
        name: "Tailwind CSS",
        badge:
          "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
      },
      {
        name: "Next.js",
        badge: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
      },
    ],
  },
  {
    category: "Tools and Technologies",
    techs: [
      {
        name: "Git",
        badge: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
      },
      {
        name: "Visual Studio",
        badge:
          "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
      },
      {
        name: "PyCharm",
        badge:
          "https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green",
      },
      {
        name: "IntelliJ",
        badge:
          "https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white",
      },
      {
        name: "Jira",
        badge: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
      },
      {
        name: "MySQL",
        badge: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
      },
      {
        name: "Jenkins",
        badge: "https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white",
      },
      {
        name: "GitHub",
        badge: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
      },
      {
        name: "BitBucket",
        badge:
          "https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white",
      },
      {
        name: "SonarQube",
        badge: "https://img.shields.io/badge/SonarQube-black?style=for-the-badge&logo=sonarqube&logoColor=4E9BCD",
      },
      {
        name: "Anaconda",
        badge: "https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white",
      },
      {
        name: "Swagger",
        badge: "https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white",
      },
      {
        name: "JUnit",
        badge: "https://img.shields.io/badge/JUnit5-25A162?style=for-the-badge&logo=junit5&logoColor=white",
      },
      {
        name: "GCP",
        badge:
          "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white",
      },
      {
        name: "Cursor",
        badge: "https://img.shields.io/badge/Cursor-00A98F?style=for-the-badge&logo=cursor&logoColor=white"
      },
      {
        name: "Vercel",
        badge: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
      },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">My Skills</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8"
        >
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.techs.map((tech, techIndex) => (
                  <motion.img
                    key={techIndex}
                    src={tech.badge}
                    alt={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    className="h-8"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

