import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const logger = (store) => (next) => (action) => {
    console.log("previous state", store.getState())
    console.log("Action", action)
    next(action)
    console.log("New state", store.getState())
}

const store = createStore (
    reducer, compose(applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, ),
)

ReactDOM.render(<Provider store={store}>
                     <BrowserRouter>
                         <App />,
                     </BrowserRouter> 
                </Provider>,
                 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
