import React from 'react';

const PillarCard = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-start text-left">
            <div className="bg-[var(--color-20)] p-4 rounded-2xl mb-6"> {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default PillarCard;
