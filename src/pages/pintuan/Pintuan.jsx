import React from "react";
import Jfooter from '../../commons/Jfooter.jsx';
class Pintuan extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.props = props;
	};
	
	render(){
		return(
			<div className="pintuan">
				wo men pintuan ba  
				<Jfooter history={this.props.history} />
			</div>
			)
	}
}


export default Pintuan;