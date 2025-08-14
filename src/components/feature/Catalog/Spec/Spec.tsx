import './Spec.css'

type SpecVariant = 'year' | 'km' | 'cc'

type VariantsDict = {
  [key in SpecVariant]: string;
};

const variants: VariantsDict = {
  year: 'fas fa-tachometer-alt',
  km: 'fas fa-road',
  cc: 'fas fa-gas-pump',
}

interface SpecProps {
  variant: SpecVariant;
  text: string;
}

const Spec: React.FC<SpecProps> = ({ variant, text }) => {
  return (
    <div className='spec-item'>
      <i className={variants[variant]}></i>
      <span>{text}</span>
    </div>
  )
};

export default Spec;
