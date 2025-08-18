import React from 'react';
import './BikeCard.css';
import Spec from '../Spec/Spec'
import { Bike } from '../../../../types';
import defaultImage from '../../../../assets/images/dbmblack.svg';

interface BikeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  bike: Bike;
}

const BikeCard: React.FC<BikeCardProps> = ({ bike, onClick }) => {
  const { product, salePrice, images } = bike;
  const imageUrl = images.find(image =>
    image.primary)?.url
    || (images.length > 0 ? images[0].url : defaultImage);

  return (
    <div className="bike-card" onClick={onClick}>
      <div className="bike-badge">{product.type || 'Destacada'}</div>
      <div className="bike-image">
        <img src={imageUrl} alt={`${product.brand} ${product.model}`} />
      </div>
      <div className="bike-info">
        <h3>{`${product.brand} ${product.model}`}</h3>
        <div className="bike-specs">
          <Spec variant="year" text={product.year.toString()} />
          <Spec variant="km" text={product.mileage.toString()} />
          <Spec variant="cc" text={product.cylinder.toString()} />
        </div>
        <div className="bike-price">${salePrice.toLocaleString('es-AR')}</div>
      </div>
    </div>
  );
};

export default BikeCard;
