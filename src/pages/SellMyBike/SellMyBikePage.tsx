import React from 'react';
import Header from '../../components/ui/Header/Header';
import BikeForm from './BikeForm/BikeForm';
import TrustIndicators from './TrustIndicators/TrustIndicators';
import './SellMyBikePage.css';

const SellMyBikePage: React.FC = () => {
  return (
    <div className="container">
      <Header
        title="Vende tu Moto"
        subtitle="Obtén una cotización personalizada en minutos"
      />
      <div className="wrapper">
        <BikeForm />
        <TrustIndicators />
      </div>
    </div>
  );
};

export default SellMyBikePage;
