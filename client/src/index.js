import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Router} from 'react-router-dom';
import BrowserHistory from './utils/history';
import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk'
const reduxStore = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={reduxStore}>
    <Router history={BrowserHistory}>
        <App />
    </Router></Provider>
    , document.getElementById('root'));
