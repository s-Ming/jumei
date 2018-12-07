import React from "react";
// import {connect} from "react-redux";
import {Link} from "react-router-dom";


class Mheadtolog extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
      this.props = props;
    };

    render(){
        return(    

            <div className="tolog">
                <Link to="/mine">
                <i className="fa fa-angle-left" aria-hidden="true"
                   
                ></i></Link>
                <span>登录</span>
                <Link to="/mregister">
                <span>注册</span>
                </Link>
            
             </div>
                 
        )
    }
}




export default Mheadtolog;
 



 
