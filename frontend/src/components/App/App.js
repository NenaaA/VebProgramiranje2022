import './App.css';
import {Route, Router} from "react-router-dom";
import HomePage from "../home/home";
import React from "react";
import Login from "../logout/logout";

const App = () => {
    return (
        <Router history>
            <Route exact path={"/login"} component={<Login/>}/>
            <Route exact path={"/home"} component={HomePage}/>
            <Route exact path={"/daily-tasks"}/>
            <Route exact path={"/register"}/>
            <Route exact path={"/task-form"}/>
        </Router>
    );
}

export default App;
