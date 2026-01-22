const Search = ({ searchTram, onSearchTram }) => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={searchTram}
          onChange={event => onSearchTram(event.target.value)}
          placeholder="Book Search..."
          className="outline-none shadow-md py-1 px-3 rounded-md w-full mt-1"
        />
      </form>
    </div>
  );
};

export default Search;
