import React from 'react';
import userDetails from './userDetails';
import signup from './signup';
import Loging from './loging';
import App from './App';
import {Route} from 'react-router';

const routes = (
    <Route path="/" component={App}>
        <Loging component={userDetails}/>
        <Route path="signup" component={signup}/>
    </Route>
);
export default routes;