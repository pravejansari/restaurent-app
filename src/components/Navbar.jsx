import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 glass top-0 left-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-neon-amber tracking-wider">LUMIÈRE</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#home" className="hover:text-neon-teal transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#menu" className="hover:text-neon-teal transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Menu</a>
                            <a href="#ambiance" className="hover:text-neon-teal transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Ambiance</a>
                            <a href="#reservations" className="bg-neon-teal text-deep-charcoal hover:bg-white hover:text-deep-charcoal transition-all duration-300 px-4 py-2 rounded-full text-sm font-bold neon-glow-teal">Reserve Now</a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden glass">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="hover:text-neon-teal block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#menu" className="hover:text-neon-teal block px-3 py-2 rounded-md text-base font-medium">Menu</a>
                        <a href="#ambiance" className="hover:text-neon-teal block px-3 py-2 rounded-md text-base font-medium">Ambiance</a>
                        <a href="#reservations" className="text-neon-amber block px-3 py-2 rounded-md text-base font-medium">Reserve Now</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
