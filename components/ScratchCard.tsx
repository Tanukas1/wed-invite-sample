'use client';

import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Countdown } from './Countdown';

interface ScratchCardProps {
  revealed: boolean;
  onRevealed: () => void;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({
  revealed,
  onRevealed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDrawing = useRef(false);
  const [internalRevealed, setInternalRevealed] = useState(false);

  // Setup canvas size and cover paint
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;

    const setupCanvas = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Scratch coating gradient
      const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      grad.addColorStop(0, '#d98ba1');
      grad.addColorStop(0.5, '#c75a85');
      grad.addColorStop(1, '#8b3a5a');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Text instruction on coating
      ctx.fillStyle = '#fff7e8';
      ctx.font = '600 14px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✦  SCRATCH TO REVEAL  ✦', rect.width / 2, rect.height / 2);
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);
    return () => window.removeEventListener('resize', setupCanvas);
  }, []);

  const triggerConfetti = () => {
    const fire = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 120,
        spread: 90,
        startVelocity: 45,
        origin,
        colors: ['#f9c8d9', '#f4a3bf', '#e87aa3', '#c75a85', '#fff'],
        scalar: 1.1,
      });

    fire({ x: 0.2, y: 0.4 });
    fire({ x: 0.5, y: 0.3 });
    fire({ x: 0.8, y: 0.4 });
    setTimeout(() => fire({ x: 0.5, y: 0.5 }), 250);
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || internalRevealed) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height).data;
    let transparentPixels = 0;
    const step = 160;

    for (let i = 3; i < imageData.length; i += step) {
      if (imageData[i] < 60) {
        transparentPixels++;
      }
    }

    const totalSampled = imageData.length / step;
    if (transparentPixels / totalSampled > 0.45) {
      setInternalRevealed(true);
      ctx.clearRect(0, 0, width, height);
      triggerConfetti();
      onRevealed();
    }
  };

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(clientX - rect.left, clientY - rect.top, 28, 0, Math.PI * 2);
    ctx.fill();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDrawing.current) {
      e.preventDefault();
      scratch(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
    checkScratchPercentage();
  };

  return (
    <div className="relative mx-auto w-full max-w-xl select-none">
      <img
        src="/countdown-frame.png"
        alt="Countdown Frame"
        className="block w-full h-auto pointer-events-none select-none"
        draggable={false}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={containerRef}
          className="relative"
          style={{ width: '74%', height: '62%' }}
        >
          {/* Content revealed underneath */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
            <p className="font-cinzel text-rose-deep text-2xl sm:text-4xl leading-none mt-1">
              7th July 2026
            </p>
            <div className="mt-3 scale-[0.7] sm:scale-90 origin-center">
              <Countdown />
            </div>
          </div>

          {/* Scratchable coating */}
          {!revealed && !internalRevealed && (
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};
