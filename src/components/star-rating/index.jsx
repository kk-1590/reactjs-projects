import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    console.log(currentIndex);
    setRating(currentIndex);
  }

  function handleMouseEnter(currentIndex) {
    console.log(currentIndex);
    setHover(currentIndex);
  }

  function handleMouseLeave(currentIndex) {
    console.log(currentIndex);
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((i,index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className={index <= (hover || rating) ? 'active' : 'inactive' }
          />
        );
      })}
    </div>
  );
}
