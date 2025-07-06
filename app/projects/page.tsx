import { projects } from '@/constants/projects'
import ProjectCard from '@/components/ProjectCard'
import Image from "next/image";


export default function ProjectsPage() {
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
    <section className="max-w-5xl mx-auto py-16 px-4">
      
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
    </div>
  )
}
