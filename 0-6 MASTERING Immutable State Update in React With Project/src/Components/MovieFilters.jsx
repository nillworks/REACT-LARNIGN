import { useState } from 'react';

const MovieFilters = () => {
  const [movieData, setMovieData] = useState({ title: '', ott: '' });

  const handleChange = e => {
    const value = e.target.value;
    const key = e.target.name;

    setMovieData({ ...movieData, [key]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(movieData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <input
          name="title"
          value={movieData?.title}
          onChange={handleChange}
          className="border outline-none rounded-lg px-3 py-1.5"
          type="text"
          placeholder="Search ..."
        />

        {/* Select Movie Items */}
        <select
          onChange={handleChange}
          value={movieData?.ott}
          className="text-white outline-none border px-6 py-2 rounded-lg border-gray-200 cursor-pointer"
          name="ott"
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

        {/* submit Button */}
        <button
          className=" px-10 py-2 text-lg rounded-lg bg-blue-500 hover:bg-blue-700 cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default MovieFilters;
