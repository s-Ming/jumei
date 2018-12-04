//详情页详情组件
import React from 'react';

class Jdetails extends React.Component{
	constructor(props) {
	  	super(props);
		this.props = props;
		this.str = `item_id=${this.props.id}&type=${this.props.type}`;
	  	this.state = {
	  		goods:[]
	  	};
	  	console.log(this.str)
	};

	getDynamicData(){//动态数据
		//如何解决跨域问题
		React.axios.get('http://localhost:12345')
		.then((res)=>{
			console.log(res)
		})
		.catch((err)=>{
			console.log(err)
		})
	};
	getStaticData(){//静态数据
		React.axios.get(`http://h5.jumei.com/product/ajaxStaticDetail?${this.str}`)
	}
	render(){
		return(
			<div></div>
			)
	};
	//在生命周期中执行请求函数
	componentDidMount(){
		this.getDynamicData();
	}
}


export default Jdetails;