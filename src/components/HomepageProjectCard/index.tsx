import './style.css';
import Image from 'next/image';
import placeholderImag from '../../../public/logo.jpg';
interface HomepageProjectCardProps {
  heading: string;
  description: string;
}

const HomepageProjectCard: React.FC<HomepageProjectCardProps> = ({ heading, description }) => {
  return (
    <div className="homepage-project-card">
      <div className="card-image">
        <Image src={placeholderImag} alt='placeholder' width={100} height={50}/>
      </div>
      <h2 className="card-heading">{heading}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export { HomepageProjectCard };
