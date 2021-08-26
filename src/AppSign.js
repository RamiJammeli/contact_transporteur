import logo from './logo.svg';

import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

//import Navbar from "./components/navbar.component"

import Register from "./components/register.component";


function App() {
  return (
    <Router>

    <Header />
    <br/>
    <Route path="/" exact component={Register} />
   
    <Footer/>
  </Router>
  );
}

export default App;
