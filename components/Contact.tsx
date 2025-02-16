const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">Get In Touch</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            <strong>Email:</strong> shivaraghav200701@gmail.com
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            <strong>Phone:</strong> (872) 288-5699
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Location:</strong> Chicago, Illinois
          </p>
          <a
            href="https://www.linkedin.com/in/shiva-raghav/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

