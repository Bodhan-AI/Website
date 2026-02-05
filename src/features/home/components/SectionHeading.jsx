import React from 'react';

import { motion as Motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const SectionHeading = ({ title, highlightWord, subtitle, className = "", titleClassName = "", parallax = false }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Move up slightly as we scroll down

    // Split title to highlight word if provided
    const renderTitle = () => {
        if (!highlightWord) return title;
        const parts = title.split(highlightWord);
        return (
            <>
                {parts.map((part, i) => (
                    <React.Fragment key={i}>
                        {part}
                        {i < parts.length - 1 && <span className="text-[#FF6B35]">{highlightWord}</span>}
                    </React.Fragment>
                ))}
            </>
        );
    };

    if (parallax) {
        return (
            <Motion.div
                ref={ref}
                style={{ y }}
                className={`text-center ${className}`}
            >
                <h2 className={`text-5xl md:text-6xl font-semibold mb-6 tracking-tight ${titleClassName}`}>
                    {renderTitle()}
                </h2>
                {subtitle && (
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-20">
                        {subtitle}
                    </p>
                )}
            </Motion.div>
        );
    }

    return (
        <div className={`text-center ${className}`}>
            <h2 className={`text-5xl md:text-6xl font-semibold mb-6 tracking-tight ${titleClassName}`}>
                {renderTitle()}
            </h2>
            {subtitle && (
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed mb-20">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
