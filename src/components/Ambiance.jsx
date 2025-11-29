import React from 'react';

const Ambiance = () => {
    return (
        <section id="ambiance" className="py-20 bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-teal/5 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-neon-amber/5 blur-[150px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">The <span className="text-neon-amber">Vibe</span></h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Step into a world where modern design meets timeless elegance. Our interior is designed to stimulate the senses, with mood lighting, curated playlists, and an atmosphere that buzzes with energy.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Whether you're here for a romantic dinner or a night out with friends, Lumière provides the perfect backdrop for unforgettable moments.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 glass rounded-lg">
                                <span className="block text-3xl font-bold text-neon-teal mb-1">50+</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Signature Cocktails</span>
                            </div>
                            <div className="text-center p-4 glass rounded-lg">
                                <span className="block text-3xl font-bold text-neon-teal mb-1">VIP</span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Private Dining</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Restaurant Interior"
                            className="rounded-lg shadow-2xl transform translate-y-8"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Bar Area"
                            className="rounded-lg shadow-2xl transform -translate-y-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ambiance;
