'use client';

import React, { useState } from 'react';
import { IntroScreen } from '@/components/IntroScreen';
import { MainInvitation } from '@/components/MainInvitation';
import { AudioPlayer } from '@/components/AudioPlayer';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setIsOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-cream select-none">
      {/* Background audio controller */}
      <AudioPlayer play={isOpening || isOpen} />

      {/* Main invitation content or video intro */}
      {isOpen ? (
        <MainInvitation />
      ) : (
        <IntroScreen onOpen={handleOpen} opening={isOpening} />
      )}
    </div>
  );
}
