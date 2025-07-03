import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('acerca')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-teal-900/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Desarrollador
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Front-End
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl leading-relaxed text-gray-200 md:text-2xl">
            Creando experiencias web hermosas, responsivas y fáciles de usar con tecnologías modernas
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 text-lg font-semibold transition-all duration-300 transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105"
            >
              Ver Mi Trabajo
            </button>
            <a
              href="#contacto"
              className="px-8 py-4 text-lg font-semibold transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-gray-900 hover:scale-105"
            >
              Contáctame
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/robermau"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:text-blue-400"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/robertomauroperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:text-blue-400"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:robertom.perez@outlook.com"
              className="text-white transition-colors duration-200 hover:text-blue-400"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute text-white transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}; export default Hero;