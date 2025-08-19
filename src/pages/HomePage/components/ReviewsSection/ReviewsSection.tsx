import { useState } from 'react';
import './ReviewsSection.css'
import Slider from '../../../../components/ui/Slider/Slider'
import ReviewCard from './ReviewCard/ReviewCard'
import { useData } from '../../../../context/DataContext'

const ReviewsSection: React.FC = () => {
  const { data } = useData();
  const { reviews, isLoading, error } = data;
  const [expandedReviewIndex, setExpandedReviewIndex] = useState<number | null>(null);

  if (isLoading || error || !reviews.length || reviews.length === 0) {
    return <br />
  }

  const reviewsSet = reviews.slice(0, 9);

  const handleToggleExpanded = (index: number) => {
    setExpandedReviewIndex(prevIndex => prevIndex === index ? null : index);
  };

  const handleSlideChange = () => {
    setExpandedReviewIndex(null);
  };

  const reviewsComponents = reviewsSet.map((review, index) => (
    <ReviewCard
      key={index}
      review={review}
      isExpanded={expandedReviewIndex === index}
      onToggleExpanded={() => handleToggleExpanded(index)}
    />
  ));

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">Opiniones de clientes</h2>
        <Slider content={reviewsComponents} onSlideChange={handleSlideChange} />
      </div>
    </section >
  )
};

export default ReviewsSection;
