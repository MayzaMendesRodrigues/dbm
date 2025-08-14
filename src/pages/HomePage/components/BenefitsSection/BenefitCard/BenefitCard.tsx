import './BenefitCard.css'


interface BenefitCardProps {
  title: string;
  icon: string;
  text: string;
}

const BenefitCard: React.FC<BenefitCardProps> = (benefit) => {
  return (
    <div className="benefit-card">
      <div className="benefit-icon">
        <i className={benefit.icon} />
      </div>
      <h3>{benefit.title}</h3>
      <p>{benefit.text}</p>
    </div>
  )
};

export default BenefitCard
