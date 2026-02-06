import React from 'react';

const CTAButton = ({ children, variant = "primary", className = "", ...props }) => {
    const baseStyles = "px-8 py-4 rounded-xl font-medium text-lg transition-colors shadow-lg";

    const variants = {
        primary: "bg-[#1A1A1A] text-white hover:bg-black",
        secondary: "bg-white text-[#FF6B35] hover:bg-gray-50",
        orange: "bg-[#FF6B35] text-white hover:bg-[#E55A2B]"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (props.href) {
        return (
            <a className={combinedClassName} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={combinedClassName}
            {...props}
        >
            {children}
        </button>
    );
};

export default CTAButton;
