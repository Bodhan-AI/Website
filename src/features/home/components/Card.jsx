import React from 'react';

const Card = ({ title, description, className = "" }) => {
    return (
        <div className={`relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer ${className}`}>
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFDCA8] to-[#FFB347]/30">
                <div className="absolute inset-0 flex items-center justify-center text-[#FF6B35] font-medium opacity-60 text-sm">
                    Image Placeholder
                </div>
            </div>

            {/* White Text Panel - Glossy by default, Solid on Hover */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/60 backdrop-blur-md border border-white/50 group-hover:bg-white group-hover:backdrop-blur-none group-hover:border-transparent rounded-2xl p-6 shadow-sm transition-all duration-300 ease-out">
                <h3 className="text-xl font-medium text-gray-900 mb-0 leading-tight">
                    {title}
                </h3>

                {/* Expandable Description */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                    <div className="overflow-hidden">
                        <p className="text-gray-600 text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
