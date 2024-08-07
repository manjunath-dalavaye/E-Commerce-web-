import React from 'react';

interface CardProps {
  src: string;
}

const Card: React.FC<CardProps> = ({ src }) => {
  return (
    <div className="card">
      <img src={src} alt="loading" />
    </div>
  );
};

export default Card;
