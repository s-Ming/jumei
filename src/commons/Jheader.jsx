import React from "react";
class Jheader extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.props = props;
	};
	
	render(){
		return(
			<div className="header">
				<i className="fa fa-angle-left" aria-hidden="true"></i>
				<span>{this.props.name}</span>
				<i className="fa fa-home" aria-hidden="true"></i>
			</div>
			)
	}
}


export default Jheader;