import React, {Component} from 'react';
import {Route ,Redirect} from "react-router-dom";

import Index from './pages/home/Home.jsx';
import Mine from './pages/mine/Mine.jsx';
import Pintuan from './pages/pintuan/Pintuan.jsx';
import Car from './pages/shoppingCar/ShoppingCar.jsx';

class App extends Component {
    render(){
        return (
          <div className="App">
            <Redirect exact from='/' to='/mine'/>
            <Route path="/home/" component={Index} />
            <Route path="/mine/" component={Mine} />
            <Route path="/pintuan/" component={Pintuan} />
            <Route path="/car/" component={Car} />

          </div>
        );    
    }
}
export default App;