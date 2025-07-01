"use client";
import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const educationData = [
    {
        school: "Illinois Institute of Technology",
        location: "Chicago, IL",
        degree: "Master of Science in Computer Science",
        graduationDate: "May 2026",
        gpa: "3.66",
    },
    {
        school: "College of Engineering, Guindy Anna University",
        location: "Chennai, India",
        degree: "Bachelor of Engineering in Mechanical Engineering",
        graduationDate: "May 2023",
        gpa: "3.8",
    },
]

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">Education</h2>
                <div className="max-w-3xl mx-auto">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-muted-lavender dark:bg-soft-teal p-6 rounded-lg shadow-xl"
                        >
                            <div className="flex items-start">
                                <GraduationCap className="w-6 h-6 mt-1 mr-4 text-gray-800 dark:text-white" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.school}</h3>
                                    <p className="text-gray-800 dark:text-sand">{edu.location}</p>
                                    <p className="text-gray-800 dark:text-white mt-2">{edu.degree}</p>
                                    <div className="flex justify-between my-2 text-md text-gray-800 dark:text-white">
                                        <span>Graduation: {edu.graduationDate}</span>
                                        <span></span>
                                    </div>
                                    <p className="text-gray-800 dark:text-white">GPA: {edu.gpa}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education

