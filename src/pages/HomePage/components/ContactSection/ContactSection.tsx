import './ContactSection.css'
import Button from '../../../../components/ui/Button'
import { pushEvent, EventAnalytics } from '../../../../analytics/analytics';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="cta">
      <div className="container">
        <h2>¿Encontraste tu moto ideal?</h2>
        <p>
          Contactanos ahora para agendar una prueba de manejo o recibir
          asesoramiento personalizado.
        </p>
        <Button href="tel:+5491173608326"
          onClick={() => pushEvent(EventAnalytics.FooterCallButton)}>
          <i className="fas fa-phone-alt"></i>Llamar ahora
        </Button>
        <Button variant="outline"
          href="https://wa.me/5491173608326?text=Hola,%20quiero%20información%20sobre%20sus%20motos"
          onClick={() => pushEvent(EventAnalytics.FooterWhatsappButton)}
          style={{ marginLeft: '20px' }}>
          <i className="fab fa-whatsapp"></i>WhatsApp
        </Button>
      </div>
    </section >
  )
};

export default ContactSection;
