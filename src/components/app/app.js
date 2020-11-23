import React, {useState} from 'react';

import Login from "../login/login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "../dashboard/dashboard";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const onLogin = ()=>{
        setIsLoggedIn(true)
    }

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/"
                   exact
                   render={() => {
                       return <Login isLoggedIn={isLoggedIn} onLogin={onLogin}/>
                   }}/>
            <Route path="/dashboard"
                   render={() => {
                       return <Dashboard isLoggedIn={isLoggedIn}/>
                   }}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
