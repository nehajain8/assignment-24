import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import PropTypes from 'prop-types';

class Users extends React.Component {
    render(){
        const userList = this.props.userList;
        const listItems = userList.map(user=>{
            return(
                <li>Name:{user.name}-Age-{user.age}</li>
            )
        })
    
        return (     
          <div>
          <h1>UserList</h1>    
          <ul>{listItems}</ul>
          </div>
        );
    }
}
//Defining default props //
Users.defaultProps = {
    userList: [
        {
            name:"Joe",
            age:20
        },
        {
            name:"Mark",
            age:23
        },
        {
            name:"Bela",
            age:23
        },
    ]
}

export default Users;