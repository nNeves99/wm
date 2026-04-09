'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const palavras = [
  "CASA","BOLA","LIVRO","GATO","CACHORRO","ELEFANTE","GIRAFA","MACACO","TIGRE",
  "PASSARO","PEIXE","AVIAO","BARCO","CARRO","BICICLETA","COMPUTADOR","CELULAR",
  "TABLET","TECLADO","MOUSE","MONITOR","ESCOLA","PROFESSOR","ALUNO","JARDIM",
  "FLORESTA","MONTANHA","RIO","MAR","OCEANO","PLANETA","ESTRELA","LUA","SOL",
  "NUVEM","CHUVA","VENTO","TEMPESTADE","ABACATE","BANANA","CEREJA","DAMASCO"
];

export default function ForcaPage() {
  const [palavraAtual, setPalavraAtual] = useState("");
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState(new Set());
  const [erros, setErros] = useState(0);
  const MAX_ERROS = 6;

  const escolherPalavra = () => palavras[Math.floor(Math.random() * palavras.length)];

  const reiniciarJogo = () => {
    setPalavraAtual(escolherPalavra());
    setLetrasAdivinhadas(new Set());
    setErros(0);
  };

  useEffect(() => {
    reiniciarJogo();
  }, []);

  const tentarLetra = (letra) => {
    if (letrasAdivinhadas.has(letra) || erros >= MAX_ERROS) return;

    const novasLetras = new Set(letrasAdivinhadas);
    novasLetras.add(letra);
    setLetrasAdivinhadas(novasLetras);

    if (!palavraAtual.includes(letra)) {
      setErros((prev) => prev + 1);
    }
  };

  const ganhou = palavraAtual && palavraAtual.split("").every(letra => letrasAdivinhadas.has(letra));
  const perdeu = erros >= MAX_ERROS;

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
            <i className="fa-solid fa-arrow-left"></i>
            <span className="font-medium">VOLTAR AO PORTFÓLIO</span>
          </Link>
          <div className="text-center">
            <div className="text-red-500 text-xs tracking-[4px]">DEMO HACK</div>
            <h2 className="text-6xl font-bold logo-font">JOGO DA FORCA</h2>
          </div>
          <button 
            onClick={reiniciarJogo}
            className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center gap-3 transition-all"
          >
            <i className="fa-solid fa-rotate"></i> NOVO JOGO
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* SVG da Forca */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 rounded-3xl p-12 flex items-center justify-center min-h-[520px]">
            <svg width="360" height="420" className="hangman-svg" viewBox="0 0 360 420">
              <line x1="60" y1="380" x2="300" y2="380" stroke="#444" strokeWidth="18" strokeLinecap="round"/>
              <line x1="120" y1="380" x2="120" y2="80" stroke="#444" strokeWidth="18" strokeLinecap="round"/>
              <line x1="120" y1="80" x2="240" y2="80" stroke="#444" strokeWidth="18" strokeLinecap="round"/>
              <line x1="240" y1="80" x2="240" y2="140" stroke="#666" strokeWidth="12" strokeLinecap="round"/>

              <g style={{ opacity: erros >= 1 ? 1 : 0.15 }}>
                <circle cx="240" cy="170" r="32" fill="none" stroke="#ff3366" strokeWidth="18"/>
                <circle cx="225" cy="162" r="6" fill="#111"/>
                <circle cx="255" cy="162" r="6" fill="#111"/>
              </g>
              <g style={{ opacity: erros >= 2 ? 1 : 0.15 }}>
                <line x1="240" y1="202" x2="240" y2="300" stroke="#ff3366" strokeWidth="18" strokeLinecap="round"/>
              </g>
              <g style={{ opacity: erros >= 3 ? 1 : 0.15 }}>
                <line x1="240" y1="230" x2="190" y2="275" stroke="#ff3366" strokeWidth="16" strokeLinecap="round"/>
              </g>
              <g style={{ opacity: erros >= 4 ? 1 : 0.15 }}>
                <line x1="240" y1="230" x2="290" y2="275" stroke="#ff3366" strokeWidth="16" strokeLinecap="round"/>
              </g>
              <g style={{ opacity: erros >= 5 ? 1 : 0.15 }}>
                <line x1="240" y1="300" x2="205" y2="370" stroke="#ff3366" strokeWidth="16" strokeLinecap="round"/>
              </g>
              <g style={{ opacity: erros >= 6 ? 1 : 0.15 }}>
                <line x1="240" y1="300" x2="275" y2="370" stroke="#ff3366" strokeWidth="16" strokeLinecap="round"/>
              </g>
            </svg>
          </div>

          {/* Gameplay */}
          <div className="lg:col-span-7 space-y-10">
            <div className="text-center">
              <div className="font-mono text-6xl md:text-7xl tracking-[20px] font-bold text-white flex justify-center gap-4 flex-wrap">
                {palavraAtual.split("").map((letra, i) => (
                  <span key={i} className="letter">
                    {letrasAdivinhadas.has(letra) ? letra : "_"}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-zinc-500 text-xs">ERROS</div>
                <div className="text-6xl font-bold text-red-500 tabular-nums">{erros} / 6</div>
              </div>
              <div className="h-16 w-px bg-zinc-800"></div>
              <div className="text-center">
                <div className="text-zinc-500 text-xs">LETRAS USADAS</div>
                <div className="flex gap-2 justify-center flex-wrap mt-2 min-h-[28px]">
                  {Array.from(letrasAdivinhadas).map(letra => (
                    <span 
                      key={letra}
                      className={`inline-block px-4 py-1 text-xs font-mono rounded-xl ${palavraAtual.includes(letra) ? 'bg-emerald-900 text-emerald-400' : 'bg-red-900 text-red-400'}`}
                    >
                      {letra}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
              <div className="grid grid-cols-13 gap-3 max-w-[620px] mx-auto">
                {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(letra => (
                  <button
                    key={letra}
                    onClick={() => tentarLetra(letra)}
                    disabled={letrasAdivinhadas.has(letra) || ganhou || perdeu}
                    className="w-9 h-11 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-2xl text-lg font-semibold transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {letra}
                  </button>
                ))}
              </div>
            </div>

            {(ganhou || perdeu) && (
              <div className={`text-center py-6 px-8 rounded-3xl text-3xl font-medium ${ganhou ? 'bg-emerald-900 border-emerald-600 text-emerald-300' : 'bg-red-900 border-red-600 text-red-300'}`}>
                {ganhou ? (
                  <>🎉 PARABÉNS!<br />Você salvou o boneco!<br /><span className="text-2xl text-emerald-400">A palavra era: {palavraAtual}</span></>
                ) : (
                  <>💀 GAME OVER<br />A palavra era: <span className="text-red-400">{palavraAtual}</span></>
                )}
              </div>
            )}

            <div className="flex justify-center">
              <button 
                onClick={reiniciarJogo}
                className="px-16 py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xl rounded-3xl shadow-xl shadow-red-500/40 transition-all active:scale-95"
              >
                REINICIAR JOGO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}