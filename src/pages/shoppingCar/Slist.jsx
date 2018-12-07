import React from "react";
import Jfooter from '../../commons/Jfooter.jsx';
class Slist extends React.Component{
	constructor(props) {
	  	super(props);
	  	this.props = props;
	  	this.total=0;
	  	this.state = {
			list:[
				{
		  			num:1,
		  			price:128,
		  			title:'GM 绵羊油身体乳   260g',
		  			img:'../../imgs/01.jpg',
		  			kg:'260g',
		  			check:false
		  		},
		  		{
		  			num:1,
		  			price:33,
		  			title:'GM 娃哈哈   500g',
		  			img:'../../imgs/02.jpg',
		  			kg:'500g',
		  			check:false
		  		},
		  		{
		  			num:1,
		  			price:66,
		  			title:'GM 飘悠洗发露   300g',
		  			img:'../../imgs/03.jpg',
		  			kg:'300g',
		  			check:false
		  		}
			],
			show:false,
			idx : ''
	  	}
	  		
	  	

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
				<i>免</i>
				已享新用户满39元包邮
			</p>
		)
	}
	
	//编辑设置
	setShow(idx){
		this.setState({
			show:!this.state.show,
			idx:idx
		})
	}
	//增加
	add(idx){
		this.setState({
		//怎么修改数组中的某个值
			//list.idx.num : this.state.list.idx.num
		})
	}
	//减少

	//删除
	remove(){
		
	}

	//编辑模块
	page1(item,idx){
		return (
			<p><span onclick={this.add.bind(this,idx)}>-</span><span>{item.num}</span><span>+</span></p>
			
		)
	}
	page2(item,idx){
		return(
			<p>
				<span>{item.price}</span>
				<div>
					<span onClick={this.remove.bind(this,idx)}>删除</span><span onClick={this.remove.bind(this,idx)}>完成</span>
				</div>
			</p>
		)
		
	}
	


	//商品列表
	goodsList(){
		return(
			<ul className="slist_ul">
				{
					this.state.list.map((item,idx)=>{
						return (
							<li>
								<div className='left'>
									<input type="checkbox" name=""/>
									<img src="" alt=""/>
								</div>
								<div className='right'>
									<p><span>{item.title}</span></p>
									{
										(this.state.show && this.state.idx==idx)? (this.page1(item,idx)) : (<p><span>{item.kg}</span><span>x{item.num}</span></p>)
									}
									{
										(this.state.show && this.state.idx==idx)? (this.page2(item,idx)) : (<p><span>{item.price}</span><span onClick={this.setShow.bind(this,idx)}>编辑</span></p>)
									}
									
									
								</div>
							</li>
						)
					})
				}
				
			</ul>
		)
	}
	render(){
		return(
			<div className="slist">
				<p className="slist_num">商品数量有限,请尽快结算</p>
				<p className="slist_send">
					聚美优品发货
				</p>
				{
					this.goodsList()
				}
				

				{
					this.isFree()
				}
			</div>
			)
	}
}


export default Slist;