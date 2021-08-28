

import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

import Register from "./components/register.component";
import Login from "./components/login.component";
import IndexFront from "./components/front_index.component";


function App() {
  return (
    <Router>

    
    
   
    <Route path="/" exact component={IndexFront} />
    <Route path="/register"  component={Register} />
    <Route path="/login"  component={Login} />

    
  </Router>
  );
}

export default App;
