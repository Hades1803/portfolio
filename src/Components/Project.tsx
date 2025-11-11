import { ProjectInfo } from "../User"
import ProjectCard from "./ProjectCard"

const Project = () => {
  return (
    <div id="projects" className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mx-4 xs:mx-6 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 my-6 sm:my-8 md:my-10 font-mono">
      <h1 className="text-2xl xs:text-3xl sm:text-4xl mb-4 xs:mb-5 font-bold text-white text-center">
        <span className="text-primaryColor">02.&nbsp;</span>
        <span>Projects</span>
      </h1>
      <div className="flex justify-center sm:justify-between flex-wrap gap-4 xs:gap-6 sm:gap-4">
        {ProjectInfo.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Project