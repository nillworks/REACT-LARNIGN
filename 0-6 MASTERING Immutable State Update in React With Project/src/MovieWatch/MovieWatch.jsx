import Header from '../Components/Header';
import MovieFilters from '../Components/MovieFilters';
// import MovieFrom from '../Components/MovieFrom';

const MovieWatch = () => {
  return (
    <div className="max-w-[900px] flex flex-col mx-auto py-10 m-3 items-center justify-center bg-slate-900 text-white rounded-lg shadow-lg space-y-8">
      <Header />
      {/* <MovieFrom /> */}
      <MovieFilters />
    </div>
  );
};

export default MovieWatch;
