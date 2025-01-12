'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-cream text-navy">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap');

        :root {
          --color-cream: #FAF9F6;
          --color-navy: #002147;
          --color-coral: #FF6B6B;
        }

        body {
          background-color: var(--color-cream);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: url('/wave.svg') no-repeat bottom;
          background-size: cover;
          z-index: 0;
        }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-6 px-6">
        <Link href="/" className="text-2xl font-serif font-bold text-navy">
          E Portfolio
        </Link>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 relative min-h-[80vh] flex items-center">
          <div className="hero-wave" />
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-1.5 text-sm text-coral mb-8 border border-coral/20 rounded-full fade-in font-sans">
                <span>Exploring AI Solutions of Tomorrow</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-tight fade-in delay-1 text-navy">
                This is a personal<br />side-bar to my<br />professional journey
              </h1>
              <p className="text-lg text-navy/70 mb-8 max-w-xl fade-in delay-2 font-sans">
                Expert in digital assets and traditional finance, leveraging AI to transform complex workflows into elegant solutions. Building intelligent systems that amplify business value and expand creative insights.
              </p>
              <div className="flex flex-wrap gap-4 fade-in delay-3">
                <button className="bg-coral text-white font-sans px-8 py-3 rounded-md hover:bg-coral/90 transition-colors">
                  Learn More
                </button>
                <button className="bg-coral text-white font-sans px-8 py-3 rounded-md hover:bg-coral/90 transition-colors">
                  Learn More
                </button>
                <button className="bg-coral text-white font-sans px-8 py-3 rounded-md hover:bg-coral/90 transition-colors">
                  Learn More
                </button>
                <button className="bg-coral text-white font-sans px-8 py-3 rounded-md hover:bg-coral/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-[500px] hidden md:block">
              <div className="absolute inset-0 bg-navy/5 rounded-lg">
                <Image
                  src="/tennis-court.jpg"
                  alt="Minimalist tennis court maintenance"
                  fill
                  className="object-cover object-center rounded-lg transition-opacity duration-300"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 text-navy/70">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="text-sm">
            © 2024 E Portfolio. All rights reserved.
          </div>
          <Link 
            href="mailto:contact@example.com" 
            className="flex items-center gap-2 text-coral hover:text-coral/80 transition-colors font-serif"
          >
            <span>Contact Me</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  )
}