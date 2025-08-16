import HeroSection from './components/HeroSection/HeroSection'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection'
import BrandsSection from './components/BrandsSection/BrandsSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import FAQSection from './components/FAQSection/FAQSection'
import ContactSection from './components/ContactSection/ContactSection'
import Header from '../../components/ui/Header/Header'

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <BenefitsSection />
      <HowItWorksSection />
      <BrandsSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
