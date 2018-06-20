import React, { Component } from 'react';
import User from './user.js';


const users =[
  {
    name:'joe',
    age:'21'
  },
  {
    name:'mark',
    age:'22'
  },
  {
    name:'den',
    age:'22'
  },
  {
    name:'bela',
    age:'23'
  }
];

class UserList extends Component {
  render(){
    return (
      <div>
         <User users={users} title="UserList"/>
      </div>
    );
  }
}

export default UserList;
