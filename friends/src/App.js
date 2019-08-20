import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute';
import New from './components/NewFriendsForm'

import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/new">Add Friend</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
        <PrivateRoute exact path="/new" component={New} />
      </div>
    </Router>
  );
}

export default App;