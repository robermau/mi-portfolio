import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
   emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(() => {
      setSent(true);
      form.current.reset();
    }, (error) => {
      alert('Error al enviar: ' + error.text);
    });
  };

  return (
    <section id="contacto" className="py-20 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Trabajemos Juntos</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-blue-500"></div>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            ¿Listo para dar vida a tus ideas? Hablemos sobre tu próximo proyecto y creemos algo increíble juntos.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Correo</h3>
                <p className="text-gray-300">robertom.perez@outlook.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 rounded-full">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">GitHub</h3>
                <p className="text-gray-300">github.com/robermau</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 rounded-full">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <p className="text-gray-300">linkedin.com/in/robertomauroperez/</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-800 rounded-2xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                  Tu Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ingresa tu correo"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 text-lg font-semibold transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
              >
                Enviar Mensaje
              </button>
              {sent && <p className="mt-4 text-green-400">¡Mensaje enviado correctamente!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;