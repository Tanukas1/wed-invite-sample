'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  play: boolean;
  src?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  play,
  src = '/audio/background.mp3',
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;
    audio.loop = true;

    if (play && !isMuted) {
      audio.play().catch(() => {
        // Autoplay may be temporarily blocked until user interaction
      });
    } else {
      audio.pause();
    }
  }, [play, isMuted]);

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      {play && (
        <button
          type="button"
          aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
          onClick={() => setIsMuted((prev) => !prev)}
          className="fixed bottom-5 right-5 z-50 h-11 w-11 rounded-full bg-foreground/80 text-cream backdrop-blur shadow-elegant flex items-center justify-center hover:scale-105 transition-transform duration-200"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
      )}
    </>
  );
};
