import './style.css';
import Image from 'next/image';
import placeholderImag from '../../../public/logo.jpg';
interface WhatWeDidCardProps {
    heading: string;
    description: string;
}

const WhatWeDidCard: React.FC<WhatWeDidCardProps> = ({ heading, description }) => {
    return (
        <div className="wwdidCard">
            <div className="card-image">
                <Image src={placeholderImag} alt='placeholder' width={100} height={50} />
            </div>
            <h2 className="card-heading">{heading}</h2>
            <p className="wwdid-card-description">{description}</p>
        </div>
    );
};

export { WhatWeDidCard };
