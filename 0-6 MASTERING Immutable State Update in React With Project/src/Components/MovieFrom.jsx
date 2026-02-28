import { useState } from 'react';

const MovieFrom = ({ addMovie }) => {
  // change State Crete
  const [movieData, setMovieData] = useState({ title: '', ott: '' });

  // Render State SetMovie Data
  const handleChange = e => {
    const value = e.target.value;
    const key = e.target.name;

    setMovieData({ ...movieData, [key]: value });
  };

  // Submit Not Render
  const handleSubmit = e => {
    e.preventDefault();

    if (!movieData?.title.trim() || !movieData?.ott.trim()) return;
    addMovie(movieData);

    setMovieData({ ...movieData, title: '', ott: '' });
    console.log(movieData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center sm:flex-row"
      >
        {/* Input Field */}
        <input
          onChange={handleChange}
          value={movieData?.title}
          type="text"
          name="title"
          placeholder="Search"
          className="outline-none border px-3 py-2 rounded-lg border-gray-300"
        />

        {/* Select Fields */}
        <select
          value={movieData?.ott}
          onChange={handleChange}
          name="ott"
          className="border border-gray-300 px-3 py-2 rounded-lg"
        >
          <option className="text-black" value="">
            Select an OTT
          </option>
          <option className="text-black" value="Netfilx">
            Netfilx
          </option>
          <option className="text-black" value="Amazon Prime">
            Amazon Prime
          </option>
          <option className="text-black" value="Hotstar">
            Hotstar
          </option>
          <option className="text-black" value="SonyLIV">
            SonyLIV
          </option>
          <option className="text-black" value="Hoichoi">
            Hoichoi
          </option>
          <option className="text-black" value="Others">
            Others
          </option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white
           px-8 py-2 rounded-lg transition duration-300
          hover:bg-blue-700 cursor-pointer"
        >
          Add
        </button>

        {/*  */}
      </form>
    </div>
  );
};

export default MovieFrom;
