import { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Card = ({ title, description, bullets, image, className = "", panelClassName = "", descriptionClassName = "" }) => {
    const cardRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [bulletsOpen, setBulletsOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile || !cardRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.5 }
        );
        observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, [isMobile]);

    const expanded = isMobile && isInView;

    return (
        <div
            ref={cardRef}
            className={`relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer ${className}`}
        >
            {/* Background Image Placeholder */}
            {image ? (
                <div className="absolute inset-0">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFDCA8] to-[#FFB347]/30">
                    <div className="absolute inset-0 flex items-center justify-center text-[#FF6B35] font-medium opacity-60 text-sm">
                        Image Placeholder
                    </div>
                </div>
            )}

            {/* White Text Panel - Solid on Hover */}
            <div className={`absolute bottom-4 left-4 right-4 border rounded-2xl p-6 shadow-sm transition-all duration-300 ease-out max-h-[calc(100%-2rem)] overflow-hidden flex flex-col
                ${image
                    ? 'bg-white border-transparent text-gray-900'
                    : `bg-white/60 backdrop-blur-md border-white/50 group-hover:bg-white group-hover:backdrop-blur-none group-hover:border-transparent ${expanded ? 'bg-white backdrop-blur-none border-transparent' : ''}`
                } ${panelClassName}`}>
                <h3 className={`text-xl font-medium mb-0 leading-tight text-gray-900`}>
                    {title}
                </h3>

                {/* Expandable Description — shows on hover / scroll-into-view */}
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'}`}>
                    <div className={`overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] ${expanded ? 'overflow-y-auto' : 'group-hover:overflow-y-auto'}`}>
                        {Array.isArray(description) ? (
                            <ul className={`text-sm font-inter mt-4 transition-opacity duration-300 delay-100 leading-relaxed list-disc pl-5 text-left ${expanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} text-gray-600 ${descriptionClassName}`}>
                                {description.map((item, index) => (
                                    <li key={index} className="mb-2 last:mb-0">{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <div className={`text-sm font-inter mt-4 transition-opacity duration-300 delay-100 leading-relaxed ${expanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} text-gray-600 ${descriptionClassName}`}>
                                {description}
                            </div>
                        )}

                        {/* Bullets — click to expand */}
                        {bullets && bullets.length > 0 && (
                            <div className={`transition-opacity duration-300 delay-100 ${expanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                {!bulletsOpen && (
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setBulletsOpen(true); }}
                                        className="flex items-center justify-center gap-1 mt-3 w-full text-xs font-medium text-[#FF6B35] hover:text-[#E55A2B] transition-colors cursor-pointer"
                                    >
                                        <ChevronDown size={14} />
                                        Learn more
                                    </button>
                                )}
                                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${bulletsOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                    <div className="overflow-hidden">
                                        <ul className="list-disc pl-4 mt-2 space-y-1 text-left text-xs text-gray-600 leading-relaxed">
                                            {bullets.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setBulletsOpen(false); }}
                                            className="flex items-center justify-center gap-1 mt-3 w-full text-xs font-medium text-[#FF6B35] hover:text-[#E55A2B] transition-colors cursor-pointer"
                                        >
                                            <ChevronDown size={14} className="rotate-180" />
                                            Collapse
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
