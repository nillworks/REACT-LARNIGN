import CarsDetails from './CarsDetails';

const CarsRow = ({ cars }) => {
  return (
    <div className="transition duration-300 hover:-translate-y-2 cursor-pointer">
      <CarsDetails cars={cars} />
    </div>
  );
};

export default CarsRow;
