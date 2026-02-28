import React from 'react';
import InsuranceConsultingForm from '../../../../components/feature/Forms/InsuranceConsultingForm/InsuranceConsultingForm';

interface InsuranceConsultingSectionProps {
  // Add props if needed
}

const InsuranceConsultingSection: React.FC<InsuranceConsultingSectionProps> = () => {
  return (
    <section className="insurance-consulting-section" style={{ padding: '4rem 2rem', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '1rem' }}>Motorbike Insurance Consulting</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Get expert advice on motorbike insurance and protect your vehicle.</p>
        <InsuranceConsultingForm />
      </div>
    </section>
  );
};

export default InsuranceConsultingSection;
