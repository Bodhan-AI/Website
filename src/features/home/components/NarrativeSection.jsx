import React from 'react';
// import { Users, Heart, Cpu, ShieldCheck } from 'lucide-react';
// import PillarCard from './PillarCard';

const NarrativeSection = () => {
    return (
        <div id="narrative" className="w-full bg-[var(--bg-black-900)] text-white py-24 px-6 relative overflow-hidden ">
            <div className=" absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gradient-to-b from-[var(--text-orange-500)]/20 to-transparent blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10 relative p-10">
                {/* Headline */}
                <h2 className="text-5xl md:text-6xl leading-tight tracking-tight mb-8">
                    Awakening how India
                    <br className="hidden md:block" />
                    <span className="text-[var(--text-orange-500)]"> learns</span>, <span className="text-[var(--text-orange-500)]">teaches</span>, and <span className="text-[var(--text-orange-500)]">grows</span>
                </h2>

                {/* Paragraph 1 */}
                <p className="text-[var(--color-14)] font-inter text-xl leading-relaxed mb-8 max-w-4xl">
                    Bodhan AI is the Center of Excellence in Artificial Intelligence for Education, incubated by IIT Madras as a Section 8 Company and aligned with the National Education Policy 2020. Supported by dedicated funding in the Union Budget 2025–26, it is a flagship national initiative advancing AI-driven education and skilling. Guided by the vision of “Make AI in India, Make AI Work for India,” Bodhan AI serves as critical AI infrastructure to transform learning, teaching, and talent development at scale staying true to its Sanskrit meaning of “Awakening” or “Enlightenment.”
                </p>

                {/* Paragraph 2 */}
                <p className="text-[var(--color-14)] font-inter text-xl leading-relaxed mb-8 max-w-4xl">
                    India’s education landscape is unlike any other. Millions of learners, hundreds of languages, and deeply varied social and regional contexts demand systems that can adapt without excluding and scale without flattening diversity. Bodhan.AI exists to design, build, and steward the open Bharat EduAI Stack as a sovereign Digital Public Infrastructure, enabling inclusive, multilingual, and context aware AI capabilities for learning, teaching, assessment, and guidance across every district, institution, and demographic in the country.
                </p>

                {/* Tagline */}
                {/* <p className="text-[var(--color-14)] font-inter text-xl leading-relaxed mb-12 max-w-4xl">
                    Bodhan.AI is not a product. It is a national capability.
                </p> */}
            </div>

            {/* Values Grid */}
            {/* <div className="max-w-[90%] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                <PillarCard
                    title="Built for India's Scale"
                    description="Education systems must work for millions at once, without breaking under complexity. Bodhan designs AI that can operate reliably across large populations and diverse learning environments."
                    icon={<Users className="text-[var(--text-orange-500)]" size={24} />}
                />
                <PillarCard
                    title="Rooted in Equity and Inclusion"
                    description="Language, location, and access should never be barriers to learning. Bodhan prioritises multilingual, context-aware systems that serve every learner and educator."
                    icon={<Heart className="text-[#FF6B35]" size={24} />}
                />
                <PillarCard
                    title="AI as Public Infrastructure"
                    description="Bodhan treats AI as shared national infrastructure, not proprietary tooling. The focus is on openness, interoperability, and long-term public value."
                    icon={<Cpu className="text-[#FF6B35]" size={24} />}
                />
                <PillarCard
                    title="Responsible by Design"
                    description="Trust matters in education. Bodhan builds explainable, auditable, and policy-aligned AI systems that institutions can adopt with confidence."
                    icon={<ShieldCheck className="text-[#FF6B35]" size={24} />}
                />
            </div> */}
        </div>
    );
};

export default NarrativeSection;
