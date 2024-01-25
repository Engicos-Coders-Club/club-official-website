import { WhatWeBuiltCard } from '../WhatWeBuiltCard';
import './style.css';

const WhatWeBuiltSection: React.FC = () => {
    return (
        <div className="WhatWeBuiltSection">
            <p className='wwb-section-title'>WHAT <span>WE Built</span></p>
            <div className="section-content">
                <WhatWeBuiltCard heading="Project 1" description="Description 1" />
                <WhatWeBuiltCard heading="Project 2" description="Description 2" />
                <WhatWeBuiltCard heading="Project 3" description="Description 3" />
                <a href="/projects" className="view-more-button">View More <span>-&gt;</span></a>
                {/* Add more WhatWeBuiltCard components as needed */}
            </div>
        </div>
    );
};

export { WhatWeBuiltSection };
