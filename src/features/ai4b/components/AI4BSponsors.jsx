import React from 'react';
import { motion } from 'motion/react';

const AI4BSponsors = () => {
    // Placeholder text for logos as requested
    const sponsors = [
        "Microsoft", "CDAC", "Google", "Yotta", "EkStep", "Nilekani Philanthropies", "Microsoft", "CDAC"
    ];

    // Duplicate the array to ensure seamless looping
    const marqueeSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

    return (
        <section className="bg-white py-16 px-6 md:px-12 border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <span className="text-orange-500 font-semibold tracking-wide uppercase mb-4 block">
                    Trust We Created
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-blue-900 font-bold mb-16">
                    Our Sponsors
                </h2>

                <div className="relative w-full overflow-hidden mask-gradient-x">
                    <motion.div
                        className="flex whitespace-nowrap gap-16 items-center"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {marqueeSponsors.map((sponsor, index) => (
                            <div key={index} className="text-2xl font-bold text-gray-400 select-none flex-shrink-0">
                                {sponsor}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AI4BSponsors;
