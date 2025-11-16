import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Rating = ({ initialRating = 0, maxRating = 5, onRate }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    if (onRate) onRate(value);
  };

  useEffect(() => {
    if (typeof initialRating === 'number') {
      setRating(initialRating);
    }
  }, [initialRating]);

  return (
    <div className="flex items-center space-x-1" role="radiogroup" aria-label="Rating">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isFilled = hoverRating ? starValue <= hoverRating : starValue <= rating;

        return (
          <button
            key={index}
            type="button"
            className={`text-xl sm:text-2xl transition-colors duration-200 focus:outline-none ${
              isFilled ? 'text-yellow-500' : 'text-gray-400'
            } hover:text-yellow-400`}
            onClick={() => handleRating(starValue)}
            onMouseEnter={() => setHoverRating(starValue)}
            onMouseLeave={() => setHoverRating(0)}
            aria-label={`${starValue} Star`}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  initialRating: PropTypes.number,
  maxRating: PropTypes.number,
  onRate: PropTypes.func,
};

export default Rating;
