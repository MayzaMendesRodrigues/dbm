import './ReviewCard.css'
import { Review } from '../../../../../types';

interface ReviewProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className="review-card">
      <p className="review-content">{review.text}</p>
      <div className="review-author">
        <div className="author-img">
          <img src={review.reviewer_picture_url} alt={review.reviewer_name} />
        </div>
        <div className="author-info">
          <h4>{review.reviewer_name}</h4>
          <div className="rating">
            {Array.from({ length: review.rating }, (_, i) => (
              <i key={i} className="fas fa-star" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReviewCard;
