import React from "react";
import Hslider from './Hslider.jsx';
import {connect} from 'react-redux';
import Hsearchto from './Hsearchto.jsx';


class Hsearch extends React.Component{
    constructor(props) {
      super(props);
      this.state = {};
      this.props = props;
    };
    render(){
        return(
            <div>
               <div className="search">
                  <input  onClick={
                      this.props.toggleSearch.bind(this)
                    } placeholder="搜索商品  分类  功效"/>
                    
                  <i className="fa fa-bars" aria-hidden="true"
                    onClick={
                      this.props.toggleNav.bind(this)
                    }>
                  </i>
               </div>
               <Hsearchto></Hsearchto>
               <Hslider></Hslider> 
              
            </div>
            )
    }
}

/* react-redux:
    connect  连接 store*/
export default connect((state)=>{
    return state
},

(dispatch)=>{
    return {
       toggleNav(){
          console.log(this)
          dispatch({
              type:"toggleNav",
              isShowNav:!this.props.isShowNav
          })
       },
        toggleSearch(){
          console.log(this)
          dispatch({
              type:"toggleSearch",
              isShowSearch:!this.props.isShowSearch
          })
       }
    }

}
)(Hsearch) ;

//  <i className="fa fa-search" aria-hidden="true"></i>


 
/**/
/**/