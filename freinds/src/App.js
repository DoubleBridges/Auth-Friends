import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import LogIn from './Components/LogIn';
import PrivateRoute from './Components/PrivateRoute';
import FriendList from './Components/FriendList';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LogIn} />
      <PrivateRoute exact path="/friendlist" component={FriendList} />
    </div>
  );
}

export default App;
