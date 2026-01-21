import BookRow from './BookRow';
import PropTypes from 'prop-types';

const BookList = ({ Book }) => {
  return (
    <div>
      {Book.map(book => (
        <BookRow
          key={book.id}
          title={book.title}
          author={book.author}
          isFeatured={book.isFeatured}
        />
      ))}
    </div>
  );
};

BookList.propTypes = {
  Book: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

export default BookList;
