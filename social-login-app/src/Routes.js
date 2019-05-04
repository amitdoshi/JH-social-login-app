import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/404/NotFound';
import Login from './components/Login/Login'

const Routes = () => (
    <BrowserRouter >
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;