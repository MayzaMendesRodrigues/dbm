import './Step.css'

interface StepProps {
  number: string;
  title: string;
  text: string;
}

const Step: React.FC<StepProps> = ({ number, title, text }) => {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
};

export default Step;
