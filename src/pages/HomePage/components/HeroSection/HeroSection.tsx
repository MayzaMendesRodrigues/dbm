import './HeroSection.css'
import Button from '../../../../components/ui/Button'
import { EventAnalytics, pushEvent } from '../../../../analytics/analytics';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Encontrá la moto de tus sueños al mejor precio</h1>
          <p>
            Más de 200 motos usadas revisadas y garantizadas. Financiación
            personalizada y entrega inmediata.
          </p>
          <div className="hero-btns">
            <Button
              href="/catalog"
              text="Ver catálogo"
              onClick={() => pushEvent(EventAnalytics.HeroCatalogButton)}
            />
            <Button
              variant="outline"
              href="https://wa.me/5491173608326?text=Hola,%20quiero%20información%20sobre%20sus%20motos"
              text="Contactar Ahora"
              onClick={() => pushEvent(EventAnalytics.HeroWhatsappButton)}
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;
