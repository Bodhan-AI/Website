import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";
import { Menu, X } from 'lucide-react';

import Icon from '../../../assets/Icon.png';
import LogoWithIcon from '../../../assets/Logo-with-icon.png';

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
            className="sticky top-0 z-50 w-full bg-orange-50 transition-spring"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-6 py-3 sm:py-4 md:py-4 lg:py-7 flex items-center justify-center lg:justify-between relative">

                {/* Desktop Left Links */}
                <div className="hidden lg:flex space-x-12">
                    <motion.div variants={linkVariants}>
                        <Link to="/" className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <Link to="/" state={{ scrollTo: 'vision-mission' }} className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">Vision</Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <Link to="/" state={{ scrollTo: 'research' }} className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">Research</Link>
                    </motion.div>
                </div>

                {/* Mobile: Logo Center (justify-center) */}
                <motion.div
                    className={`flex flex-shrink-0 items-center justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2`}
                    variants={logoVariants}
                >
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-2">
                        {/* Mobile: Only Icon */}
                        <img src={Icon} alt="Bodhan Icon" className="h-14 w-auto object-contain md:hidden" />
                        {/* Tablet/Desktop: Logo with Icon */}
                        <img src={Icon} alt="Bodhan Logo" className="h-18 w-auto object-contain hidden md:block" />
                    </Link>
                </motion.div>

                {/* Desktop Right Links */}
                <div className="hidden lg:flex space-x-12">
                    <motion.div variants={linkVariants}>
                        <Link to="/" state={{ scrollTo: 'team' }} className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">Team</Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <Link to="/careers" className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium" onClick={() => window.scrollTo(0, 0)}>Careers</Link>
                    </motion.div>
                    <motion.div variants={linkVariants}>
                        <Link to="/" state={{ scrollTo: 'careers' }} className="text-[var(--text-primary)]/90 hover:text-[var(--text-hover)] transition-colors font-medium">Contact</Link>
                    </motion.div>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="lg:hidden absolute right-0 flex items-center h-full">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[var(--text-primary)] hover:text-orange-500 transition-colors p-2"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
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
                    <Link to="/" className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Home</Link>
                    <Link to="/" state={{ scrollTo: 'vision-mission' }} className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Vision</Link>
                    <Link to="/" state={{ scrollTo: 'research' }} className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Research</Link>
                    <Link to="/" state={{ scrollTo: 'team' }} className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Team</Link>
                    <Link to="/careers" className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Careers</Link>
                    <Link to="/" state={{ scrollTo: 'careers' }} className="text-[var(--text-primary)]/90 hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
