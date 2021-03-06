// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import { createHashHistory } from 'history';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Profil from './components/Profil';
import Parameter from './components/Parameter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const history = createHashHistory();

if(localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        store.dispatch(logoutUser(history));
        window.location.href = '/login'
    }
}

class App extends Component {
    render() {
        return (
            <Provider store = { store }>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={ Home } />
                        <div className="container">
                            <Route exact path="/register" component={ Register } />
                            <Route exact path="/login" component={ Login } />
                            <Route exact path="/profil" component={ Parameter } />
                            <Route exact path={`/profil/:id`} component={ Profil }/>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;