import React from "react";
import {Link} from "react-router-dom";

class Jheader extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.props = props;
	};
	
	render(){
		return(
			<Link to="/home"><div className="header">
				<i className="fa fa-angle-left" aria-hidden="true"></i>
				<span>{this.props.name}</span>		
				<i className="fa fa-home" aria-hidden="true"></i>		
			</div></Link>
			)
	}
}


export default Jheader;