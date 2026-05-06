import { useState, useEffect } from 'react';
import { Server, GraduationCap, Code, Network, Award, Briefcase, ChevronDown, Terminal, Database, Shield, Linkedin } from 'lucide-react';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const SkillBar = ({ name, percentage, icon: Icon }: any) => (
  <div className="mb-6 group">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 text-slate-200 group-hover:text-cyan-400 transition-colors">
        {Icon && <Icon size={16} />}
        <span className="font-medium text-sm md:text-base">{name}</span>
      </div>
      <span className="font-mono text-cyan-400 text-sm">{percentage}%</span>
    </div>
    <div className="h-2.5 w-full bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
      <div 
        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full relative shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-1000 ease-out" 
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-md"></div>
      </div>
    </div>
  </div>
);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f18] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a0f18]/80 backdrop-blur-md py-4 border-b border-slate-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-8'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter text-white flex items-center gap-2">
            <Terminal size={24} className="text-cyan-400" />
            <span>JE<span className="text-cyan-400">.</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-mono text-slate-400">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">01. Inicio</a>
            <a href="#sobre-mi" className="hover:text-cyan-400 transition-colors">02. Sobre_mí</a>
            <a href="#trayectoria" className="hover:text-cyan-400 transition-colors">03. Trayectoria</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition-colors">04. Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden animate-fade-in">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#0a0f18] to-[#0a0f18] -z-10"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-4 animate-slide-up font-mono text-cyan-400 text-sm" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <span>&gt; Hello, World. I am</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-6 animate-slide-up text-white" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Javier Echevarria
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                SysAdmin & Developer
              </span>
            </h1>
            <h2 className="text-lg md:text-xl font-light text-slate-400 max-w-2xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              Especializado en <strong className="text-cyan-400 font-normal">Sistemas Informáticos en Red</strong>. Construyendo el puente hacia el desarrollo de software y aplicaciones web.
            </h2>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <a href="#trayectoria" className="px-6 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 font-mono text-sm hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] flex items-center gap-2">
                <Code size={16} />
                Ver_Proyectos()
              </a>
              <a href="https://github.com/javierechevarria1" target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-800/50 text-slate-300 border border-slate-700 font-mono text-sm hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2">
                <GithubIcon size={16} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/javier-echevarr%C3%ADa-traspuesto-ab3755258" target="_blank" rel="noreferrer" className="px-6 py-3 bg-[#0a66c2]/10 text-[#0a66c2] border border-[#0a66c2]/50 font-mono text-sm hover:bg-[#0a66c2] hover:text-white transition-all shadow-[0_0_15px_rgba(10,102,194,0.15)] hover:shadow-[0_0_25px_rgba(10,102,194,0.4)] flex items-center gap-2">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Sobre Mí - Terminal Style */}
      <section id="sobre-mi" className="py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white"><span className="text-cyan-400 font-mono text-2xl mr-2">02.</span>Sobre mí</h2>
            <div className="h-[1px] flex-1 bg-slate-800"></div>
          </div>

          <div className="rounded-xl overflow-hidden bg-[#0d131f] border border-slate-800/80 shadow-2xl reveal-on-scroll delay-100">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 bg-[#0a0f18] border-b border-slate-800/80 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <div className="ml-4 text-xs font-mono text-slate-500">javier@portfolio: ~</div>
            </div>
            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-slate-300">
              <p className="mb-4">
                <span className="text-cyan-400">&gt; whoami</span>
              </p>
              <p className="mb-6 text-slate-400">
                "Soy un apasionado de la tecnología, los servidores y el código. Empecé gestionando redes a nivel microinformático y me especialicé en ASIR."
              </p>
              <p className="mb-4">
                <span className="text-cyan-400">&gt; cat objetivos.txt</span>
              </p>
              <p className="mb-6 text-slate-400">
                "Mi próximo gran reto es dominar la creación de software. Por ello, entre 2026 y 2028 cursaré DAW para unir el mundo de la infraestructura con el desarrollo web."
              </p>
              <p className="mb-4">
                <span className="text-cyan-400">&gt; echo $FILOSOFIA</span>
              </p>
              <p className="text-green-400/90">
                "La excelencia no es un acto, es un hábito."
              </p>
              <p className="mt-4 animate-pulse text-cyan-400">_</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section id="trayectoria" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white"><span className="text-cyan-400 font-mono text-2xl mr-2">03.</span>Mi Recorrido</h2>
            <div className="h-[1px] flex-1 bg-slate-800"></div>
          </div>

          <div className="relative border-l-2 border-slate-800/80 ml-4 md:ml-6 space-y-16">
            
            {/* DAW */}
            <div className="pl-8 md:pl-12 relative group reveal-on-scroll">
              <div className="absolute w-4 h-4 bg-[#0a0f18] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"></div>
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-6 hover:border-cyan-500/30 transition-colors">
                <span className="text-xs font-mono text-cyan-400 mb-2 block">2026 — 2028 (Futuro)</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Desarrollo de Aplicaciones Web</h3>
                <p className="text-slate-400 text-sm mb-3">Ciclo Formativo de Grado Superior</p>
                <p className="text-slate-300 font-light text-sm">Próximo paso formativo para complementar mis habilidades de sistemas con programación y desarrollo de software.</p>
              </div>
            </div>

            {/* ASIR */}
            <div className="pl-8 md:pl-12 relative group reveal-on-scroll delay-100">
              <div className="absolute w-4 h-4 bg-[#0a0f18] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"></div>
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-6 hover:border-cyan-500/30 transition-colors">
                <span className="text-xs font-mono text-cyan-400 mb-2 block">2024 — 2026</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Administración de Sistemas (ASIR)</h3>
                <p className="text-slate-400 text-sm mb-4">Centro de Formación Profesional Decroly</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-slate-300 text-sm bg-slate-950/50 p-2 rounded border border-slate-800">
                    <Briefcase size={16} className="text-blue-400" />
                    <span>Prácticas en <strong className="text-white">Netbees</strong> (500h)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm bg-slate-950/50 p-2 rounded border border-slate-800">
                    <Award size={16} className="text-yellow-400" />
                    <span>Ganador del Hackathon "Hack The Age" (Netbees)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SMR */}
            <div className="pl-8 md:pl-12 relative group reveal-on-scroll delay-200">
              <div className="absolute w-4 h-4 bg-[#0a0f18] border-2 border-cyan-500 rounded-full -left-[9px] top-1.5 group-hover:bg-cyan-500 group-hover:shadow-[0_0_15px_#22d3ee] transition-all duration-300"></div>
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-6 hover:border-cyan-500/30 transition-colors">
                <span className="text-xs font-mono text-cyan-400 mb-2 block">2022 — 2024</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Sistemas Microinformáticos y Redes</h3>
                <p className="text-slate-400 text-sm mb-4">IES Valle de Camargo</p>
                <div className="flex items-center gap-3 text-slate-300 text-sm bg-slate-950/50 p-2 rounded border border-slate-800">
                  <Briefcase size={16} className="text-blue-400" />
                  <span>Prácticas en IES José María Pereda (400h)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-24 px-6 relative overflow-hidden">
        {/* Ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-cyan-900/10 blur-[120px] -z-10 rounded-full"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white"><span className="text-cyan-400 font-mono text-2xl mr-2">04.</span>Habilidades Técnicas</h2>
            <div className="h-[1px] flex-1 bg-slate-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal-on-scroll">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Server className="text-cyan-400" size={20}/> Infraestructura & Redes
              </h3>
              <SkillBar name="Administración Windows/Linux" percentage={85} icon={Terminal} />
              <SkillBar name="Redes TCP/IP & Routing" percentage={80} icon={Network} />
              <SkillBar name="Virtualización & Entornos" percentage={75} icon={Database} />
              <SkillBar name="Seguridad en Sistemas" percentage={70} icon={Shield} />
            </div>
            
            <div className="reveal-on-scroll delay-100">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Code className="text-blue-400" size={20}/> Desarrollo & Software
              </h3>
              <SkillBar name="HTML5 + CSS3 + Tailwind" percentage={80} icon={Code} />
              <SkillBar name="React.js + Vite" percentage={75} icon={Code} />
              <SkillBar name="Python & Java" percentage={65} icon={Terminal} />
              <SkillBar name="Node.js & SQL" percentage={60} icon={Database} />
            </div>
          </div>

          {/* Tag Cloud */}
          <div className="mt-16 pt-10 border-t border-slate-800/50 reveal-on-scroll delay-200">
            <p className="font-mono text-sm text-slate-500 mb-6">&gt; Otras herramientas y tecnologías:</p>
            <div className="flex flex-wrap gap-3">
              {["Git", "GitHub", "Bash/Shell", "VS Code", "Bases de Datos", "Hardware"].map((skill, idx) => (
                <span key={idx} className="px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-md text-slate-300 font-mono text-xs hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f18] py-12 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-black text-2xl tracking-tighter text-white">JE<span className="text-cyan-400">.</span></div>
          <div className="text-slate-500 text-sm font-mono text-center md:text-left">
            © {new Date().getFullYear()} Diseñado y desarrollado para Javier Echevarria.
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/javierechevarria1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/javier-echevarr%C3%ADa-traspuesto-ab3755258" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
