'use client';

import { useRef, useEffect, useState } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);

  const musicSrc = "/music/favorite.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.play().catch(() => {});
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol;
  };

  return (
    <div className="fixed bottom-6 right-6 bg-zinc-900 border border-red-800/60 rounded-3xl p-5 shadow-2xl flex items-center gap-4 z-50 w-80 backdrop-blur-xl">
      <audio ref={audioRef} src={musicSrc} loop />

      {/* Botão Play/Pause - menor */}
      <button
        onClick={togglePlay}
        className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-2xl flex items-center justify-center text-white transition-all active:scale-95 shadow-lg shadow-red-500/50 flex-shrink-0"
      >
        <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-2xl`}></i>
      </button>

      {/* Nome da música */}
      <div className="flex-1 min-w-0">
        <div className="text-[10px] text-red-400 font-mono tracking-[2px] mb-0.5">NOW PLAYING</div>
        <div className="text-sm font-medium text-white truncate">Deftones - Change</div>
      </div>

      {/* Volume Slider - ajustado */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <i className="fa-solid fa-volume-low text-red-400 text-lg"></i>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-32 accent-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
}