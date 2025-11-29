import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import Ambiance from './components/Ambiance';

function App() {
  return (
    <div className="bg-deep-charcoal min-h-screen text-white selection:bg-neon-teal selection:text-deep-charcoal">
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <Ambiance />

      <footer className="bg-black py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neon-amber mb-4">LUMIÈRE</h2>
          <p className="text-gray-500 text-sm">© 2024 Lumière Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
