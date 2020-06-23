import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute'


function App() {


  return (
    <div>
      {/* Links below (moved into NavBar)*/}
      <NavBar />

      {/* Routes below */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/registration">
          <Registration />
        </Route>

        <PrivateRoute path="/"> {/* Need to be PrivateRoute once Login&Registration is authorized*/}
          <Home />
        </PrivateRoute>

      </Switch>

    </div>
  );
}

export default App;
