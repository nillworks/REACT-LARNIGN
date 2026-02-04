import { Fragment } from 'react';

const UserCard = ({ user }) => {
  return (
    <Fragment>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>{user.age}</p>
      <p>{user.occupation}</p>
    </Fragment>
  );
};

export default UserCard;
