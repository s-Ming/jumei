import React from "react";
class Jfooter extends React.Component{
	constructor(props) {
	  	super(props);
	  	this.props = props;
	  	this.state = {
	  	nav: 0,
	  	navlist:[
		  	{
		  		name:'首页',
		  		path:'home',
		  		className:'fa fa-home'
		  	},
		  	{
		  		name:'拼团',
		  		path:'pintuan',
		  		className:'fa fa-users'
		  	},
		  	{
		  		name:'购物车',
		  		path:'shoppingCar',
		  		className:'fa fa-shopping-cart'
		  	},
		  	{
		  		name:'我的',
		  		path:'mine',
		  		className:'fa fa-user-o'
		  	}
		  ]
		};
	  	this.props = props;
	};
	navigateTo(idx,e){
		this.setState({
			nav: idx
		})
		//this.props.history.push(this.state.navlist[idx].path)
	}
	render(){
		return(
			<div className="footer">
				{this.state.navlist.map((item,idx)=>{
					return <div key={idx}
					onClick={this.navigateTo.bind(this, idx)}
					className={
					idx === this.state.nav ? "item_li footer_div" : "footer_div"
				}
					>
						<i className={item.className}></i>
						{item.name}
						</div>
					})
				}
				
			</div>
			)
	}
}


export default Jfooter;