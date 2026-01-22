import BookDetails from './BookDetails';
import FeatureBook from './FeatureBook';
import PropTypes from 'prop-types';

const BookRow = ({ title, author }) => {
  return (
    <div
      className="flex items-center justify-between py-2
     shadow-lg border border-gray-500/50 px-1 rounded-sm transition duration-300 hover:-translate-y-1"
    >
      <BookDetails title={title} author={author} />
      <FeatureBook />
    </div>
  );
};

BookRow.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookRow;
