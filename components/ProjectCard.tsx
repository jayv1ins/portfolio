type Project = {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-[#800000] mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        View Project
      </a>
    </div>
  )
}
