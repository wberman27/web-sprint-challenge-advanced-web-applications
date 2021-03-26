import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import "./styles.scss";
//Components
import PrivateRoute from './components/PrivateRoute'
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/BubblePage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute