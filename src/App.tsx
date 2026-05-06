import { useState, useEffect } from 'react';
import { Github, Server, GraduationCap, Code, Network, Award, Briefcase, Mail } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-700 tracking-tighter">
            JE.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#inicio" className="text-gray-600 hover:text-blue-700 transition-colors">Inicio</a>
            <a href="#trayectoria" className="text-gray-600 hover:text-blue-700 transition-colors">Educación</a>
            <a href="#habilidades" className="text-gray-600 hover:text-blue-700 transition-colors">Habilidades</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start md:items-center">
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-gray-900">
              Javier Echevarria
              <br />
              Traspuesto
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-700 font-medium mb-6">
              Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR)
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Apasionado por la infraestructura tecnológica, la administración de servidores y, en el futuro cercano, el desarrollo de aplicaciones web. Mi objetivo es unir el mundo de los sistemas con el desarrollo de software.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#trayectoria" className="px-6 py-2.5 rounded-md bg-blue-700 text-white font-medium hover:bg-blue-800 transition-colors shadow-sm">
                Ver Experiencia
              </a>
              <a href="https://github.com/javierechevarria1" target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-md bg-white text-gray-700 border border-gray-300 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Educación y Experiencia */}
      <section id="trayectoria" className="py-20 px-6 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-gray-900">Educación y Prácticas</h3>
          
          <div className="space-y-12">
            
            {/* DAW */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="md:w-1/4 shrink-0">
                <div className="text-sm font-semibold text-blue-700 mb-1">2026 — 2028</div>
                <div className="text-sm text-gray-500">Próximos Estudios</div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <Code size={20} className="text-blue-700" />
                  Desarrollo de Aplicaciones Web (DAW)
                </h4>
                <p className="text-gray-600 mb-2">Ciclo Formativo de Grado Superior</p>
                <p className="text-gray-500 text-sm">Continuación de mi formación para complementar mis conocimientos de sistemas con el desarrollo web profesional.</p>
              </div>
            </div>

            {/* ASIR */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="md:w-1/4 shrink-0">
                <div className="text-sm font-semibold text-gray-900 mb-1">Septiembre 2024 — 2026</div>
                <div className="text-sm text-gray-500">1 año y 8 meses</div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <Server size={20} className="text-gray-700" />
                  Administración de Sistemas Informáticos en Red
                </h4>
                <p className="text-gray-800 font-medium mb-1">Centro de Formación Profesional Decroly</p>
                <p className="text-gray-600 mb-4 text-sm">Ciclo Formativo de Grado Superior</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Briefcase size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">Prácticas en Netbees</span>
                      <span className="text-gray-500 ml-2">(500h)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={18} className="text-yellow-600 mt-0.5 shrink-0" />
                    <span className="font-medium text-gray-900">Ganador del Hackathon "Hack The Age" (Netbees)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SMR */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="md:w-1/4 shrink-0">
                <div className="text-sm font-semibold text-gray-900 mb-1">Junio 2022 — Junio 2024</div>
                <div className="text-sm text-gray-500">2 años</div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <Network size={20} className="text-gray-700" />
                  Sistemas Microinformáticos y Redes
                </h4>
                <p className="text-gray-800 font-medium mb-1">IES Valle de Camargo</p>
                <p className="text-gray-600 mb-4 text-sm">Ciclo Formativo de Grado Medio</p>
                
                <div className="flex items-start gap-3">
                  <Briefcase size={18} className="text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium text-gray-900">Prácticas en IES José María Pereda</span>
                    <span className="text-gray-500 ml-2">(400 h)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ESO */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="md:w-1/4 shrink-0">
                <div className="text-sm font-semibold text-gray-900 mb-1">Septiembre 2020 — Junio 2024</div>
                <div className="text-sm text-gray-500">3 años y 9 meses</div>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                  <GraduationCap size={20} className="text-gray-700" />
                  Educación Secundaria Obligatoria
                </h4>
                <p className="text-gray-800 font-medium mb-1">IES Nuestra Señora de los Remedios</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Habilidades y Tecnologías */}
      <section id="habilidades" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-10 text-gray-900">Habilidades</h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-16">
            {[
              "JavaScript", "Node.js", "Java", "Administración de redes", 
              "Github", "Tailwind", "React", "Git", "CSS"
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-1.5 rounded-full border border-gray-800 bg-transparent text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Detalle CV */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Sistemas y administración</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Instalación, configuración y administración de Windows y Linux
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Gestión de usuarios, permisos y servicios en sistemas operativos
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Virtualización y gestión de entornos de laboratorio
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Redes y seguridad</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Configuración básica de redes TCP/IP
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Conocimientos de routing, switching y direccionamiento IP
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Fundamentos de seguridad en redes y sistemas
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Desarrollo y scripting</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Desarrollo web frontend con React, Vite y Tailwind CSS
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Desarrollo backend básico (Node.js)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Programación en Python y Java
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                  Gestión de bases de datos relacionales (SQL)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-bold text-xl text-gray-900 tracking-tighter">JE.</div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Javier Echevarria Traspuesto.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/javierechevarria1" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;