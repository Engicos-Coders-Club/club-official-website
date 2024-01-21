import { HomepageProjectCard } from '../HomepageProjectCard';
import './style.css';

const HomepageProjectSection: React.FC = () => {
    return (
        <div className="HomepageProjectSection">
            <p className='section-title'>Projects under Club</p>
            
            <div className="section-content">
                <HomepageProjectCard heading="Project 1" description="Description 1" />
                <HomepageProjectCard heading="Project 2" description="Description 2" />
                <HomepageProjectCard heading="Project 3" description="Description 3" />
                <a href="/foo" className="view-more-button">View More <span>-&gt;</span></a>
                {/* Add more HomepageProjectCard components as needed */}
            </div>
        </div>
    );
};

export { HomepageProjectSection };
