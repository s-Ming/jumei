import React from "react";
import Jfooter from '../../commons/Jfooter.jsx';
import Slist from './Slist.jsx';
import Jheader from '../../commons/Jheader.jsx';
class Car extends React.Component{
	constructor(props) {
	  super(props);
	  this.props = props;
	  this.state = [

	  ];

	};
	

	getdata(){
		// 获取本地数据

	}
	render(){
		return(
			<div className="car">
				<Jheader name='购物车'/>
				<Slist />
				
				<Jfooter history={this.props.history} />

			</div>
			)
	}
}


export default Car;