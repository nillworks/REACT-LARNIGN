import { useState } from 'react';

const UserList = () => {
  const [users, setUser] = useState([
    { id: crypto.randomUUID(), name: 'Shipon Roy', address: 'Dhaka' },
  ]);

  const changeUsers = () => {
    setUser(provide =>
      provide.map(user =>
        user.id === provide[0].id ? { ...user, name: 'nill' } : user,
      ),
    );
  };

  const addUser = () => {
    const newUser = {
      id: crypto.randomUUID(),
      name: 'jack',
      address: 'Titanic',
    };
    setUser(prev => [...prev, newUser]);
  };

  console.log(users);

  const res = users.map(user => (
    <li className="flex flex-col gap-4 text-center text-2xl" key={user.id}>
      {user.name} <span>{user.address}</span>
    </li>
  ));

  return (
    <div className="flex flex-col gap-4">
      <ul>{res}</ul>

      <span>{res.id}</span>

      {/* Changes Users */}
      <button
        className="bg-violet-600 py-3 px-6 rounded-lg font-semibold text-white max-w-max mx-auto text-lg"
        onClick={changeUsers}
      >
        changes
      </button>

      {/* add user  */}
      <button
        onClick={addUser}
        className="bg-green-500 py-3 px-6 rounded-lg font-semibold text-white max-w-max mx-auto text-lg "
      >
        add Users
      </button>
    </div>
  );
};

export default UserList;
