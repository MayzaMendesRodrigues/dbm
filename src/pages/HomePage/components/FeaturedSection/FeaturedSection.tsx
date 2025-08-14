import './FeaturedSection.css';
import Catalog from '../../../../components/feature/Catalog/Catalog';
import { useData } from '../../../../context/DataContext'
import Button from '../../../../components/ui/Button'

const FeaturedSection: React.FC = () => {
  const { data } = useData();
  const { catalog, isLoading, error } = data;

  if (isLoading || error || !catalog.length) {
    return <br />
  }

  const productsWithImages = catalog.filter(product =>
    product.images && product.images.length > 0);
  const firstTenProducts = productsWithImages.slice(0, 10);

  if (firstTenProducts.length === 0) {
    return <br />
  }

  return (
    <section id="featured-section" className="featured-bikes">
      <div className="container">
        <h2 className="section-title">Motos Destacadas</h2>
        <Catalog catalog={firstTenProducts} />
        <Button href="/catalog" text="Ver más" />
      </div>
    </section>
  );
};

export default FeaturedSection;
