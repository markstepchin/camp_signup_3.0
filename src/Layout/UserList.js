import React, { useState, useEffect } from 'react';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';
import { withFirebase } from '../components/Firebase';

const sortBy = {
  latest: (key1, key2, users) => users[key2].time - users[key1].time,
  oldest: (key1, key2, users) => users[key1].time - users[key2].time,
};

const UserList = ({ firebase }) => {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('latest');

  useEffect(() => {
    firebase.readUsers().on('value', snapshot => {
      setUsers(snapshot.val());
    });

    return () => firebase.readUsers().off();
  }, []);

  const filteredUsers =
    users &&
    Object.keys(users)
      // only non-deleted users
      .filter(key => !users[key].deleted)
      // only users that match the search
      .filter(key =>
        `${users[key].firstName} ${users[key].lastName}`
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim())
      )
      .sort((key1, key2) => sortBy[sort](key1, key2, users));

  return (
    <>
      <ListHeader
        search={search}
        setSearch={setSearch}
        numRegistered={filteredUsers ? filteredUsers.length : 0}
      />
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

const ListHeader = ({ search, setSearch, numRegistered }) => {
  return (
    <div className="filter-container">
      <TextField
        name="search"
        label="Search"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="total-registered-container">
        <span className="total-registered-label">total</span>
        <span className="total-registered">{numRegistered}</span>
      </div>
    </div>
  );
};

const UserCard = ({ user, id, firebase }) => (
  <div className="card">
    <div className="card-name">
      {user.firstName} {user.lastName}
    </div>
    <div className="card-email">{user.email}</div>
    <div style={{ margin: 0 }}>City: {user.city}</div>
    <div style={{ marginBottom: '1rem' }}>Church Member: {user.churchMember}</div>
    <div>
      {formatDate(user.startDate)} - {formatDate(user.endDate)}
    </div>
    {/* {user.payed ? (
      <div className="payed">
        <i className="far fa-check-circle payment-icon" /> payed
      </div>
    ) : (
      <div className="no-payed">
        <i className="far fa-times-circle payment-icon" /> didn't pay
      </div>
    )} */}
    <i className="card-registered-time">{moment(user.time).format('H:mm:ss, D/M')}</i>
    <i className="card-registered-time">
      {user.timePayed && <span>payed at: {moment(user.timePayed).format('H:mm:ss, D/M')}</span>}
    </i>
    <button className="delete-btn" onClick={() => deleteUser(user, id, firebase)} type="button">
      <i className="fas fa-trash" />
    </button>
    {/* {!user.payed && (
      <button
        className="user-payed-btn"
        onClick={() => userPayed(user, id, firebase)}
        type="button"
      >
        <i className="fas fa-money-check-alt" />
      </button>
    )} */}
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
