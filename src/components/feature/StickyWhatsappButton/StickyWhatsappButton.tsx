import './StickyWhatsappButton.css';
import { pushEvent, EventAnalytics } from '../../../analytics/analytics';

const StickyWhatsappButton: React.FC = () => {

  return (
    <a href="https://wa.me/5491173608326?text=Hola,%20quiero%20información%20sobre%20sus%20motos"
      className="StickyWhatsappButton btn-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => pushEvent(EventAnalytics.FloatingWhatsappButton)}>
      <i className="fab fa-whatsapp"></i>
    </a >
  );
};

export default StickyWhatsappButton;
