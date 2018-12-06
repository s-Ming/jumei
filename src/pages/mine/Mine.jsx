import React from "react";
import Jfooter from '../../commons/Jfooter.jsx';
class Mine extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	  this.props = props;
	};
	
	render(){
		return(
			<div className="mine">
				wo men Mine ba 
				<Jfooter history={this.props.history} />
			</div>
			)
	}
}


export default Mine;