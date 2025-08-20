import './Spec.css'

type SpecVariant = 'year' | 'km' | 'cc'

type VariantsDict = {
  [key in SpecVariant]: { className: string, suffix?: string };
};

const variants: VariantsDict = {
  year: { className: 'fas fa-tachometer-alt' },
  km: { className: 'fas fa-road', suffix: "km" },
  cc: { className: 'fas fa-gas-pump', suffix: "cc" },
}

interface SpecProps {
  variant: SpecVariant;
  text: string;
}

const Spec: React.FC<SpecProps> = ({ variant, text }) => {
  return (
    <div className='spec-item'>
      <i className={variants[variant].className}></i>
      <span>{text}{variants[variant].suffix}</span>
    </div>
  )
};

export default Spec;
