import './ReviewCard.css'
import { Review } from '../../../../../types';
import { Star } from 'lucide-react';

interface ReviewProps {
  review: Review;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

const ReviewCard: React.FC<ReviewProps> = ({ review, isExpanded, onToggleExpanded }) => {
  const maxContentLength = 200;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      />
    ));
  };

  const getDisplayText = (content: string) => {
    if (isExpanded || content.length <= maxContentLength) {
      return content;
    }
    return content.substring(0, maxContentLength).trim() + '...';
  };

  const isLong = (content: string) => {
    return content.length > maxContentLength;
  };

  const timeAgo = (timestampInSeconds: number): string => {
    const nowInSeconds = Math.floor(new Date().getTime() / 1000);
    const seconds = nowInSeconds - timestampInSeconds;

    let interval = seconds / 31536000;
    if (interval > 1) {
      const years = Math.floor(interval);
      return `Hace ${years} ${years === 1 ? 'año' : 'años'}`;
    }

    interval = seconds / 2592000;
    if (interval > 1) {
      const months = Math.floor(interval);
      return `Hace ${months} ${months === 1 ? 'mes' : 'meses'}`;
    }

    interval = seconds / 604800;
    if (interval > 1) {
      const weeks = Math.floor(interval);
      return `Hace ${weeks} ${weeks === 1 ? 'semana' : 'semanas'}`;
    }

    interval = seconds / 86400;
    if (interval > 1) {
      const days = Math.floor(interval);
      return `Hace ${days} ${days === 1 ? 'día' : 'días'}`;
    }

    return 'Hace 1 día';
  };

  return (
    <div className="review" >
      <div className="review-content">
        {/* Quote */}
        <div className="quote-container">
          <p className="quote-text">
            "{getDisplayText(review.text)}"
          </p>
          {isLong(review.text) && (
            <button onClick={onToggleExpanded} className="read-more-button">
              {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </div>

        {/* Author Info */}
        <div className="author-container">
          <img
            src={review.reviewer_picture_url}
            alt={review.reviewer_name}
            className="author-avatar"
          />
          <div className="author-details">
            <h4 className="author-name">
              {review.reviewer_name}
            </h4>
            <div className="rating-container">
              <div className="stars-container">{renderStars(review.rating)}</div>
              <span className="review-date">• {timeAgo(review.published_at)}</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ReviewCard;
