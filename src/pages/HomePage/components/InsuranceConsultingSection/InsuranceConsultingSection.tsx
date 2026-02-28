import React from 'react';
import InsuranceConsultingSection from './components/InsuranceConsultingSection/InsuranceConsultingSection';

interface InsuranceConsultingSectionProps {
  // Add props if needed
}

const InsuranceConsultingSection: React.FC<InsuranceConsultingSectionProps> = () => {
  return (
    <section className="insurance-consulting-section">
      <h2 className="section-title">Motorbike Insurance Consulting</h2>
      <p>Get expert advice on motorbike insurance and protect your vehicle.</p>
      {/* Add consulting form or other relevant content */}
    </section>
  );
};

export default InsuranceConsultingSection;
