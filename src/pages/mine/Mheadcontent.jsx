import React from "react";
import {connect} from "react-redux";


class Mheadcontent extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
      this.props = props;
    };

    render(){
        return(    

            <div className="tocontent">
                <i className="fa fa-angle-left" aria-hidden="true"
                   
                    ></i>
                <span>我的聚美</span>
                <i className="fa fa-home" aria-hidden="true"

                ></i>
            
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
)(Mheadcontent) ;
 



 
