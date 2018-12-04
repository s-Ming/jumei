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
		React.axios.get('./data/hslider.json')
		.then((res)=>{
			this.setState({
				goods : res.data
			})
			console.log(this.state.goods)
		})
		.catch((err)=>{
			console.log(err)
		})
	};
	getStaticData(){//静态数据
		React.axios.get(`http://h5.jumei.com/product/ajaxStaticDetail?${this.str}`)
	}

	//在生命周期中执行请求函数
	componentDidMount(){
		this.getDynamicData();
	}

	render(){
		return(
			<div>
				
			</div>
			)
	};
	
}


export default Jdetails;