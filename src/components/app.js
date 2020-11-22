import React, {useState} from 'react';

import Login from "./Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
