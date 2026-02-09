import React, { useState, useRef, useEffect } from 'react';

const Card = ({ title, description, image, className = "", panelClassName = "", descriptionClassName = "" }) => {
    const [isClicked, setIsClicked] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsClicked(false);
            }
        };

        if (isClicked) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isClicked]);

    return (
        <div
            ref={cardRef}
            onClick={() => setIsClicked(!isClicked)}
            className={`relative w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[420px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer ${className}`}
        >
            {/* Background Image Placeholder */}
            {image ? (
                <div className="absolute inset-0">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFDCA8] to-[#FFB347]/30 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-[#FF6B35] font-medium opacity-60 text-sm">
                        Image Placeholder
                    </div>
                </div>
            )}

            {/* White Text Panel - Solid on Hover/Click */}
            <div className={`absolute bottom-4 left-4 right-4 backdrop-blur-md border rounded-2xl p-3 shadow-sm transition-all duration-300 ease-out max-h-[calc(100%-2rem)] overflow-hidden flex flex-col
                ${image
                    ? `bg-white border-transparent text-gray-900 ${isClicked ? 'backdrop-blur-none' : ''} md:group-hover:backdrop-blur-none`
                    : `bg-white/60 border-white/50 ${isClicked ? 'bg-white backdrop-blur-none border-transparent' : ''} md:group-hover:bg-white md:group-hover:backdrop-blur-none md:group-hover:border-transparent`
                } ${panelClassName}`}>
                <h3 className={`text-xl font-medium mb-0 leading-tight text-gray-900`}>
                    {title}
                </h3>

                {/* Expandable Description */}
                <div className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out ${isClicked ? 'grid-rows-[1fr]' : ''} md:group-hover:grid-rows-[1fr]`}>
                    <div className="overflow-hidden group-hover:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                        {Array.isArray(description) ? (
                            <ul className={`text-sm font-inter mt-3 transition-opacity duration-300 delay-100 leading-relaxed list-disc pl-3 text-left text-gray-600 ${isClicked ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100 ${descriptionClassName}`}>
                                {description.map((item, index) => (
                                    <li key={index} className="mb-2 last:mb-0">{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className={`text-sm font-inter mt-3 transition-opacity duration-300 delay-100 leading-relaxed text-gray-600 ${isClicked ? 'opacity-100' : 'opacity-0'} md:group-hover:opacity-100 ${descriptionClassName}`}>
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
