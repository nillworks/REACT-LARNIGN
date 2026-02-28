import { useState } from 'react';
import Header from '../Components/Header';
import MovieFilters from '../Components/MovieFilters';
import MovieFrom from '../Components/MovieFrom';

const MovieWatch = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = ({ title, ott }) => {
    const addNewMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };

    setMovies({ ...movies, addNewMovie });
  };

  console.log(movies);

  return (
    <div className="max-w-[900px] flex flex-col mx-auto py-10 m-3 items-center justify-center bg-slate-900 text-white rounded-lg shadow-lg space-y-8">
      <Header />
      <MovieFrom addMovie={addMovie} />
      <MovieFilters />
    </div>
  );
};

export default MovieWatch;
