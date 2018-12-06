import React from "react";
import Jfooter from '../../commons/Jfooter.jsx';
class Car extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.props = props;
	};
	

	goPage(){
		this.props.history.push('xiangqing')
	}
	render(){
		return(
			<div className="car">
				ni hao a 
				<p onClick={this.goPage.bind(this)}>123456</p>
				<Jfooter history={this.props.history} />
			</div>
			)
	}
}


export default Car;