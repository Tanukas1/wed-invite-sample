'use client';

import React, { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-07-07T00:00:00+05:30').getTime();

const calculateTimeLeft = () => {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { v: timeLeft.days, l: 'Days' },
    { v: timeLeft.hours, l: 'Hours' },
    { v: timeLeft.minutes, l: 'Minutes' },
    { v: timeLeft.seconds, l: 'Seconds' },
  ];

  return (
    <div className="flex justify-center gap-3 sm:gap-6">
      {timeUnits.map((unit) => (
        <div
          key={unit.l}
          className="flex flex-col items-center min-w-[68px] sm:min-w-[90px]"
        >
          <div className="w-full aspect-square rounded-2xl bg-cream border border-gold-soft shadow-soft flex items-center justify-center backdrop-blur-sm">
            <span className="font-cinzel text-2xl sm:text-4xl text-rose-deep tabular-nums">
              {String(unit.v).padStart(2, '0')}
            </span>
          </div>
          <span className="mt-2 text-xs sm:text-sm tracking-widest uppercase text-sage-deep font-medium">
            {unit.l}
          </span>
        </div>
      ))}
    </div>
  );
};
