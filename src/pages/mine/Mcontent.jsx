import React from "react";
import {connect} from 'react-redux';
import Mheadcontent from "./Mheadcontent.jsx";


class Mcontent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
        this.state = {
           
        }
    }


       render(){
          return(
            <div className="my">
                <Mheadcontent></Mheadcontent>

                <div className="tochoose">
                    <div className="man"><i className='fa fa-user-o'></i></div>
                    <div><span>注册</span><span> | </span><span>登录</span></div>
                </div>

                <div className="myInfo">
                  <div className="menu">
                      <div className="menu1">
                                                
                          <p><i className="fa fa-users" aria-hidden="true" ></i>我的订单</p>
                          <p>查看我的全部订单
                              <i className="fa fa-angle-right" aria-hidden="true" ></i>
                          </p>
                      </div>
                      <ul className="menu2">
                          <li>          
                              <i className="fa fa-users" aria-hidden="true" ></i>
                              <span>待付款</span>
                          </li>
                          <li>          
                              <i className="fa fa-users" aria-hidden="true" ></i>
                              <span>待收货</span>
                          </li>
                          <li>          
                              <i className="fa fa-users" aria-hidden="true" ></i>
                              <span>待评价</span>
                          </li>
                          <li>          
                              <i className="fa fa-users" aria-hidden="true" ></i>
                              <span>退货/退款</span>
                          </li>
                      </ul>
                  </div>

                   <div className="property">
                      <div className="property1">    
                          <p><i className="fa fa-users" aria-hidden="true" ></i>我的资产</p>                             
                      </div>
                      <ul className="property2">
                          <li>          
                              <span>现金券</span>
                          </li>
                          <li>          
                              <span>红包</span>
                          </li>
                          <li>          
                              <span>聚美余额</span>
                          </li>
                          <li>          
                              <span>礼品卡</span>
                          </li>
                      </ul>
                  </div>

                  <ul className="others">
                      <li>
                        
                        <span><i className="fa fa-users" aria-hidden="true" ></i>售后服务</span>
                        <i className="fa fa-angle-right" aria-hidden="true" ></i>
                      </li>
                      <li>
                        
                        <span><i className="fa fa-users" aria-hidden="true" ></i>意见反馈</span>
                        <i className="fa fa-angle-right" aria-hidden="true" ></i>
                      </li>
                      <li>
                        
                        <span><i className="fa fa-users" aria-hidden="true" ></i>收货地址</span>
                        <i className="fa fa-angle-right" aria-hidden="true" ></i>
                      </li>
                      <li>
                        
                        <span><i className="fa fa-users" aria-hidden="true" ></i>退出登录</span>
                        <i className="fa fa-angle-right" aria-hidden="true" ></i>
                      </li>
                      <li>
                        
                        <span><i className="fa fa-users" aria-hidden="true" ></i>400-123-8888</span>
                        <i className="fa fa-angle-right" aria-hidden="true" ></i>
                      </li>             
                  </ul>

                  <div className="tel">
                      <p>客服热线400-123-8888  （8：00-22：00）</p>
                      <p>拨打前记录您的UID ()</p>
                  </div>

                </div>



            </div>
          )
    }


}
export default connect((state)=>{
    return state
},

(dispatch)=>{
    return {
       togglelist(){
          console.log(this)
          dispatch({
              type:"togglelist",
              isShowlist:!this.props.isShowlist
          })
       }
    }

}
)(Mcontent) ;
 



 
