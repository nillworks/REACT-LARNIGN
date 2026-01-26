const CarsDetails = ({ cars }) => {
  return (
    <div
      className="flex flex-col gap-0.5 shadow-lg border
     border-gray-300 px-2 py-1 rounded-lg"
    >
      <h1 className="text-lg font-semibold">{cars.title}</h1>
      <span>
        <span className="text-gray-800 font-medium">Brand:</span> {cars.brand}
      </span>
      <span>
        <span className="text-gray-800 font-medium">Year:</span> {cars.year}
      </span>
      <span>
        <span className="text-gray-800 font-medium">price: </span>
        {cars.price}
      </span>
      <span>
        <span className="text-gray-800 font-medium">Premium: </span>
        {cars.isPremium ? 'Yes' : 'No'}
      </span>
    </div>
  );
};

export default CarsDetails;
