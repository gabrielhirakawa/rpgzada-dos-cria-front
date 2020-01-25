import React from "react";
import { HashRouter, Switch } from "react-router-dom";
import Route from './Route';

import Login from "../pages/Login";
import Ficha from "../pages/Ficha";
import Home from '../pages/Home';

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} isPrivate />
        <Route path="/newficha" component={Ficha} isPrivate />
        
      </Switch>
    </HashRouter>
  );
}
