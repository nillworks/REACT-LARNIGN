import { Star } from 'lucide-react';
const FeatureBook = ({ isFeatured, onfutureBook, id }) => {
  return (
    <div>
      <button onClick={() => onfutureBook(id)}>
        <Star color={isFeatured ? 'Green' : 'black'} />
      </button>
    </div>
  );
};

export default FeatureBook;
