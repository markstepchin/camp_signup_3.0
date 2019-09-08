import React from 'react';
import { withAuthorization } from '../components/Session';
import UserList from './UserList';

const DashBoard = () => {
  return (
    <>
      <h1>DashBoard</h1>
      <UserList />
    </>
  );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(DashBoard);
