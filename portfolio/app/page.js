import Navbar from "./components/Navbar";
import Link from "next/link";
import Image from "next/image";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO - CYBER */}
      <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ff0033_0.8px,transparent_1px)] bg-[length:30px_30px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-zinc-900 border border-red-900 rounded-3xl px-6 py-2 text-sm terminal-glow">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              ROOT
            </div>
            
            <h2 className="text-7xl md:text-8xl font-bold leading-none tracking-tighter logo-font terminal-glow">
              ANDRÉ<br />NEVES<span className="text-red-500">.</span>
            </h2>
            
            <p className="text-3xl text-zinc-400 font-light">
              B.S. CS <br />
              <span className="text-red-500">Ciência da Computação • Threat Intelligence • Malware Dev</span>
            </p>
            
            <div className="flex items-center gap-4">
              <Link href="#projetos" className="px-10 py-5 bg-white text-zinc-950 font-semibold rounded-3xl flex items-center gap-3 hover:scale-105 transition-all">
                VER PROJETOS <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link href="/forca" className="px-10 py-5 border-2 border-red-500 text-red-500 font-semibold rounded-3xl flex items-center gap-3 hover:bg-red-500 hover:text-white transition-all">
                <i className="fa-solid fa-skull"></i> DEMO HACK
              </Link>
            </div>

            <div className="flex gap-8 text-sm pt-8">
              <div>
                <div className="text-red-500 font-mono text-5xl font-bold">Hacking</div>
                <div className="text-zinc-500">CTFs &amp; Challenges</div>
              </div>
              <div>
                <div className="text-red-500 font-mono text-5xl font-bold">OSINT</div>
                <div className="text-zinc-500">Máquinas Invadidas</div>
              </div>
              <div>
                <div className="text-red-500 font-mono text-5xl font-bold">OPSEC</div>
                <div className="text-zinc-500">Noites no THM e PortSwigger Academy</div>
              </div>
            </div>
          </div>
        </div>

          <div className="relative">
            <div className="absolute -inset-20 bg-gradient-to-br from-red-600/20 via-purple-600/10 to-transparent rounded-[6rem] blur-3xl"></div>
  
            <div className="relative bg-zinc-900 border border-red-800/50 rounded-3xl p-8 shadow-2xl">
              <div className="w-full aspect-square bg-black rounded-2xl overflow-hidden border-2 border-red-500/30">
      
                <Image
                  src="/images/1918527f-0426-4c97-acd9-d6b5f15a83bf.gif"
                  alt="andré - Analista de Threat Intelligence "
                  width={620}
                  height={620}
                  className="w-full h-full object-cover grayscale-[25%] hover:grayscale-0 transition-all duration-700"
                  priority
                />
      
                <div className="absolute bottom-6 left-6 text-xs font-mono tracking-[3px] text-red-400/80">
                  WANTED
                </div>
              </div>
            </div>
          </div>

      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-32 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <div className="sticky top-28">
                <div className="text-red-500 uppercase tracking-[6px] text-sm mb-4">CAPÍTULO 01 // ROOT ACCESS</div>
                <h2 className="text-6xl font-semibold leading-none logo-font">Quem sou eu?</h2>
              </div>
            </div>
            
            <div className="md:col-span-7 text-lg text-zinc-300 leading-relaxed space-y-8">
              <p className="text-2xl">
                Olá. Sou <span className="text-white font-semibold">André</span>, estudante de Cybersecurity apaixonado por Red Team, Threat Intelligence e desenvolvimento de malwares.
              </p>
              <p>
                Este portfólio foi criado com Next.js + Tailwind apenas para praticar desenvolvimento enquanto mergulho fundo no mundo do hacking ético. 
                O destaque? Uma página interativa completa do <span className="text-red-500 font-medium">Jogo da Forca</span> — um projeto full-stack de lógica e design para treinar minhas skills de código.
              </p>
              <p>
                Quando não estou quebrando coisas (legalmente), estou em CTFs, fazendo OSINT, criando PoCs de malware ou caçando IOCs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HABILIDADES */}
      <section id="habilidades" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-zinc-900 px-6 py-2 rounded-3xl text-red-500 text-sm tracking-widest">ARSENAL</div>
            <h2 className="text-6xl mt-6 font-semibold logo-font">Minhas Ferramentas</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-zinc-900 p-10 rounded-3xl hover:bg-zinc-800 transition-colors group border border-red-900/30">
            <i className="fa-solid fa-dragon text-6xl mb-6 text-cyan-400"></i>
            <div className="text-2xl font-semibold mb-2">Kali Linux</div>
            <div className="text-zinc-400">Metasploit • Nmap • Wireshark • Exploitation</div>
          </div>
            <div className="bg-zinc-900 p-10 rounded-3xl hover:bg-zinc-800 transition-colors group border border-red-900/30">
              <i className="fa-solid fa-user-secret text-6xl mb-6 text-emerald-400"></i>
              <div className="text-2xl font-semibold mb-2">OSINT Framework</div>
              <div className="text-zinc-400">Recon-ng • Maltego • Shodan</div>
            </div>
            <div className="bg-zinc-900 p-10 rounded-3xl hover:bg-zinc-800 transition-colors group border border-red-900/30">
              <i className="fa-brands fa-python text-6xl mb-6 text-amber-400"></i>
              <div className="text-2xl font-semibold mb-2">Python / Rust</div>
              <div className="text-zinc-400">Malware Dev • Automação • PoCs</div>
            </div>
            <div className="bg-zinc-900 p-10 rounded-3xl hover:bg-zinc-800 transition-colors group border border-red-900/30">
              <i className="fa-solid fa-spider text-6xl mb-6 text-purple-400"></i>
              <div className="text-2xl font-semibold mb-2">Burp Suite + Proxy</div>
              <div className="text-zinc-400">Web App Pentesting</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-red-500 text-sm tracking-widest">CAPÍTULO 02 // PAYLOADS</div>
              <h2 className="text-6xl font-semibold logo-font">Projetos em Destaque</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/forca" className="project-card group bg-zinc-950 border border-red-900/50 rounded-3xl overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-red-900/40 to-zinc-950 flex items-center justify-center relative">
                <div className="text-[160px] opacity-20">🪓</div>
                <div className="absolute text-center">
                  <div className="text-5xl font-bold logo-font text-red-400">FORCA</div>
                  <div className="text-zinc-500 text-sm mt-2">DEMO INTERATIVO</div>
                </div>
              </div>
              <div className="p-10">
                <div className="text-3xl font-semibold">Jogo da Forca</div>
                <p className="text-zinc-400 mt-6">
                  Projeto completo com lógica de jogo, SVG animado, teclado virtual e 40 palavras. 
                  Feito para praticar React/Next.js enquanto estudo cybersecurity.
                </p>
                <div className="mt-6 text-xs text-red-400 font-mono">NEXT.JS • STATE MACHINE • SVG ANIMATION</div>
              </div>
            </Link>

            <div className="project-card group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden">
              <div className="h-80 bg-gradient-to-br from-red-900/30 to-zinc-950 flex items-center justify-center">
                <i className="fa-solid fa-bug text-9xl text-red-500/30"></i>
              </div>
              <div className="p-10">
                <div className="text-3xl font-semibold">Simple RAT PoC</div>
                <p className="text-zinc-400 mt-6">
                  Remote Access Trojan básico em Python (apenas para estudo). 
                  Reverse shell + persistence + C2 local.
                </p>
                <div className="mt-8 text-xs text-zinc-500 font-mono">PYTHON • SOCKET • ETHICAL USE ONLY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-32 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-red-500 text-sm tracking-widest mb-4">ÚLTIMO PAYLOAD</div>
          <h2 className="text-6xl font-semibold logo-font">Quer colaborar ou contratar?</h2>
          <p className="mt-6 text-xl text-zinc-400 max-w-md mx-auto">
            Aberto para pesquisas de Threat Intel, Malware Development ou estágios.
          </p>
          
          <a href="mailto:andrenneves99@gmail.com" className="inline-block mt-12 px-16 py-6 bg-white text-black font-semibold text-xl rounded-3xl hover:scale-105 transition-all">
            andrenneves99@gmail.com
          </a>
        </div>
      </section>
      
      <MusicPlayer />

      <footer className="py-12 border-t border-zinc-900 text-center text-xs text-zinc-600">
        © 2026 • Built André • For educational purposes and future use
      </footer>
    </>
  );
}