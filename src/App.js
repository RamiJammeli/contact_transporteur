

import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";




import CreateDelivery from "./components/create-delivery.component";
import Getdeliveries from "./components/front-getalldeliveries.component";
import EditDelivery from"./components/front-editdelivery.component";

import Register from "./components/register.component";
import Login from "./components/login.component";
import IndexFront from "./components/front_index.component";
import FrontAbout from "./components/front-aboutus.component";
import BackUsers from "./components/back-users.component";
import BackUserDetail from "./components/bac-users-client-detail.component";






function App() {
  return (
    <Router>

    <Route path="/" exact component={IndexFront} />

 
    <Route path="/createDelivery"  component={CreateDelivery} />
    <Route path="/MyDeliveries"  component={Getdeliveries} />
    <Route path="/EditMyDelivery/:id" component={EditDelivery} />
    <Route path="/About"  component={FrontAbout} />
    

    <Route path="/register"  component={Register} />
    <Route path="/login"  component={Login} />
    <Route path="/BackUsers" component={BackUsers} />
    <Route path="/backudetail/:username" component={BackUserDetail} />

  </Router>
  );
}

export default App;
