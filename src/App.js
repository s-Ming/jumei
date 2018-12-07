import React, {Component} from 'react';
import {Route ,Redirect} from "react-router-dom";

import Index from './pages/home/Home.jsx';
import Mine from './pages/mine/Mine.jsx';
import Pintuan from './pages/pintuan/Pintuan.jsx';
import Car from './pages/shoppingCar/ShoppingCar.jsx';
import Jfooter from './commons/Jfooter.jsx';

//详情
import Xiangqing from './commons/Jdetails.jsx'
//注册
import Mregister from "./pages/mine/Mregister.jsx";
//登录
import Mlogin from "./pages/mine/Mlogin.jsx";


class App extends Component {
	constructor(props) {
	  	super(props);
		this.props = props;
	  	this.state = {};
	}
    render(){
        return (
          <div className="App">

            <Redirect exact from='/' to='/mine'/>
            <Route path="/home" component={Index} />
            <Route path="/mine" component={Mine} />
            <Route path="/pintuan" component={Pintuan} />
            <Route path="/car" component={Car} />
            <Route path="/xiangqing" component={Xiangqing} />
            <Route path="/mregister" component={Mregister} />
            <Route path="/mlogin" component={Mlogin} />
        
            

          </div>
        );    
    }
}
export default App;