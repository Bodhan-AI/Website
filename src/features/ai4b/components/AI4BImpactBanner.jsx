import React from 'react';
import { Edit2 } from 'lucide-react';

const AI4BImpactBanner = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#5B6C9B] via-[#E88C8C] to-[#F18856] py-14 px-6 text-white relative overflow-hidden">
            <div className="absolute left-0 bottom-0 opacity-20 pointer-events-none">
                <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 100 Q 50 50 100 100 L 0 100" />
                    <path d="M0 100 Q 25 25 50 100" />
                    <path d="M0 100 Q 10 10 20 100" />
                </svg>
            </div>
            <div className="absolute right-0 top-0 opacity-20 pointer-events-none transform rotate-180">
                <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0 100 Q 50 50 100 100 L 0 100" />
                    <path d="M0 100 Q 25 25 50 100" />
                    <path d="M0 100 Q 10 10 20 100" />
                </svg>
            </div>


            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center relative z-10 opacity-90">

                {/* Column 1 */}
                <div className="flex-1 px-4 mb-6 md:mb-0">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-1">Open Source</h3>
                    <p className="text-base md:text-lg font-light opacity-90">Shared Knowledge</p>
                </div>

                {/* Divider 1 */}
                <div className="hidden md:block w-px h-14 bg-white/40"></div>

                {/* Column 2 */}
                <div className="flex-1 px-4 mb-6 md:mb-0">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-1">22</h3>
                    <p className="text-base md:text-lg font-light opacity-90">Indian Languages and counting</p>
                </div>

                {/* Divider 2 */}
                <div className="hidden md:block w-px h-14 bg-white/40"></div>

                {/* Column 3 */}
                <div className="flex-1 px-4 relative flex items-center justify-center flex-col w-full">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-1">Driving Impact</h3>
                    <p className="text-base md:text-lg font-light opacity-90">For Bharat</p>
                </div>

            </div>
        </section>
    );
};

export default AI4BImpactBanner;
