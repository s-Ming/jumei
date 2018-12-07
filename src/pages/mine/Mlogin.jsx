import React from "react";
// import {connect} from 'react-redux';
import Mheadtolog from "./Mheadtolog.jsx";


class Mlogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
        this.state = {
            
        }
    }


       render(){
          return(
            <div>
                <Mheadtolog></Mheadtolog>
                <div className="login">
                    <h4>—————— 用户登录 ——————</h4> 
                    <input type="text" name="" value="" placeholder="请输入11位手机号" id="uname"/><br/>
                    <input type="number" name="" value="" id="ucode" placeholder="请输入验证码"/><span>验证</span><br/>
                    <input type="number" name=""  id="password" value="" placeholder="请输入6-16位登录密码"/><br/>
                    <input type="button" name="" value="登录"  /><br/>
                   
                </div>
            </div>
          )
    }


}
export default Mlogin ;
 



 
