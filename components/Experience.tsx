const experiences = [
  {
    title: "Teaching Assistant - Software Engineering",
    company: "Illinois Institute of Technology",
    date: "January 2025 - May 2025",
    description: [
      "Graded assignments and exams with a 24-hour turnaround, ensuring timely feedback to students.",
      "Coordinated and facilitated group project meetings, providing guidance and support to students in accomplishing project objectives.",
    ],
  },
  {
    title: "ERP-Next Developer",
    company: "Agnikul Cosmos",
    date: "August 2023 - January 2024",
    description: [
      "Created the Initial Prototype for a Systems Engineering tool helped to automate the Production process.",
      "Customized ERPNext features by leveraging Jinja for templating and JavaScript for dynamic functionality, enhancing system usability and reducing data entry errors by 30%.",
      "Integrated third-party system by developing RESTful APIs, setting up Webhooks, and processing JSON data for seamless communication.",
    ],
  },
  {
    title: "Intern - Quantum Machine Learning",
    company: "IBM Quantum",
    date: "July 2021 - August 2021",
    description: [
      "Focused on parameterized quantum circuits and applying to basic problems.",
      "Applied quantum kernels to enhance supervised and unsupervised learning models.",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

