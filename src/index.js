import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import {HashRouter as Router , Route , Link} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';


import './index.scss';
import * as serviceWorker from './serviceWorker';


// import Hsearch from './pages/home/Hsearch.jsx';
// import Hnav from './pages/home/Hnav.jsx';
import Home from './pages/home/Home.jsx';

// import Jheader from './commons/Jheader.jsx';
// import Jfooter from './commons/Jfooter.jsx';

import App from "./App.js";

import Jheader from './commons/Jheader.jsx';
// import Jfooter from './commons/Jfooter.jsx';
import Jdetails from './commons/Jdetails.jsx';

import axios from 'axios';
React.axios = axios;




const store = createStore((state = {

    title:"聚美优品",
    isShowNav: false,
    isShowNav2:false,
    isShowSearch:false,


}, action) => {
    
    switch (action.type) {
        case 'toggleNav':
            return {
                ...state,
                isShowNav:action.isShowNav
            }
        case 'toggleNav2':
            return {
                ...state,
                isShowNav2:action.isShowNav2
            }
         case 'toggleSearch':
            return {
                ...state,
                isShowSearch:action.isShowSearch
            }
        default:
            return state
    }
})

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App/>
		</Router>
		
	</Provider>, 
	document.getElementById('root')
	);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

