import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route exact path="/login" compoenent={Login} />
    </div>
  );
}

export default App;
