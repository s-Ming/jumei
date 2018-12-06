import React from "react";
import {connect} from 'react-redux';


class Mlogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.props = props;
        this.state = {
            homelist:[]
        }
    }

    


    render(){
        return(
            <div>
                
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
)(Mlogin) ;;
 



 
