import React, {Component} from 'react';
import {Route} from "react-router-dom";

import Index from './pages/Home.jsx';
// import Mine from "./pages/mine/Mine.jsx";

class App extends Component {
    render(){
        retrun (
          <div className="App">
            {/* <Redirect exact from='/' to='/home/hot/'/> */}
            <Route path="/home/" component={Index} />
            <Route path="/detail/" component={Detail} />
          </div>
        );    
    }
}