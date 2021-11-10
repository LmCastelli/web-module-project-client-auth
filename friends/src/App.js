import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';


// const Login = ()=> {
//   return (<h2>Login</h2>)
// }


function App() {

  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
    <div className="App">
      <h2>Client Auth Project</h2>

      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        {isLoggedIn && <Link to='/protected'> Protected Page </Link>}
      </li>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendsList} />
        <Route path='/login' component={Login} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
