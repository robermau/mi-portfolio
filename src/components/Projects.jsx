
import { Github, ExternalLink} from 'lucide-react';
import proyectoUno from "../assets/proyectoUno.png"


const Projects = () => {
  const projects = [
    {
      title: "Cacluladora de Alquileres",
      description: "Una plataforma para calcular los alquileres segun siertos indices.",
      image: proyectoUno,
      technologies: ["React", "JavaScript", "Tailwind", "Next UI", "Context API"],
      liveUrl: "https://calculadora-tecno-prop.vercel.app/",
      githubUrl: "#"
    },
    // {
    //   title: "App de Gestión de Tareas",
    //   description: "Una herramienta colaborativa de gestión de proyectos con actualizaciones en tiempo real, funcionalidad de arrastrar y soltar, y características de colaboración en equipo.",
    //   image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    //   technologies: ["Next.js", "Tailwind CSS", "Supabase", "Framer Motion"],
    //   liveUrl: "#",
    //   githubUrl: "#"
    // },
    // {
    //   title: "Panel del Clima",
    //   description: "Una hermosa aplicación del clima con pronósticos basados en ubicación, mapas interactivos y alertas meteorológicas personalizadas.",
    //   image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    //   technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
    //   liveUrl: "#",
    //   githubUrl: "#"
    // }
  ];

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Proyectos Destacados</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-blue-600"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Una muestra de mi trabajo reciente, demostrando mis habilidades en desarrollo web moderno
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 text-gray-900 transition-colors duration-200 bg-white rounded-full hover:bg-gray-100"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 text-gray-900 transition-colors duration-200 bg-white rounded-full hover:bg-gray-100"
                    >
                      <Github className="w-4 h-4" />
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