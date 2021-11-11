import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriendForm from './components/AddFriendForm';

function App() {

  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
    <div className="App">
      <h2>FRIENDS</h2>
      <Link to='/friends/add-new'> Add Friend </Link>
      <Link to='/friends'> Back to Friends </Link>

      <li>
        <Link to='/login'>Login</Link>
      </li>
    
      <Switch>
        <PrivateRoute exact path='/friends/add-new' component={AddFriendForm} />
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <Route path='/login' component={Login} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
