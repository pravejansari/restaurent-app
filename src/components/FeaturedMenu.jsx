import React, { useState } from 'react';

const menuItems = [
    {
        id: 1,
        name: "Truffle Risotto",
        description: "Arborio rice, black truffle, parmesan crisp.",
        price: "$28",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 2,
        name: "Seared Scallops",
        description: "Pan-seared scallops, cauliflower purée, caviar.",
        price: "$34",
        image: "https://images.unsplash.com/photo-1532465614-6cc8d45f647f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 3,
        name: "Wagyu Beef",
        description: "A5 Wagyu, roasted root vegetables, red wine reduction.",
        price: "$85",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
    },
    {
        id: 4,
        name: "Lobster Thermidor",
        description: "Whole lobster, creamy cognac sauce, gruyère cheese.",
        price: "$65",
        image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 5,
        name: "Duck Confit",
        description: "Slow-cooked duck leg, orange glaze, roasted potatoes.",
        price: "$32",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 6,
        name: "Chocolate Fondant",
        description: "Warm chocolate cake, liquid center, vanilla bean ice cream.",
        price: "$18",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

const FeaturedMenu = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayedItems = isExpanded ? menuItems : menuItems.slice(0, 3);

    return (
        <section id="menu" className="py-20 bg-deep-charcoal">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Chef's <span className="text-neon-teal">Specials</span></h2>
                    <div className="w-24 h-1 bg-neon-amber mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {displayedItems.map((item) => (
                        <div key={item.id} className="group relative overflow-hidden rounded-xl glass hover:border-neon-teal/50 transition-all duration-300">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                    <span className="text-neon-amber font-bold">{item.price}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-white border-b-2 border-neon-amber hover:text-neon-amber transition-colors duration-300 pb-1"
                    >
                        {isExpanded ? 'View Less' : 'View Full Menu'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedMenu;
