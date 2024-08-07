import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <img src={`${process.env.PUBLIC_URL}/assets/sofa.jpg`} alt="loading" />
    </div>
  );
};

export default Hero;
