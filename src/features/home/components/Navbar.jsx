import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { Menu, X } from 'lucide-react';

import bodhanLogo from '../../../assets/bodhan-logo.avif';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Animation variants
    const linkVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const logoVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.nav
            className="sticky top-0 z-50 w-full bg-[var(--navbar-bg)] transition-spring"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-6 py-6 lg:py-8 flex items-center justify-center lg:justify-between relative">

                {/* Desktop Left Links */}
                <div className="hidden lg:flex space-x-12">
                    <motion.div variants={linkVariants}>
                        <Link to="/ai4b" className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">ai4b Home</Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <a href="#about" className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">About Us</a>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <a href="#team" className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">People</a>
                    </motion.div>
                </div>

                {/* Tablet: Logo + Prologue Text (Left aligned implicitly by justify-start, but let's ensure spacing) */}
                {/* Mobile: Logo Center (justify-center) */}
                <motion.div
                    className={`flex flex-shrink-0 items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2`}
                    variants={logoVariants}
                >
                    <div className="flex items-center space-x-2">
                        {/* Leaf Logo */}
                        <img src={bodhanLogo} alt="Bodhan Logo" className="w-14 h-14 object-contain" />
                        {/* Tablet only text */}
                        <span className="hidden md:block lg:hidden text-lg font-semibold text-[var(--text-primary)]/90">prologue</span>
                    </div>
                </motion.div>

                {/* Desktop Right Links */}
                <div className="hidden lg:flex space-x-12">
                    <motion.div variants={linkVariants}>
                        <a href="#" className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">Placeholder</a>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <a href="#" className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">Placeholder</a>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <a href="#" className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">Placeholder</a>
                    </motion.div>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="lg:hidden absolute right-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[var(--text-primary)] hover:text-orange-500 transition-colors p-2"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden overflow-hidden bg-[var(--navbar-bg)]/95 backdrop-blur-xl border-t border-[var(--text-primary)]/5"
            >
                <div className="flex flex-col space-y-6 px-6 py-8 items-center text-lg font-medium">
                    <Link
                        to="/ai4b"
                        className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        ai4b Home
                    </Link>
                    <a href="#about" className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>About Us</a>
                    <a href="#team" className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>People</a>
                    <a href="#" className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Placeholder</a>
                    <a href="#" className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Placeholder</a>
                    <a href="#" className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Placeholder</a>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
