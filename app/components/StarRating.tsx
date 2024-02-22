import { Star } from "lucide-react";
import { useState } from "react";

interface StarRatingProps {
  starRating: number;
  onRatingChange: (newRating: number) => void;
  setIsVisible: (val: boolean) => void;
}

const StarRating: React.FC<StarRatingProps> = ({
  starRating,
  onRatingChange,
  setIsVisible,
}) => {
  const [hover, setHover] = useState<number>(starRating);

  const handleRatingChange = (newRating: number) => {
    onRatingChange(newRating);
  };

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        const isFilled = starValue <= hover;
        const isHovered = hover === starValue;

        return (
          <label key={index}>
            <input
              type="radio"
              className="hidden"
              name="rating"
              value={starValue}
              checked={starValue === hover}
              onChange={() => handleRatingChange(starValue)}
            />
            <Star
              size={20}
              className="cursor-pointer"
              color={isFilled ? "yellow" : isHovered ? "yellow" : "black"}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(starRating)}
              onClick={() => setIsVisible(false)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
