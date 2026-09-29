'use client';

import React, { useEffect, useRef, useState } from 'react';

interface IntroScreenProps {
  onOpen: () => void;
  opening?: boolean;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onOpen, opening }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [canPlay, setCanPlay] = useState(false);

  const handleContainerClick = () => {
    if (isPlaying) return;
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.currentTime = 0;
      video.play().catch(() => {
        // Fallback for strict browser autoplay policies
        video.muted = true;
        video.play();
      });
      setIsPlaying(true);
    }
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFading(true);
    setTimeout(() => {
      onOpen();
    }, 700);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isPlaying) return;

    const handleEnded = () => {
      setIsFading(true);
      setTimeout(() => {
        onOpen();
      }, 900);
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [isPlaying, onOpen]);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative bg-black overflow-hidden cursor-pointer"
      onClick={handleContainerClick}
    >
      {/* Background Poster */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/intro-poster.jpg)' }}
      />

      {/* Main Video */}
      <video
        ref={videoRef}
        src="/intro-compressed.mp4"
        poster="/intro-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="auto"
        muted
        onCanPlay={() => setCanPlay(true)}
      />

      {/* Tap to open button before playback */}
      {!isPlaying && (
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3 pointer-events-none z-10">
          <p className="bg-white/95 text-sage-deep font-serif-display italic text-base sm:text-lg tracking-wider px-6 py-2.5 rounded-full shadow-lg animate-pulse backdrop-blur-sm">
            ✦ Tap to open ✦
          </p>
        </div>
      )}

      {/* Skip button while playing */}
      {isPlaying && (
        <button
          type="button"
          onClick={handleSkip}
          className="absolute top-6 right-6 z-20 bg-black/40 hover:bg-black/60 text-white/90 text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 backdrop-blur transition-all"
        >
          Skip Intro ✕
        </button>
      )}

      {/* Fade to white transition */}
      <div
        className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-700 ${
          isFading || opening ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
