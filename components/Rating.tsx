import React from 'react';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStar = (index: number) => {
    if (index < fullStars) {
      return <span className="text-yellow-500">&#9733;</span>; // Full star
    } else if (index === fullStars && hasHalfStar) {
      return <span className="text-yellow-500">&#9733;</span>; // Half star
    } else {
      return <span className="text-gray-300">&#9733;</span>; // Empty star
    }
  };

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-2xl">
          {renderStar(index)}
        </span>
      ))}
      <span className="ml-2">{rating.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
