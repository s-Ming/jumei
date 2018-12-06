import React from "react";
import {connect} from 'react-redux';
// import Hslider2 from "./Hslider2.jsx";

class Hsearchto extends React.Component{
    constructor(props){
        super(props);
        this.props = props; 
        this.state = {
      
        };
    };



    render(){
        return(
            <div style={{"display":this.props.isShowSearch?'block':'none'}}>
                <ul className="searchto"> 

                    <div className="searchto_head">

                      <i className="fa fa-angle-left" aria-hidden="true"
                          onClick={
                        this.props.toggleSearch.bind(this)
                      }
                          ></i>
                      <input placeholder="搜索商品、 分类 、功效"/>   
                      <span>搜索</span> 

                    </div>

                   
                  
                </ul>

               
                  
            </div>
            
        )
    }


}


export default connect((state)=>{
    console.log(state)
    return state
},(dispatch)=>{
    return {
    
        toggleSearch(){
          console.log(this)
          dispatch({
              type:"toggleSearch",
              isShowNav:!this.props.isShowSearch
          })
       },


    }
}) (Hsearchto);


