import ContactForm from '@/components/ContactForm'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto py-20 px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Contact Me</h2>
      <p className="text-gray-600 mb-10">
        Feel free to reach out through the form or connect with me on any of the platforms below.
      </p>

      {/* Icons Row */}
      <div className="flex justify-center gap-8 mb-16">
        <a
          href="mailto:nakpil47@gmail.com"
          aria-label="Send Email"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#D44638] transition transform hover:scale-110"
        >
          <FaEnvelope className="w-7 h-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/alvin-nakpil-9ab902129/"
          aria-label="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#0077b5] transition transform hover:scale-110"
        >
          <FaLinkedin className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/jayv1ins"
          aria-label="GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition transform hover:scale-110"
        >
          <FaGithub className="w-7 h-7" />
        </a>
      </div>

      {/* Contact Form */}
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  )
}
