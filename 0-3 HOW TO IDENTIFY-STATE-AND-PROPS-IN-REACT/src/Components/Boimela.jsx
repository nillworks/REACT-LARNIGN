import BookList from './BookList';
import Header from './Header';
import Search from './Search';
import { useState } from 'react';

const BOOk = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    isFeatured: true,
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    isFeatured: true,
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    isFeatured: false,
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    isFeatured: false,
  },
];

const Boimela = () => {
  const [searchTram, setSearchTram] = useState('');

  return (
    <div className="px-2 py-2">
      <Header />
      <Search searchTram={searchTram} onSearchTram={setSearchTram} />
      <BookList books={BOOk} searchTram={searchTram} />
    </div>
  );
};

export default Boimela;
