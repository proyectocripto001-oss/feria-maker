import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CountdownSection } from './components/CountdownSection';
import { FacebookSection } from './components/FacebookSection';
import { FooterWaves } from './components/FooterWaves';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50/40 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-900">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero with authentic 3D MAKER lettering, crests and event details */}
      <Hero />

      {/* Official TickCounter Countdown Section */}
      <CountdownSection />

      {/* Official Facebook Community & Live Stream Embed Section */}
      <FacebookSection />

      {/* Ocean Wave Caribbean Footer */}
      <FooterWaves />
    </div>
  );
}
