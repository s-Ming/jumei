//详情页详情组件
import React from 'react';
import Jheader from './Jheader.jsx';

class Jdetails extends React.Component{
	constructor(props) {
	  	super(props);
		this.props = props;
	  	this.state = {
	  		goods:{},
	  		dy:{},
	  		cuxiao:false,
	  		shuoming:false

	  	};
	};

	getDynamicData(){//动态数据
		//如何解决跨域问题
		React.axios.get('./data/jdetailsSt.json')
		.then((res)=>{
			this.setState({
				goods : res.data.data
			})
			
		})
		.catch((err)=>{
			console.log(err)
		})
	};
	getStaticData(){//静态数据
		React.axios.get('./data/jdetailsDy.json')
		.then((res)=>{
			this.setState({
				dy : res.data.data
			})
			console.log(this.state)
		})
		.catch((err)=>{
			console.log(err)
		})
	}

	//在生命周期中执行请求函数
	componentDidMount(){
		this.getDynamicData();
		this.getStaticData();
	}
	//判读屏幕大小
	

	//判读是否已请求到数据
	// function istrue(){
	// 	if(JSON.stringify(this.state.goods)!='{}'&&JSON.stringify(this.state.dy)!='{}'){
	// 		return ('HTML结构')
	// 	}
	// }

	//促销组件
	cuxiao(data){
		return (
			<div className="Jdeta_c">
				<div className="Jdeta_cu">
					<div className="Jdeta_cuxiao">
						<span>促销</span>
						<span>本商品可享受以下优惠</span>
						<i className="fa fa-angle-up" aria-hidden="true" onClick={this.chang.bind(this,'cuxiao')}></i>
					</div>
					<p className="Jdeta_man1">
						<span>满减</span>
						巴黎欧莱雅满209减30
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</p>
					<p className="Jdeta_man2">18年12月1日0点到12月8日23点59分59秒期间内，购买巴黎欧莱雅满209减30</p>
				</div>
				<div className="Jdeta_cu">
					<p className="Jdeta_man1">
						<span>满减</span>
						巴黎欧莱雅满209赠222
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</p>
					<p className="Jdeta_man2">18年12月1日0点到12月8日23点59分59秒期间内，购买巴黎欧莱雅满209减30</p>
				</div>
			</div>
		)
	};
	cuxiao2(){
		return (
			<div className="Jdeta_c">
				<div className="Jdeta_cu">
					<div className="Jdeta_cuxiao">
						<span>促销</span>
						<div>
							<p>
								<span>满减</span>
								巴黎欧莱雅满209减30
							</p>
							<p>
								<span>满减</span>
								巴黎欧莱雅满209赠222
							</p>
						</div>
						<i className="fa fa-angle-down" aria-hidden="true" onClick={this.chang.bind(this,'cuxiao')}></i>
					</div>
				</div>
			</div>
		)
	}

	//运费
	yunfei(){
		return (
			<div className="Jdeta_c">
				<div className="Jdeta_cu">
					<div className="Jdeta_cuxiao">
						<span>运费</span>
						<span>本商品满299元或2件包邮（新疆部分区域除外）</span>
						<i className="fa fa-angle-down" aria-hidden="true" ></i>
					</div>
				</div>
			</div>
		)
	}

	//评论组件
	pinglun(){
		return (
			<li className="Jdeta_pinglun">
				<div className="Jdeta_top">
					<img src="" alt="" className="Jdeta_top_l"/>
					<div className="Jdeta_top_r">
						<p>没数据</p>
						<p>没数据</p>
					</div>
				</div>
			</li>
		)
	}

	//加入购物车
	car(){
		return(
			<div className="Jdeta_button">
				<div className="Jdeta_button_d1" onClick={this.goPage.bind(this,'d1')}>
					<i className="fa fa-shopping-cart" aria-hidden="true"></i>
					购物车
				</div>
				<button className="Jdeta_button_d2" onClick={this.goPage.bind(this,'d2')}>加入购物车</button>
				<button className="Jdeta_button_d3" onClick={this.goPage.bind(this,'d3')}>立即购买</button>
			</div>
		)
	}


	//改变显示隐藏状态
	chang(data){
		if(data == 'cuxiao'){
			this.setState({
				cuxiao:!this.state.cuxiao
			})
		}
	}

	//点击跳转到相应页面
	goPage(go){
		if(go == 'd1'){
			//跳转到购物车页
			

		}else if(go == 'd2'){
			//加入购物车
		}else if(go == 'd3'){
			//根据登录状态跳转到相应页面
		}
	}



	render(){
		
		return(
			
			<div>

				<Jheader name={this.state.goods.short_name}></Jheader>
				{JSON.stringify(this.state.goods)!='{}'&&JSON.stringify(this.state.dy)!='{}' ? (
					<div className="Jdeta">
						<div className="Jdeta_img">
							<img src={this.state.goods.tag} alt="" className='Jdeta_i1'/>
							<img src={this.state.goods.image_url_set.single_many[0]["480"]} alt="" className='Jdeta_i2'/>
						</div>
						<div className="Jdeta_price">
							<span>￥{this.state.dy.result.size[0].jumei_price}</span>
							<del>￥{this.state.dy.result.size[0].market_price_zg}</del>
							<span>{this.state.dy.result.buyer_number_text}</span>
						</div>
						<p className='Jdeta_name'>
							<span>{this.state.goods.special_tags.jm_owner}</span>{this.state.goods.name}
						</p>
						
						{
							this.state.cuxiao ? this.cuxiao() : this.cuxiao2()
						}
						{
							this.yunfei()
						}
						<p className="conment_title">买过的人这样说</p>
						<ul className="Jdeta_ping">
							{
								this.pinglun()
							}
						</ul>
						{
							this.car()
						}
						

					</div>
				) : 'loading'}
				
				
				
			</div>
			
			
		)
	};
	
}

export default Jdetails;