import HeroSection from './components/HeroSection/HeroSection'
import FeaturedSection from './components/FeaturedSection/FeaturedSection'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import HowItWorksSection from './components/HowItWorksSection/HowItWorksSection'
import BrandsSection from './components/BrandsSection/BrandsSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import FAQSection from './components/FAQSection/FAQSection'
import ContactSection from './components/ContactSection/ContactSection'
import Header from '../../components/ui/Header/Header'

const homeNavItems = [
  { text: 'Beneficios', url: '#benefits' },
  { text: 'Marcas', url: '#brands' },
  { text: 'Testimonios', url: '#reviews' },
  { text: 'Contacto', url: '#contact' },
]

const HomePage: React.FC = () => {
  return (
    <div>
      <Header navItems={homeNavItems} />
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
