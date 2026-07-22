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
              Soy un desarrollador con una visión amplia del mundo digital, capaz de trabajar desde la arquitectura de una solución hasta la implementación de experiencias web funcionales, atractivas y orientadas a negocio.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              He participado en proyectos de desarrollo web, automatización de procesos, integración de servicios y creación de soluciones sobre plataformas como React, Node.js, WordPress, PHP y herramientas de analítica y SEO, siempre con foco en la usabilidad, la escalabilidad y los resultados concretos.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Mi experiencia abarca tanto el trabajo en equipos técnicos como la ejecución autónoma de proyectos, incluyendo el desarrollo de sitios institucionales, plugins personalizados, mejoras de productos existentes y la optimización de procesos digitales para empresas y marcas.
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