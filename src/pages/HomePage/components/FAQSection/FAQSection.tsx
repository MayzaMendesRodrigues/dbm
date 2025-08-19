import { pushEvent, EventAnalytics } from '../../../../analytics/analytics';
import './FAQSection.css'
import React, { useState } from 'react'
import FAQItem from './FAQItem/FAQItem'

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex != index) {
      pushEvent(faqs[index].analyticsId);
    }
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      q: "¿Qué métodos de pago aceptan?",
      a: "Aceptamos efectivo, transferencia bancaria y todos los principales medios de pago electrónico...",
      analyticsId: EventAnalytics.FAQPaymentMethods
    },
    {
      q: "¿Puedo revisar la moto antes de comprarla?",
      a: "¡Absolutamente! Entendemos lo importante que es asegurarse de la moto perfecta...",
      analyticsId: EventAnalytics.FAQInspectBike
    },
    {
      q: "¿Hacen servicio técnico postventa?",
      a: "Sí, contamos con taller propio especializado en todas las marcas que comercializamos.",
      analyticsId: EventAnalytics.FAQAfterSaleService
    },
    {
      q: "¿Puedo entregar mi moto actual como parte de pago?",
      a: "Sí, aceptamos tu moto actual como parte de pago...",
      analyticsId: EventAnalytics.FAQHandover
    }
  ];
  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
};

export default FAQSection;
