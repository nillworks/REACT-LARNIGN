import BookRow from './BookRow';
import PropTypes from 'prop-types';

const BookList = ({ books }) => {
  return (
    <div className="py-1 px-2 space-y-3 mt-1">
      {books.map(book => (
        <BookRow key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};
export default BookList;
