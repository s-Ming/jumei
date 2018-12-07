import React from "react";
import Jfooter from '../../commons/Jfooter.jsx';
class Slist extends React.Component{
	constructor(props) {
	  	super(props);
	  	this.props = props;
	  	this.total:0;
	  	this.state = [
	  		
	  	];

	};
	

	getdata(){
		// 获取本地数据

	}

	//是否包邮
	isFree(){
		if(this.total<39){
			return;
		}
		return (
			<p className="slist_free">
				
			</p>
		)
	}

	render(){
		return(
			<div className="slist">
				<p className="slist_send">
					聚美优品发货
				</p>
				
				<Jfooter history={this.props.history} />
			</div>
			)
	}
}


export default Slist;