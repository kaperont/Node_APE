// Import Login Stuff
import React, { useState } from 'react';
import Login from './components/Login/Login';
import useToken from './components/App/UseToken';

// Stylesheets
import './components/project-6.css';

// Import Ape
import Ape from './Ape';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  else{ 
    const tokenString = sessionStorage.getItem('token');
    return <Ape />
  }

}

export default App;