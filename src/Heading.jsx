import React from "react";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import { HashRouter, Route, Link ,Switch} from 'react-router-dom'

function Heading() {
  return (
    <header>
      <HashRouter> 
        <ul >
          <h1 className="nav">To do list</h1>
          <li className="nav"><Link to='/home'>Home</Link></li>
          <li className="nav"><Link to='/login'>Log In</Link></li>
        </ul>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </HashRouter>
    </header>
  );
  }
  
  export default Heading;