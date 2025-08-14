import './HowItWorksSection.css'
import Step from './Step/Step'

function HowItWorksSection() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">Cómo Comprar tu Moto</h2>
        <div className="steps-container">
          <Step number="1"
            title="Elegí tu moto"
            text="Seleccioná el modelo que más te guste de nuestro catálogo." />
          <Step number="2"
            title="Contactanos"
            text="Agendá una visita para ver y probar la moto." />
          <Step number="3"
            title="Personalizá tu pago"
            text="Elegí la forma de pago que mejor se adapte a tus necesidades." />
          <Step number="4"
            title="Recibí tu moto"
            text="Retirala en nuestro local o te la llevamos a domicilio." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
