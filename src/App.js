import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyHome from './Components/myhome';
import UserQuestion from './Components/userquestion';
import Search from './Components/search';

function App(){

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MyHome} />
        <Route exact path="/:title" component = { UserQuestion } />
        <Route exact path="/search/:search" component = { Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;