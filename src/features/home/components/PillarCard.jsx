import React from 'react';

const PillarCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-start text-left">
            <div className="bg-gradient-to-t from-[var(--text-orange-500)]/20 to-[var(--color-20)] p-4 rounded-2xl mb-6"> {icon}
            </div>
            <h3 className="text-xl font-syne font-semibold text-white mb-4">{title}</h3>
            <p className="text-[var(--color-14)] font-inter text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default PillarCard;
