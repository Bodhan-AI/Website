import React from 'react';
import AI4BNavbar from './AI4BNavbar';
import AI4BIntro from './AI4BIntro';
import AI4BInnovation from './AI4BInnovation';
import AI4BImpactBanner from './AI4BImpactBanner';
import AI4BAbout from './AI4BAbout';
import AI4BFocusAreas from './AI4BFocusAreas';
import AI4BServices from './AI4BServices';
import AI4BSponsors from './AI4BSponsors';
import AI4BTeam from './AI4BTeam';
import AI4BFAQ from './AI4BFAQ';
import AI4BJoin from './AI4BJoin';
import AI4BFooter from './AI4BFooter';

const AI4BPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <AI4BNavbar />
            <AI4BIntro />
            <AI4BInnovation />
            <AI4BImpactBanner />
            <AI4BAbout />
            <AI4BFocusAreas />
            <AI4BServices />
            <AI4BSponsors />
            <AI4BTeam />
            <AI4BFAQ />
            <AI4BJoin />
            <AI4BFooter />
        </div>
    );
};

export default AI4BPage;
