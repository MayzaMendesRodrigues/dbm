import './BrandsSection.css'
import BrandItem from './BrandItem/BrandItem';
import yamahaLogo from '../../../../assets/images/yamaha.svg';
import hondaLogo from '../../../../assets/images/honda.svg';
import corvenLogo from '../../../../assets/images/corven.svg';
import motomelLogo from '../../../../assets/images/motomel.svg';
import gileraLogo from '../../../../assets/images/gilera.svg';
import tvsLogo from '../../../../assets/images/tvs.svg';
import siamLogo from '../../../../assets/images/siam.svg';
import bajajLogo from '../../../../assets/images/bajaj.svg';

const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className="brands">
      <div className="container">
        <h2 className="section-title">Marcas que trabajamos</h2>
        <div className="brands-grid">
          <BrandItem
            imageUrl={yamahaLogo}
            imageAlt="Yamaha" />
          <BrandItem
            imageUrl={hondaLogo}
            imageAlt="Honda" />
          <BrandItem
            imageUrl={corvenLogo}
            imageAlt="Corven" />
          <BrandItem
            imageUrl={motomelLogo}
            imageAlt="Motomel" />
          <BrandItem
            imageUrl={gileraLogo}
            imageAlt="Gilera" />
          <BrandItem
            imageUrl={tvsLogo}
            imageAlt="TVS" />
          <BrandItem
            imageUrl={siamLogo}
            imageAlt="Siam" />
          <BrandItem
            imageUrl={bajajLogo}
            imageAlt="Bajaj" />
        </div>
      </div>
    </section>
  )
};

export default BrandsSection;
