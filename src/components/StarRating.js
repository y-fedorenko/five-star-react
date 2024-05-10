import {useState} from 'react';
import {FaStar} from 'react-icons/fa';


function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const ratingGradation = [
    'Poor',
    'Weak',
    'Good',
    'Very Good',
    'Excellent'
  ];
  
  return (
    <div>
      <div className='star-wrapper'>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label>
              <input 
                type='radio' 
                name='rating' 
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar 
                className="star" 
                size={60} 
                color={(index < (hover || rating)) ? '#FFC107' : "#E4E5E9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          )
        })}
      </div>
      <h2>{rating ? ratingGradation[rating - 1] : 'Please rate this product'}</h2>
      </div>

  )
}

export default StarRating;