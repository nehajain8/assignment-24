import React, { Component } from 'react';

function User(props) {
  const listusers = (
    <ul>
      {props.users.map((user) =>
        <li key={user.name}>
          {user.name}-{user.age}
        </li>
      )}
    </ul>
  );
  return (
    <div>
       <h1>{props.title}</h1>
       <ul>{listusers}</ul>
    </div>
  );
}

export default User;
