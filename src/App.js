import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import './App.css';

import Home from './components/Home'
import Login from './components/Login'


const exampleUser = {
  id: uuid(),
  username:'Harper',
  password:'abc123',
}

const initialInfoValues = {
  id: uuid(),
  username: '',
  password: '',
}


function App() {

  const [ user, setUser] = useState(initialInfoValues)
  


  const onChange = evt => {

    setUser(evt.target)
    

  }

  const onSubmit = evt => {
    
  }


  return (
<div>
      Secret Family Recipe 2

      THis is the site!

  {/* Links below */}
    <nav>

      <Link to='/'>Home</Link>

      <Link to='/login'>Login</Link>

    </nav>

  {/* Routes below */}

  <Switch>
    <Route>
      <Login 
      onChange={onChange}
      onSubmit={onSubmit}
      />
    </Route>

    <Route>
        <Home />
    </Route>

  </Switch>

</div>
  );
}

export default App;
