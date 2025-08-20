import React from 'react';
import './TrustIndicators.css';

const TrustIndicators: React.FC = () => {
  return (
    <div className="trust-section">
      <div className="trust-item">
        <div className="trust-number">150+</div>
        <div className="trust-label">Motos cotizadas este mes</div>
      </div>
      <div className="trust-item">
        <div className="trust-number">13000+</div>
        <div className="trust-label">Clientes satisfechos</div>
      </div>
      <div className="trust-item">
        <div className="trust-number">24h</div>
        <div className="trust-label">Tiempo de respuesta</div>
      </div>
    </div>
  );
};

export default TrustIndicators;
