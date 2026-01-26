import { useState } from 'react';
import CarsList from './CarsList';
import Header from './header';
import Search from './Search';

// Cars details and info Array of Object
const CARS = [
  {
    id: 1,
    title: 'Luxury Sedan',
    brand: 'Mercedes',
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: 'Family SUV',
    brand: 'Toyota',
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: 'Sports Car',
    brand: 'Porsche',
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: 'Electric Hatchback',
    brand: 'Nissan',
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: 'Luxury SUV',
    brand: 'BMW',
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

const CarsShop = () => {
  const [searchTram, setSearchTram] = useState('');
  console.log(searchTram);

  return (
    <div className="px-3 flex flex-col gap-4 container mx-auto">
      <Header />
      <Search searchTram={searchTram} setSearchTram={setSearchTram} />
      <CarsList cars={CARS} searchTram={searchTram} />
    </div>
  );
};

export default CarsShop;
