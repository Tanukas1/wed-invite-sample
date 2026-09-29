'use client';

import React, { useState } from 'react';
import { Navigation } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { Florals } from './Florals';
import { Divider } from './Divider';
import { ScratchCard } from './ScratchCard';

export const MainInvitation: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <main className="relative animate-fade-in w-full overflow-hidden">
      {/* Hero Poster / Banner */}
      <section className="w-full flex justify-center bg-cream">
        <img
          src="/assets/homehero.jpeg"
          alt="Wedding Hero"
          className="w-full max-w-4xl h-auto block shadow-soft"
        />
      </section>

      {/* Scratch to Reveal Date & Countdown */}
      <section className="relative py-10 px-6 bg-cream">
        <Florals />
        <div className="relative max-w-3xl mx-auto text-center">
          <Divider />
          <FadeIn className="mb-10">
            <ScratchCard
              revealed={isRevealed}
              onRevealed={() => setIsRevealed(true)}
            />
          </FadeIn>
        </div>
      </section>

      {/* Events Schedule Cards */}
      <section className="relative bg-cream !text-cream py-10">
        <Florals />
        <div className="relative !text-cream max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <FadeIn delay={100} className="w-full max-w-md">
              <img
                src="/assets/lunch.jpeg"
                alt="Event 2 - Lunch"
                className="w-full h-auto rounded-2xl border border-gold-soft shadow-elegant object-cover hover:scale-[1.01] transition-transform duration-300"
              />
            </FadeIn>
            <FadeIn delay={200} className="w-full max-w-md">
              <img
                src="/assets/sangeet.jpeg"
                alt="Event 3 - Sangeet"
                className="w-full h-auto rounded-2xl border border-gold-soft shadow-elegant object-cover hover:scale-[1.01] transition-transform duration-300"
              />
            </FadeIn>
            <FadeIn delay={300} className="w-full max-w-md">
              <img
                src="/assets/mayra.jpeg"
                alt="Event 4 - Mayra"
                className="w-full h-auto rounded-2xl border border-gold-soft shadow-elegant object-cover hover:scale-[1.01] transition-transform duration-300"
              />
            </FadeIn>
            <FadeIn delay={400} className="w-full max-w-md">
              <img
                src="/assets/wedding.jpeg"
                alt="Event 5 - Wedding"
                className="w-full h-auto rounded-2xl border border-gold-soft shadow-elegant object-cover hover:scale-[1.01] transition-transform duration-300"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Awaiting your gracious presence */}
      <section className="relative py-10 px-6 bg-cream text-center">
        <Florals />
        <FadeIn className="relative max-w-2xl mx-auto">
          <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">
            Awaiting your gracious presence
          </h2>
          <Divider />
          <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed">
            We look forward to celebrating this special occasion with you and creating cherished memories.
          </p>
        </FadeIn>
      </section>

      {/* Family with Love, Heartly Blessings & Warm Regards */}
      <section className="relative py-10 px-6 text-cream bg-cream">
        <Florals />
        <div className="relative max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">
              With love
            </h2>
            <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed mt-2">
              Rinku &amp; Vikram Shah
            </p>
            <Divider />
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">
              Awaiting your gracious presence
            </h2>
            <div className="mt-3 space-y-1">
              <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed">
                Shakuntala &amp; Prakash Shah
              </p>
              <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed">
                Mani &amp; Amrit Shah
              </p>
              <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed">
                Ramila &amp; Lalitji Shah
              </p>
              <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed">
                Sadhana &amp; Mahendraji Baldia
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="mt-12">
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">
              Heartly Blessings
            </h2>
            <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed mt-3 max-w-3xl mx-auto">
              Hastimal Shah · Champalal Shah · Kantilal Shah · Indermal Shah · Ashokkumar Shah · Shantilal Shah
            </p>
          </FadeIn>

          <FadeIn delay={200} className="mt-12">
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep">
              Warm Regards
            </h2>
            <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed mt-3 max-w-4xl mx-auto">
              Dimple - Punitji · Archita - Hitesh · Depal - Nipun · Kinjal - Rinkesh · Shriya · Jiya · Hannah · Kavish · Manil · Vidhaan &amp; Mehaan
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Where We Celebrate / Map Section */}
      <section className="relative py-20 px-6 bg-cream">
        <Florals />
        <div className="relative max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep mt-2">
              Where We Celebrate
            </h2>
            <Divider />
            <p className="font-serif-display italic text-xl text-foreground/80 leading-relaxed max-w-xl mx-auto">
              Club Babylon
              <br />
              Sardar Patel Ring Rd, near Science City Road, Sola, Bhadaj, Ahmedabad, Gujarat
            </p>
          </FadeIn>

          <FadeIn
            delay={150}
            className="mt-10 rounded-2xl overflow-hidden border border-gold-soft shadow-elegant max-w-3xl mx-auto"
          >
            <iframe
              title="Venue map"
              src="https://www.google.com/maps?q=Club+Babylon+Banquet&output=embed"
              className="w-full h-[360px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </FadeIn>

          <FadeIn delay={250}>
            <a
              href="https://www.google.com/maps/search/Club+Babylon+Banquet"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8"
            >
              <button
                type="button"
                className="gradient-gold text-white border-0 hover:opacity-95 rounded-full px-8 h-12 shadow-gold inline-flex items-center justify-center font-medium text-base transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Get Directions
              </button>
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};
