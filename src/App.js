import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import './App.css';

import Home from './components/Home'
import Login from './components/Login'




function App() {

  


  return (
  <div>
      Secret Family Recipe 2

      This is the site!

  {/* Links below */}
    <nav>

      <Link to='/'>Home</Link>
      <br></br>
      <Link to='/login'>Login</Link>

    </nav>

  {/* Routes below */}

  <Switch>
    <Route path="/login">
      <Login />
    </Route>

    <Route path="/">
        <Home />
    </Route>

  </Switch>

</div>
  );
}

export default App;
