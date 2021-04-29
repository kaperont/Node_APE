// Import Login Stuff
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import useToken from './components/App/UseToken';
import { Link } from 'react-router-dom';

// Stylesheets
import './components/project-6.css';

// Import Ape
import Ape from './Ape';
import HeaderTop from './components/Divs/Header';

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  else{ 
    const tokenString = localStorage.getItem('token');
    return <Ape />
  }

  /*
  return (

    <div className="wrapper">
      <BrowserRouter>

        <Link to="/ape">
          <button id="home-header">Click Me...</button>
        </Link>

        <a href="/ape">CLICK MEEEEE</a>
        
        <Switch>
          <Route path="/ape">
            <Ape />
          </Route>
        </Switch>

      </BrowserRouter> 
    </div>
  );
  */
 
}

export default App;