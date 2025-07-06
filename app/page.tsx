import Image from "next/image";
import Link from 'next/link'
import BackgroundSvg from '@/components/BackgroundSvg'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function Home() {
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/background.png"
        alt="Background"
        fill
        priority
        className="object-cover h-[1200px] z-[-1]"
      />

      {/* Page content */}
      <main className="relative flex flex-col items-center justify-center px-6 text-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Hi, I'm <span className="text-[#800000]">Alvin Nakpil</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
        I'm a <strong>backend developer by foundation</strong>, gradually growing into a full-stack role through
        hands-on experience and real-world challenges.
        <br /><br />
        After graduating <em>cum laude</em> from TIP Manila, I began my journey focused on API development and backend
        logic — areas I'm still learning and continuously improving in. Over time, my responsibilities expanded into
        frontend development, giving me the opportunity to explore new tools, take on more ownership, and grow as a
        developer.
        <br /><br />
        Now, I’m learning by doing — building pages, implementing UI features, integrating APIs, and making sure everything
        runs smoothly across the stack.
        <br /><br />
        I may still be learning, but I'm <strong>committed, curious, and ready to grow</strong> as a full-stack developer.
      </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects"
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
          >
            View Projects
          </Link>
         
        </div>
      </main>
    </div>
  )
}
