import ShowPremium from './ShowPremium';

const Search = ({ searchTram, setSearchTram, showPremium, onShowPremium }) => {
  return (
    <div className="flex flex-wrap items-center  gap-3 sm:flex-row">
      <form action="#">
        <input
          value={searchTram}
          onChange={event => setSearchTram(event.target.value)}
          className="outline-none shadow w-full py-2 px-4 border rounded-lg border-gray-300"
          type="text"
          placeholder="Search cars ..."
        />
      </form>

      <ShowPremium showPremium={showPremium} onShowPremium={onShowPremium} />
    </div>
  );
};

export default Search;
