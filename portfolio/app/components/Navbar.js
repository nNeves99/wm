'use client';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-red-500/50">
            <img 
              src="/images/centipede.webp" 
              alt="Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <h1 className="logo-font text-3xl font-semibold tracking-tighter">NEVES<span className="text-red-500">DL7</span></h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link href="#home" className="nav-link text-zinc-400 hover:text-white">HOME</Link>
          <Link href="#sobre" className="nav-link text-zinc-400 hover:text-white">SOBRE</Link>
          <Link href="#habilidades" className="nav-link text-zinc-400 hover:text-white">HABILIDADES</Link>
          <Link href="#projetos" className="nav-link text-zinc-400 hover:text-white">PROJETOS</Link>
          <Link href="/forca" className="nav-link text-red-500 hover:text-red-400 font-semibold">DEMO FORCA</Link>
        </div>

        <Link href="/forca" className="px-8 py-3 bg-red-600 hover:bg-red-700 transition-all rounded-2xl font-semibold flex items-center gap-2 text-sm tracking-wider shadow-lg shadow-red-500/30">
          <i className="fa-solid fa-skull"></i>
          JOGO DA FORCA
        </Link>
      </div>
    </nav>
  );
}