import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-12">Get In Touch</h2>
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="space-y-4 flex flex-col items-center">
            <a
              href="mailto:shivaraghav200701@gmail.com"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-6 h-6 mr-2" />
              <span>shivaraghav200701@gmail.com</span>
            </a>
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <Phone className="w-6 h-6 mr-2" />
              <span>(872) 288-5699</span>
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-6 h-6 mr-2" />
              <span>Chicago, Illinois</span>
            </p>
            <a
              href="https://www.linkedin.com/in/shiva-raghav/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6 mr-2" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
          <div className="mt-8">
            <a
              href="mailto:shivaraghav200701@gmail.com"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

