import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helicopter, Menu, X } from 'lucide-react';
import ai4blogo from '../../../assets/ai4b-logo.avif';

const AI4BNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-md py-4 px-4 md:px-12 shadow-sm border-b border-white/20">
            <div className="flex justify-between items-center">
                <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
                    {/* Logo Placeholder */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            <img src={ai4blogo} alt="AI4B Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center font-medium text-lg">
                    <Link to="/" className="link-primary">Bodhan Home</Link>
                    <a href="#product" className="link-primary">Product</a>
                    <a href="#resource" className="link-primary">Resource</a>
                    <a href="#people" className="link-primary">People</a>
                    <a href="#community" className="link-primary">Community</a>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-orange-500 transition-colors">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 pb-4 flex flex-col space-y-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg absolute right-0 top-full w-48 border border-gray-100 mr-4">
                    <Link to="/" className="link-primary text-lg" onClick={() => setIsOpen(false)}>Bodhan Home</Link>
                    <a href="#product" className="link-primary text-lg" onClick={() => setIsOpen(false)}>Product</a>
                    <a href="#resource" className="link-primary text-lg" onClick={() => setIsOpen(false)}>Resource</a>
                    <a href="#people" className="link-primary text-lg" onClick={() => setIsOpen(false)}>People</a>
                    <a href="#community" className="link-primary text-lg" onClick={() => setIsOpen(false)}>Community</a>
                </div>
            )}
        </nav>
    );
};

export default AI4BNavbar;
