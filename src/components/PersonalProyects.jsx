
import { Github, ExternalLink } from 'lucide-react';
// import videoUno from "../assets/proyectoUno.png"


const Projects = () => {
  const projects = [
    {
      title: "Mi tinerary",
      description: "Una plataforma ver cultura general Egipcia, donde uno puede realizar un login con usuarios de google y comentar .",
      image: "https://i.imgur.com/RmDbLCW.mp4",
      technologies: ["React", "JavaScript", "Tailwind", "Express", "Mongo DB"],
      liveUrl: "https://i.imgur.com/RmDbLCW.mp4",
     
    },
    {
      title: "Amazing Events",
      description: "Un proyecto donde uno puede ver los eventos disponibles segun filtrados.",
      image: "https://i.imgur.com/fLvua7i.mp4",
      technologies: ["JavaScript", "Boostrap", "Integracion Apis"],
      liveUrl: "https://i.imgur.com/fLvua7i.mp4",
     
    },
    {
      title: "Gea Store",
      description: "Una E-commerce realizado en forma grupal en donde se puede comprar diferentes tipos de productos.",
      image: "https://i.imgur.com/EE44EMI.mp4",
      technologies: ["ReactJS", "MongoDB","Express", "Tailwind"],
      liveUrl: "https://i.imgur.com/EE44EMI.mp4",
    
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Proyectos Personales</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-blue-600"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Una muestra de mi trabajo en los comienzos de mi aprendizaje, demostrando mis habilidades
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                {project.image.endsWith('.mp4') ? (
                  <video
                    src={project.image}
                    controls
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 text-gray-900 transition-colors duration-200 bg-white rounded-full hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mb-4 leading-relaxed text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-medium text-blue-600 rounded-full bg-blue-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; export default Projects;