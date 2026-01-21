import { Star } from 'lucide-react';
const FeatureBook = ({ isFeatured }) => {
  return (
    <div>
      <span>{isFeatured}</span>
      <span>
        <Star />
      </span>
    </div>
  );
};

export default FeatureBook;
