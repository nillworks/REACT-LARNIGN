import CarsDetails from './CarsDetails';

const CarsRow = ({ cars }) => {
  return (
    <div>
      <CarsDetails cars={cars} />
    </div>
  );
};

export default CarsRow;
