import React from "react";
import {connect} from 'react-redux';
import Mheadtoreg from "./Mheadtoreg.jsx";


class Mregister extends React.Component{
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
              <Mheadtoreg></Mheadtoreg>

              <div className="register">
              
                  <h4>—————— 用户注册 ——————</h4> 
                  <input type="text" name="" value="" placeholder="请输入11位手机号" id="uname"/><br/>
                  <input type="number" name="" value="" id="ucode" placeholder="请输入验证码"/><span>验证</span><br/>
                  <input type="number" name=""  id="password" value="" placeholder="请输入6-16位登录密码"/><br/>
                  <input type="button" name="" value="注册"  /><br/>
                  <p>点击注册，表示同意 《聚美优品用户协议》</p>

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
)(Mregister) ;
 



 
