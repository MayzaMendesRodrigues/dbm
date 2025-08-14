import './BenefitsSection.css'
import BenefitCard from './BenefitCard/BenefitCard'


const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <h2 className="section-title">Beneficios de elegirnos</h2>
        <div className="benefits-grid">
          <BenefitCard
            title="Garantía en todas las motos"
            icon="fas fa-shield-alt"
            text="Todas nuestras motos pasan por una revisión técnica completa y cuentan con garantía." />
          <BenefitCard
            title="Financiación personalizada"
            icon="fas fa-hand-holding-usd"
            text="Planes de pago adaptados a tus necesidades. Tasas competitivas y aprobación rápida." />
          <BenefitCard
            title="Revisión técnica completa"
            icon="fas fa-tools"
            text="Cada moto pasa por nuestro taller especializado para garantizar su óptimo funcionamiento." />
          <BenefitCard
            title="Entrega inmediata"
            icon="fas fa-bolt"
            text="Recibí tu moto en el momento con todos los papeles en regla y lista para rodar." />
        </div>
      </div>
    </section>
  )
};

export default BenefitsSection;
