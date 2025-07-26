const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Mermory",
    date: "July 2025 - Current",
    description: [
      "Developed SEO-optimized landing pages using Next.js, React, and TypeScript, improving crawlability and boosting Lighthouse SEO scores by 20+ points.",
      "Built a Node.js-based transformation layer to fetch and cache data from Strapi CMS (hosted in a private VPC) into Redis, reducing content retrieval time by 50%.",
      "Implemented dual sync mechanisms using webhooks and scheduled polling, ensuring real-time consistency and high availability of CMS content for server-rendered pages.",
    ],
  },
  {
    title: "Graduate Developer",
    company: "Illinois Institute of Technology",
    date: "January 2025 - May 2025",
    description: [
      "Managed and developed the college website using Next.js and React, ensuring modern user interfaces and responsive design.",
      "Assisted in the migration of the college's legacy website to a new Next.js platform, improving performance, scalability, and user experience.",
      "Developed reusable React components and integrated with APIs to streamline front-end development and enhance dynamic content delivery.",
    ],
  },
  {
    title: "Software Developer",
    company: "Agnikul Cosmos",
    date: "June 2023 - June 2024",
    description: [
      "Accelerated interface validation by 35% for Agnibaan launch vehicle by building async microservices using Node.js, Redis, and GraphQL APIs, enabling engineers to run real-time compatibility checks across mechanical, electrical, and fluidic subsystems.",
      "Boosted debugging efficiency by 25% by building a React + TypeScript interface with GraphQL and Material UI, visualizing real-time inter-component dependencies and enabling engineers to identify failure points with precision.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {exp.date}
              </p>
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
  );
};

export default Experience;
