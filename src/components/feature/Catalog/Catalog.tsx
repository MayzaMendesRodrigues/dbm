import './Catalog.css'
import BikeCard from './BikeCard/BikeCard';
import BikeModal from './BikeModal/BikeModal';
import { Bike } from '../../../types';
import React, { useState } from 'react';
import { pushEvent, EventAnalytics } from '../../../analytics/analytics';

interface CatalogProps {
  catalog: Bike[]
}

const Catalog: React.FC<CatalogProps> = ({ catalog }) => {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (bike: Bike) => {
    setSelectedBike(bike);
    setIsModalOpen(true);
    pushEvent(EventAnalytics.BikeModalOpen)
  }

  return (
    <div>
      <div className="bikes-grid">
        {catalog.map((bike, index) => (
          <BikeCard
            key={index}
            bike={bike}
            onClick={() => handleOpenModal(bike)} />
        ))}
      </div>
      {isModalOpen && selectedBike && (
        <BikeModal
          bike={selectedBike}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />)}
    </div>
  )
};

export default Catalog;
