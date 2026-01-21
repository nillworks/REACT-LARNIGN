import BookDetails from './BookDetails';
import FeatureBook from './FeatureBook';

const BookRow = ({ title, author, isFeatured }) => {
  return (
    <div>
      <BookDetails title={title} author={author} />
      <FeatureBook isFeatured={isFeatured} />
    </div>
  );
};

export default BookRow;
