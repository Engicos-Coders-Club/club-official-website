import { WhatWeBuiltCard } from '../WhatWeBuiltCard';
import './style.css';

const WhatWeBuiltSection: React.FC = () => {
    return (
        <div className="WhatWeBuiltSection">
            <div className='wwb-section-header'>
                <p className='wwb-section-title'>WHAT <span>WE Built</span></p>
                <a href="/projects" className="wwb-view-more-button">View More <span>-&gt;</span></a>
            </div>
            <div className="section-content">

                {/* TODO : This will be done through API fetching */}

                <WhatWeBuiltCard heading="Coders Club Official Website" description="Description 1" />
                <WhatWeBuiltCard heading="Project 2" description="This project is build using basic Next.js with TypeScript architecture. The plan and prototype for the project is described on the excalidraw Live collaboration Sketch. Feel free to give you suggestion in the excalidraw plan." />
                <WhatWeBuiltCard heading="Project 3" description="Description 3" />
                <WhatWeBuiltCard heading="Project 2" description="This project is build using basic Next.js with TypeScript architecture. The plan and prototype for the project is described on the excalidraw Live collaboration Sketch. Feel free to give you suggestion in the excalidraw plan." />
                <WhatWeBuiltCard heading="Project 2" description="This project is build using basic Next.js with TypeScript architecture. The plan and prototype for the project is described on the excalidraw Live collaboration Sketch. Feel free to give you suggestion in the excalidraw plan." />
                {/* Add more WhatWeBuiltCard components as needed */}
            </div>
        </div>
    );
};

export { WhatWeBuiltSection };
