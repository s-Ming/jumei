import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";


class Mheadtoreg extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
      this.props = props;
    };

    render(){
        return(    

            <div className="toreg">
                <Link to="/mine">
                <i className="fa fa-angle-left" aria-hidden="true"
                   
                ></i></Link>

                <span>注册</span>
                <Link to="/mlogin">
                <span>登录</span>
                </Link>

             </div>
                   
            )
    }
}




export default connect((state)=>{
    return state
},

(dispatch)=>{
    return {
       tog(){
          console.log(this)
          dispatch({
              type:"tog",
              isShow:!this.props.isShow
          })
       }
    }

}
)(Mheadtoreg) ;
 



 
