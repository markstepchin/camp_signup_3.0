import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { withFirebase } from '../components/Firebase';

const UserList = ({ firebase }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.readUsers().on('value', snapshot => {
      setUsers(snapshot.val());
    });

    return () => firebase.readUsers().off();
  }, []);

  return (
    <>
      {Object.keys(users).map(key => {
        const user = users[key];

        return <UserCard user={user} key={key} />;
      })}
    </>
  );
};

const UserCard = ({ user }) => (
  <div className="card">
    <div className="card-name">
      {user.firstName} {user.lastName}
    </div>
    <div className="card-email">{user.email}</div>
    <div>
      {formatDate(user.startDate)} - {formatDate(user.endDate)}
    </div>
    <i className="card-registered-time">{moment(user.date).format('h:m:s, D/M/YYYY')}</i>
  </div>
);

const formatDate = date => moment(date).format('MMM D');

export default withFirebase(UserList);
