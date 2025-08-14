import './FAQItem.css'

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <div className="faq-question" onClick={onClick}>
        {question}
      </div>
      <div className="faq-answer">{answer}</div>
    </div>)
};

export default FAQItem;
