import { Fragment } from 'react';
import UserCard from './UserCard';

const users = [
  {
    id: 1,
    firstName: 'Rahim',
    lastName: 'Uddin',
    age: 22,
    occupation: 'Student',
  },
  {
    id: 2,
    firstName: 'Karim',
    lastName: 'Hasan',
    age: 28,
    occupation: 'Developer',
  },
  {
    id: 3,
    firstName: 'Sumaiya',
    lastName: 'Akter',
    age: 24,
    occupation: 'Designer',
  },
  {
    id: 4,
    firstName: 'Shahin',
    lastName: 'Ahmed',
    age: 30,
    occupation: 'Manager',
  },
  {
    id: 5,
    firstName: 'Nusrat',
    lastName: 'Jahan',
    age: 26,
    occupation: 'Content Writer',
  },
];

const TopHome = () => {
  const items = [];

  users.forEach(item => {
    items.push(<UserCard key={item.id} user={item} />);
  });

  return <Fragment>{items}</Fragment>;
};

export default TopHome;
