import React from 'react';
import { Youtube, Linkedin, X } from 'lucide-react';
import AI4BFooterLogo from '../../../assets/ai4bfooter-logo.avif';

const AI4BFooter = () => {
    return (
        <footer className="w-full text-white bg-gradient-to-r from-[#5B6C9B] via-[#E88C8C] to-[#F18856] py-12 px-6 md:px-12 relative overflow-hidden">
            {/* Decorative Mandala/Floral Background (subtle) */}
            <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2">
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <circle cx="50" cy="50" r="50" />
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">

                    {/* Logo Area */}
                    <div className="w-full md:w-auto flex justify-center md:justify-start">
                        {/* Elaborate Circular Logo Placeholder based on reference */}
                        <div className="w-40 h-40 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center relative backdrop-blur-sm p-4">
                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-orange-500 font-bold text-2xl relative shadow-inner">
                                {/* Simulated Logo Icon */}
                                <img src={AI4BFooterLogo} className="w-full h-full object-contain" alt="AI4B Footer Logo" />
                                {/* Indic Script Decor Ring (Simulated) */}
                                <div className="absolute inset-0 rounded-full border border-gray-200 opacity-50"></div>
                            </div>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="flex-1 w-full flex flex-wrap justify-center md:justify-between gap-12 md:gap-16 text-center md:text-left max-w-4xl">
                        <div>
                            <h4 className="font-bold text-lg mb-4">Placeholder</h4>
                            <ul className="space-y-3 opacity-90 font-light text-sm">
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Placeholder</h4>
                            <ul className="space-y-3 opacity-90 font-light text-sm">
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4">Placeholder</h4>
                            <ul className="space-y-3 opacity-90 font-light text-sm">
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                                <li><a href="#" className="hover:text-blue-900 transition-colors">Placeholder text</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/30 mb-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light opacity-90">
                    <p>© 2024 AI4Bharat. All rights reserved</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-blue-900 transition-colors"><Youtube className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-blue-900 transition-colors"><X className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-blue-900 transition-colors"><Linkedin className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AI4BFooter;
