import React from "react";
import {connect} from "react-redux";

class Mheadtoreg extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
      this.props = props;
    };

    render(){
        return(    

             <div className="toreg">
                <i className="fa fa-angle-left" aria-hidden="true"
                   
                    ></i>

                <span>注册</span>
                <span>登录</span>

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
 



 
