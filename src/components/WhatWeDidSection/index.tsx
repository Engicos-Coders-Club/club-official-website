import { WhatWeDidCard } from '../WhatWeDidCard';
import './style.css';

const WhatWeDidSection: React.FC = () => {
    return (
        <div className="WhatWeDidSection">
            <p className='wwdid-section-title'>WHAT <span>WE DID</span></p>
            <div className="section-content">
                <WhatWeDidCard heading="GitHub Workshop" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" />
                <WhatWeDidCard heading="Basic Concepts of Coding" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" />
                <WhatWeDidCard heading="Software Development talk" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad" />
                <a href="/events" className="view-more-button">View More <span>-&gt;</span></a>
                {/* Add more WhatWeBuiltCard components as needed */}
            </div>
        </div>
    );
};

export { WhatWeDidSection };
