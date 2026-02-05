import React from 'react';
import bodhanVision from '../../../assets/bodhan-vision.avif';
import bodhanMission from '../../../assets/bodhan-mission.avif';

const VisionMission = () => {
    return (
        <div className="w-full bg-[var(--bg-black-900)] text-white py-24 px-6 relative overflow-hidden">
            {/* Vision Block */}
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-40 relative z-10">
                <div className="text-left">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-orange-400)] mb-8">Vision</h2>
                    <p className="text-white text-xl md:text-2xl font-normal leading-normal">
                        Our vision is to build a future where every child learns to read, write, count, and thrive with confidence, and every citizen (young or adult) is equipped to participate meaningfully in an AI-driven world.
                    </p>
                </div>
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">
                    {/* Vision Image */}
                    <img src={bodhanVision} alt="Bodhan Vision" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Mission Block */}
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mobile:mb-0 mb-32 relative z-10">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 order-2 lg:order-1 relative">
                    {/* Mission Image */}
                    <img src={bodhanMission} alt="Bodhan Mission" className="w-full h-full object-cover" />
                </div>
                <div className="text-left order-1 lg:order-2">
                    <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-orange-400)] mb-8">Mission</h2>
                    <p className="text-white text-xl md:text-2xl font-normal leading-normal">
                        Deploy responsible, inclusive, sovereign AI tools to transform how India learns, teaches, assesses, translates, and receives guidance across every language and every district.
                    </p>
                </div>
            </div>
            <div>
                {/* Decorative Gradient Overlay */}
                <p className="text-center text-white/80 mt-12 text-2xl w-4/5 mx-auto leading-relaxed">
                    This is not merely a technology initiative. It is a systemic transformation of how Bharat learns, teaches, evaluates, and builds digital capacity, fully aligned with NEP 2020 and the aspirations of Viksit Bharat @ 2047.
                </p>
            </div>
        </div>
    );
};

export default VisionMission;
