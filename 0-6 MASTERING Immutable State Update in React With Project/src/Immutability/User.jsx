import { useState } from 'react';

const Users = [{ id: crypto.randomUUID(), name: 'Alx', address: 'bangladesh' }];

const User = () => {
  const [users, setUsers] = useState(Users);

  function UpdateName(id, name, address) {
    const updateUser = users.map(user =>
      user.id === id ? { ...user, name: name, address: address } : user,
    );
    setUsers(updateUser);
  }

  // Add users
  function addUsers() {
    // New  User
    const newUser = {
      id: crypto.randomUUID(),
      name: 'Nill Works',
      Address: 'UK',
    };

    setUsers([...users, newUser]);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <ul>
        {users.map(user => (
          <li className="text-center space-y-4" key={user.id}>
            <span className="text-2xl font-semibold">{user.name}</span>
            <p className="uppercase text-lg">{user.address}</p>
            <button
              onClick={() =>
                UpdateName(user.id, 'Shipon Roy', 'Dhaka Bangladesh')
              }
              className="border bg-green-300 rounded-lg border-gray-400 py-3 px-3"
            >
              Changes
            </button>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={addUsers}
        className="bg-amber-600 rounded-2xl my-2 cursor-pointer px-8 py-3 text-white font-semibold"
      >
        Add
      </button>
    </div>
  );
};

export default User;
