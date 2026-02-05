import React from 'react';

const Section = ({ children, className = "", id = "" }) => {
    return (
        <section id={id} className={`w-full relative ${className}`}>
            {children}
        </section>
    );
};

export default Section;
