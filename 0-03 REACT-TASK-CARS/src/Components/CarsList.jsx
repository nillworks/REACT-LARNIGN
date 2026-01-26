import PropTypes from 'prop-types';
import CarsRow from './CarsRow';

const CarsList = ({ cars }) => {
  const row = [];
  cars.forEach(car => {
    row.push(<CarsRow key={car.id} cars={car} />);
  });
  return (
    <div
      className="flex flex-col gap-4 sm:grid sm:grid-cols-2 
    lg:grid-cols-3 2xl:grid-cols-4"
    >
      {row}
    </div>
  );
};

CarsList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};
export default CarsList;
