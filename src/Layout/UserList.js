import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { withFirebase } from '../components/Firebase';

const UserList = ({ firebase }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    firebase.readUsers().on('value', snapshot => {
      setUsers(snapshot.val());
    });

    return () => firebase.readUsers().off();
  }, []);

  // filtering out deleted users
  const filteredUsers = users && Object.keys(users).filter(key => !users[key].deleted);

  return (
    <>
      {filteredUsers && filteredUsers.length > 0 ? (
        filteredUsers.map(key => {
          const user = users[key];

          return <UserCard user={user} key={key} id={key} firebase={firebase} />;
        })
      ) : (
        <i style={{ color: '#5a5a5a', fontWeight: '300' }}>no registrations yet...</i>
      )}
    </>
  );
};

const UserCard = ({ user, id, firebase }) => (
  <div className="card">
    <div className="card-name">
      {user.firstName} {user.lastName}
    </div>
    <div className="card-email">{user.email}</div>
    <div>
      {formatDate(user.startDate)} - {formatDate(user.endDate)}
    </div>
    {user.payed ? (
      <div className="payed">
        <i className="far fa-check-circle payment-icon" /> payed
      </div>
    ) : (
      <div className="no-payed">
        <i className="far fa-times-circle payment-icon" /> didn't pay
      </div>
    )}
    <i className="card-registered-time">{moment(user.time).format('H:mm:ss, D/M')}</i>
    <i className="card-registered-time">
      {user.timePayed && <span>payed at: {moment(user.timePayed).format('H:mm:ss, D/M')}</span>}
    </i>
    <button className="delete-btn" onClick={() => deleteUser(user, id, firebase)} type="button">
      <i className="fas fa-trash" />
    </button>
    {!user.payed && (
      <button
        className="user-payed-btn"
        onClick={() => userPayed(user, id, firebase)}
        type="button"
      >
        <i className="fas fa-money-bill-wave" />
      </button>
    )}
  </div>
);

const deleteUser = (user, id, firebase) => {
  const confirm = window.confirm(
    `Are you sure that you want to remove ${user.firstName} ${user.lastName}?`
  );

  if (confirm) {
    firebase.deleteUser(id);
  }
};

const userPayed = (user, id, firebase) => {
  const confirm = window.confirm(`${user.firstName} ${user.lastName} payed?`);

  if (confirm) {
    firebase.userPayed(id);
  }
};

const formatDate = date => moment(date).format('MMM D');

export default withFirebase(UserList);
