'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload  } from 'react-icons/fa'


export default function AboutPage() {
  const techStack = [
    { name: 'PHP', level: 'Proficient' },
    { name: 'Laravel', level: 'Proficient' },
    { name: 'Node.js', level: 'Experienced' },
    { name: 'Express.js', level: 'Experienced' },
    { name: 'Vue.js', level: 'Current Stack' },
    { name: 'React.js', level: 'Experienced' },
    { name: 'React Native.js', level: 'Learning' },
    { name: 'Next.js', level: 'Learning' },
    { name: 'TypeScript', level: 'Basic' },
    { name: 'HTML/CSS', level: 'Comfortable' },
    { name: 'Tailwind CSS', level: 'Experienced' },
    { name: 'JavaScript', level: 'Proficient' },
    { name: 'MongoDB', level: 'Basic' },
    { name: 'MySQL', level: 'Proficient' },
    { name: 'Git / GitHub', level: 'Daily Use' },
    { name: 'Nginx + PuTTY', level: 'Experienced' },
    { name: 'Postman', level: 'Daily Use' },
    { name: 'XAMPP', level: 'Daily Use' },
  ]

  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const angle = Math.sin(scrollY / 200) * 3
      setRotation(angle)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      {/* About Me & Stack */}
      <section className="max-w-4xl mx-auto py-20 px-6">
       <div
        className="absolute top-[64px] left-0 w-full h-[calc(100vh-64px)] z-[-1]"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <Image
          src="/images/background2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="absolute top-[100vh] left-0 w-full h-[100vh] z-[-1]"
        style={{
          transform: `rotate(${-rotation}deg)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <Image
          src="/images/background3.png"
          alt="Background Bottom"
          fill
          className="object-cover"
        />
      </div>

      <div
  className="absolute top-[200vh] left-0 w-full h-[100vh] z-[-1]"
  style={{
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.1s linear',
  }}
>
  <Image
    src="/images/background4.png"
    alt="Background Layer 3"
    fill
    className="object-cover"
  />
</div>

      <div
        className="absolute top-[100vh] left-0 w-full h-[100vh] z-[-1]"
        style={{
          transform: `rotate(${-rotation}deg)`,
          transition: 'transform 0.1s linear',
        }}
      >
        <Image
          src="/images/background3.png"
          alt="Background Bottom"
          fill
          className="object-cover"
        />
      </div>

        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-900">About Me</h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          I am a <strong className="text-[#800000]">cum laude graduate</strong> from TIP Manila with a strong foundation in back-end development and a growing
          passion for becoming a complete, capable <strong className="text-[#800000]">full-stack developer</strong>.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          While I started with building APIs and designing server-side logic, my current role has expanded into full-stack
          responsibilities — managing two major modules in our system. This means I’m now building and updating pages, adding
          frontend functionality with JavaScript, and integrating APIs to ensure everything works seamlessly.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          On the frontend, I am working primarily with <strong className="text-[#800000]">Vue.js</strong> and have a foundational understanding of <strong className="text-[#800000]">React.js</strong>.  
          On the backend and infrastructure side, I manage deployments and updates using <strong className="text-[#800000]">Nginx via PuTTY</strong>, 
          giving me hands-on DevOps experience.
        </p>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Though I am still early in my frontend journey, I am <strong className="text-[#800000]">committed to continuous learning</strong> and improvement. 
          I thrive in fast-paced environments, love solving real-world problems, and aim to grow into a <strong className="text-[#800000]">fully equipped, confident full-stack developer</strong> capable of building complete products from end to end.
        </p>

        <p className="text-gray-600 my-10">
        Feel free to view my resume or connect with me on any of the platforms below.
      </p>
      

       <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
        <a
          href="/Resume ALV.2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#800000] text-white font-medium rounded hover:bg-[#660000] transition"
        >
          <FaDownload className="w-5 h-5" />
          Download Resume
        </a>
          <a
            href="mailto:nakpil47@gmail.com"
            aria-label="Send Email"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#D44638] transition transform hover:scale-110"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/alvin-nakpil-9ab902129/"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0077b5] transition transform hover:scale-110"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/jayv1ins"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition transform hover:scale-110"
          >
            <FaGithub className="w-6 h-6" />
          </a>
      </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="border rounded-lg px-4 py-5 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-[#800000]">{tech.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{tech.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity (wider section, outside previous max-w) */}
      <section className="w-full max-w-[90rem] mx-auto py-20 px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900">GitHub Activity</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Here look at my activity  both personal and work-related projects.
        </p>

        <div className="grid md:grid-cols-2 gap-10 w-full h-full">
          {/* Personal */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-[#800000]">Personal Account</h3>
            <div className="bg-white rounded-lg shadow-md p-4 border w-full h-[395px] mb-6">
              <Image
                src="/images/2024.png"
                alt="Personal GitHub Contribution Graph"
                width={620}
                height={500}
                className="rounded"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md h-[385px] p-4 border">
              <Image
                src="/images/2023.png"
                alt="Personal GitHub Stats"
                width={600}
                height={100}
                className="rounded"
              />
            </div>
          </div>

          {/* Work */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-[#800000]">Work Account</h3>
            <div className="bg-white rounded-lg shadow-md p-4 border mb-6">
              <Image
                src="/images/workGit2025.png"
                alt="Work GitHub Contribution Graph"
                width={1900}
                height={500}
                className="rounded"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 border">
              <Image
                src="/images/workGit2024.png"
                alt="Work GitHub Stats"
                width={1900}
                height={400}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
