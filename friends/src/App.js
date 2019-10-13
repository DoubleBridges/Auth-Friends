import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import LogIn from './Components/LogIn';
import PrivateRoute from './Components/PrivateRoute';
import FriendList from './Components/FriendList';
import AddFriendForm from './Components/AddFriendForm';
import EditFriendForm from './Components/EditFriendForm';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/' component={LogIn} />
      <PrivateRoute exact path="/friendlist" component={FriendList} />
      <PrivateRoute exact path="/addfriend" component={AddFriendForm} />
      <PrivateRoute exact path="/editfriend" component={EditFriendForm} />
    </div>
  );
}

export default App;
