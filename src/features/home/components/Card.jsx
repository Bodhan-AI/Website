import React from 'react';

const Card = ({ title, description, image, className = "" }) => {
    return (
        <div className={`relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer ${className}`}>
            {/* Background Image Placeholder */}
            {image ? (
                <div className="absolute inset-0">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFDCA8] to-[#FFB347]/30">
                    <div className="absolute inset-0 flex items-center justify-center text-[#FF6B35] font-medium opacity-60 text-sm">
                        Image Placeholder
                    </div>
                </div>
            )}

            {/* White Text Panel - Glossy by default, Solid on Hover */}
            <div className={`absolute bottom-4 left-4 right-4 backdrop-blur-md border rounded-2xl p-6 shadow-sm transition-all duration-300 ease-out max-h-[calc(100%-2rem)] overflow-hidden flex flex-col
                ${image
                    ? 'bg-black/30 border-white/20 text-white group-hover:bg-white group-hover:backdrop-blur-none group-hover:border-transparent group-hover:text-gray-900'
                    : 'bg-white/60 border-white/50 group-hover:bg-white group-hover:backdrop-blur-none group-hover:border-transparent'
                }`}>
                <h3 className={`text-xl font-syne font-medium mb-0 leading-tight ${image ? 'text-white group-hover:text-gray-900' : 'text-gray-900'}`}>
                    {title}
                </h3>

                {/* Expandable Description */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden group-hover:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        <p className={`text-sm font-inter mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed ${image ? 'text-gray-600' : 'text-gray-600'}`}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
