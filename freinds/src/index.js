import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { FriendProvider } from './contexts';

ReactDOM.render(
  <FriendProvider>
    <Router>
      <App />
    </Router>
  </FriendProvider>,
    document.getElementById('root'));
  
  
  
  
  
