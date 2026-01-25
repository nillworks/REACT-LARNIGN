const CarsDetails = ({ cars }) => {
  return (
    <div>
      <h1>{cars.title}</h1>
      <h1>{cars.brand}</h1>
      <h1>{cars.year}</h1>
      <h1>{cars.price}</h1>
      <h1>{cars.isPremium}</h1>
    </div>
  );
};

export default CarsDetails;
