import React from 'react';

const Container = ({ children, className = "", ...props }) => {
    return (
        <div className={`max-w-screen-2xl mx-auto px-6 ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Container;
