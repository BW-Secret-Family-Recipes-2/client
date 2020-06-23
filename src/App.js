import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'


const token = window.localStorage.getItem('token') //move that to NavBar 
function App() {

  const logout = () => { //Move this function to NavBar 
    if (token) {
      alert('Logging out')
      localStorage.removeItem('token')
    }
  }


  return (
  <div>
      <h2>Secret Family Recipe 2</h2> {/* move this header into NavBar return statement*/}

  {/* Links below */}
    <nav> {/*move this whole nav into NavBar return statement*/}

      <Link to='/'>Home</Link>
      <br></br>
      <Link to='/login'>Login</Link>
      <br></br>
      <Link onClick={logout} to='/'>Logout</Link>
      <br></br>
      <Link to='/registration'>Register</Link>


    </nav>

  {/* Routes below */}
  <Switch>
    <Route path="/login">
      <Login />
    </Route>

    <Route path="/registration">
      <Registration />
    </Route>

    <Route path="/">
        <Home />
    </Route> 

  </Switch>

</div>
  );
}

export default App;
