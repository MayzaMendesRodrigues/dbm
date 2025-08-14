import './HeroSection.css'
import Button from '../../../../components/ui/Button'

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
            <Button href="/catalog" text="Ver catálogo" />
            <Button variant="outline" href="#contacto" text="Contactar Ahora" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;
