import BookRow from './BookRow';
import PropTypes from 'prop-types';

const BookList = ({ books, searchTram }) => {
  const row = [];
  books.forEach(book => {
    if (book.title.toLowerCase().indexOf(searchTram.toLowerCase()) === -1)
      return;
    row.push(<BookRow key={book.id} title={book.title} author={book.author} />);
  });
  return <div className="space-y-4 mt-5">{row}</div>;
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
