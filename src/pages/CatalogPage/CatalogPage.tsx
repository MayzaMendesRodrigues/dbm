import './CatalogPage.module.css';
import Header from '../../components/ui/Header/Header'
import CatalogSection from './CatalogSection/CatalogSection'

const CatalogPage: React.FC = () => {
  return (
    <div>
      <Header title="Catálogo de Motos" />
      <CatalogSection />
    </div>
  )
};

export default CatalogPage;
