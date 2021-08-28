

import React from 'react';

import { BrowserRouter as Router, Route} from "react-router-dom";

//import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Register from "./components/register.component";
import Login from "./components/login.component";


function App() {
  return (
    <Router>

    
    
    <Route path="/" exact component={ExercisesList} />
    <Route path="/edit/:id"  component={EditExercise} />
    <Route path="/create"  component={CreateExercise} />
    <Route path="/user"  component={CreateUser} />
    <Route path="/register"  component={Register} />
    <Route path="/login"  component={Login} />

    
  </Router>
  );
}

export default App;
