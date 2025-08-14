import './BrandItem.css'

interface BrandItemProp {
  imageUrl: string;
  imageAlt: string;
}

const BrandItem: React.FC<BrandItemProp> = ({ imageUrl, imageAlt }) => {
  return (
    <div className="brand-item">
      <img src={imageUrl} alt={imageAlt} />
    </div>
  )
};

export default BrandItem;
