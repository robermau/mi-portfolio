
import { Code2, Palette, Smartphone, Zap,Atom} from 'lucide-react';


const Skills = () => {
  const skillCategories = [
    {
      title: "Tecnologías Frontend",
      icon: <Code2 className="h-8 w-8" />,
      skills: ["React", "JavaScript ES6+", "Next.js", "Typescript", "HTML5", "CSS3"],
      color: "blue"
    },
    {
      title: "Estilos y Diseño",
      icon: <Palette className="h-8 w-8" />,
      skills: ["Tailwind CSS", "Ant Desing", "Styled Components", "Boostrap", "Next UI", "Material UI"],
      color: "purple"
    },
    {
      title: "Herramientas y Flujo",
      icon: <Zap className="h-8 w-8" />,
      skills: ["Git/GitHub", "Webpack", "Vite", "Lucid Chart" , "Jira"],
      color: "teal"
    },
    {
      title: "Móvil y Rendimiento",
      icon: <Smartphone className="h-8 w-8" />,
      skills: ["Diseño Responsivo", "PWA", "Web Vitals", "Optimización SEO", "Accesibilidad"],
      color: "green"
    },
    {
      title: "Otros Conocimientos",
      icon: <Atom className="h-8 w-8" />,
      skills: ["Node Js ", "Aws (lambda)", "Deployment" , "MySQL", "MongoDB", "Firebase"],
      color: "green"
    }
  ];

  const colorClasses = {
    blue: "text-blue-600 bg-blue-50 hover:bg-blue-100",
    purple: "text-purple-600 bg-purple-50 hover:bg-purple-100",
    teal: "text-teal-600 bg-teal-50 hover:bg-teal-100",
    green: "text-green-600 bg-green-50 hover:bg-green-100"
  };

  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Habilidades y Experiencia</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un conjunto completo de tecnologías y frameworks modernos para dar vida a tus ideas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl mb-6 ${colorClasses[category.color]}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; export default Skills;