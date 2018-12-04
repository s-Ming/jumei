import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import * as serviceWorker from './serviceWorker';

// import Hsearch from './pages/home/Hsearch.jsx';
// import Hnav from './pages/home/Hnav.jsx';
import Home from './pages/home/Home.jsx';


// import App from "./App.js";
import axios from 'axios';
React.axios = axios;


// import Jheader from './commons/Jheader.jsx';
// import Jfooter from './commons/Jfooter.jsx';

ReactDOM.render(<Home name='首页'/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// <Hsearch name='首页'/>
