import './style.css';
import Image from 'next/image';
import placeholderImag from '../../../public/logo.jpg';
interface WhatWeBuiltCardProps {
  heading: string;
  description: string;
}

const WhatWeBuiltCard: React.FC<WhatWeBuiltCardProps> = ({ heading, description }) => {
  return (
    <div className="wwbuilt-card">
      <h2 className="wwbuilt-card-heading">{heading}</h2>
      <p className="wwbuilt-card-description">{description}</p>
      <p>🧧Javascript ⭐9 🔧8</p>
    </div>
  );
};

export { WhatWeBuiltCard };
