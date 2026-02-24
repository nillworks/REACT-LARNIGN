// import { useState } from 'react';

/*

const MovieFrom = () => {
  const [movieData, setMovieData] = useState([{ title: '', ott: '' }]);

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;

    setMovieData({ ...movieData, [key]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(movieData);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center space-y-4 py-8 sm:flex-row">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          placeholder="Enter Movie Name..."
          name="title"
          onChange={handleChange}
          value={movieData?.title}
          className="flex-1 p-2 border outline-none border-gray-700 bg-gray-800 rounded-lg text-white"
        />

        <select
          onChange={handleChange}
          className="text-white outline-none border px-6 py-4 rounded-lg border-gray-200"
          name="ott"
          value={movieData?.ott}
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

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-sm"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default MovieFrom;

*/
