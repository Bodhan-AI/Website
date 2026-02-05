import React from 'react';
import { Facebook, Linkedin, MessageCircle, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[var(--bg-cream-50)] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Logo and Social Icons */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    {/* Left: Logo */}
                    <div className="text-2xl font-bold text-gray-900 mb-6 md:mb-0">
                        bodhan<span className="text-[var(--text-orange-500)]">.ai</span>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="flex space-x-3">
                        <a href="#" className="text-gray-600 hover:text-[var(--text-orange-500)] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md group">
                            <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[var(--text-orange-500)] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md group">
                            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[var(--text-orange-500)] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md group">
                            <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[var(--text-orange-500)] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md group">
                            <Twitter size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-[var(--text-orange-500)] transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md group">
                            <Youtube size={20} className="group-hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="w-full h-px bg-gray-300 mb-8"></div>

                {/* Bottom: Copyright */}
                <div className="text-center text-sm text-gray-500">
                    Copyright © 2026 bodhan.ai
                </div>
            </div>
        </footer>
    );
};

export default Footer;
