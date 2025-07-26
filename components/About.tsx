const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-8">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a Master's student in Computer Science at Illinois Institute of
            Technology, with a strong foundation in software development and
            data analysis. I have a passion for building scalable and efficient
            systems.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            I’m a Master’s student in Computer Science at Illinois Institute of
            Technology, with a strong foundation in full-stack development,
            backend systems, and cloud-native applications. Currently interning
            at Mermory, I’ve contributed to performance-optimized, SEO-driven
            platforms using modern frameworks like Next.js, React, and
            TypeScript, along with CMS and caching integrations. Beyond my
            internship, I’ve built tools like Resumid, an AI-powered resume
            analyzer, and continue to explore projects at the intersection of
            software engineering and AI, including smart assistants and
            developer productivity tools. I’m passionate about building
            scalable, user-focused applications and leveraging technology to
            solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
