import React from 'react';

const Hero = () => {
    return (
        <div id="home" className="relative h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-glow">
                    Taste the <span className="text-neon-amber">Night</span>
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
                    Experience culinary excellence in a modern, chic atmosphere. Where every bite is a masterpiece.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-neon-amber text-deep-charcoal font-bold py-3 px-8 rounded-full hover:bg-white transition-all duration-300 neon-glow-amber">
                        View Menu
                    </button>
                    <button className="border-2 border-neon-teal text-neon-teal font-bold py-3 px-8 rounded-full hover:bg-neon-teal hover:text-deep-charcoal transition-all duration-300">
                        Book a Table
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
