import './BikeModal.css'
import Spec from '../Spec/Spec'
import BikeCarousel from '../Carousel/BikeCarousel'
import { Bike } from '../../../../types';
import React, { useEffect } from 'react';
import defaultImage from '../../../../assets/images/dbmblack.svg';

interface BikeModalProps {
  bike: Bike;
  isOpen: boolean;
  onClose: () => void;
}

const BikeModal: React.FC<BikeModalProps> = ({ bike, isOpen, onClose }) => {
  const { product, salePrice, images } = bike;
  const slides = images.length > 0 ? images : [{ url: defaultImage }];

  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="modal" onClick={onClose}>
      <span className="close-button">x</span>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="carousel-container">
          <BikeCarousel images={slides} />
        </div>

        <div className="modal-bike-info">
          <h3>{`${product.brand} ${product.model}`}</h3>
          <div className="modal-bike-specs">
            <Spec variant="year" text={product.year.toString()} />
            <Spec variant="km" text={product.mileage.toString()} />
            <Spec variant="cc" text={product.year.toString()} />
          </div>
          <p
            className="modal-bike-price"
            dangerouslySetInnerHTML={{
              __html: `${new Intl.NumberFormat('es-AR').format(salePrice)} <span>ARS</span>`,
            }}
          ></p>
          <a
            className="btn-whatsapp-modal"
            href={`https://wa.me/5491173608326?text=Hola,%20estoy%20interesado%20en%20la%20moto%20${product.brand}%20${product.model}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div >
  )
};

export default BikeModal;
