import { Code2, ArrowDown } from 'lucide-react';
import cv from '../assets/CV Roberto Mauro Perez Olivera.pdf'; 
import image from '../assets/imagenUno.jpg';
const About = () => {
  return (
    <section id="acerca" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Acerca de Mí</h2>
          <div className="w-24 h-1 mx-auto bg-blue-600"></div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Soy un desarrollador front-end apasionado con más de 5 años de experiencia creando
              aplicaciones web impresionantes y centradas en el usuario. Me especializo en React,
              JavaScript y frameworks CSS modernos, manteniéndome siempre actualizado con las
              últimas tendencias y mejores prácticas de la industria.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Mi enfoque combina código limpio, diseño intuitivo y optimización del rendimiento
              para ofrecer experiencias de usuario excepcionales. Creo en el poder de la colaboración
              y el aprendizaje continuo para crear soluciones digitales que generen un impacto real.
            </p>
              <p className="text-lg leading-relaxed text-gray-700">
              Tambien tengo experiencia en desarrollo en empresas , En Censys Sa. estuve como Desarrollador Front end  con React realizando soporte y nuevas plataformas y tambien logre estar como Desarrollador Full Stack en una empresa extranjera en Chile  realizando plataformas necesarias para la administracion con diferentes tecnologias como pueden ver en mi Cv.
            </p>
            <a
              href={cv}
              download="CV-Roberto-Perez.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 mt-2 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg shadow hover:bg-blue-700"
            >
              Descargar CV
              <ArrowDown className="w-5 h-5 text-white" />
            </a>
          </div>

          <div className="relative">
            <div className="overflow-hidden shadow-2xl aspect-square rounded-2xl">
              <img
                src={image}
                alt="Espacio de trabajo del desarrollador"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute p-6 text-white bg-blue-600 shadow-lg -bottom-6 -right-6 rounded-2xl">
              <Code2 className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;